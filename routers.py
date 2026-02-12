from fastapi import APIRouter, Depends, Request
from app.utility import ApiResponse
from app.project_schemas import APIResponse
from app.auth import verify_jwt_token

from .controller import *

router = APIRouter()

# ========================== UNAUTHENTICATED TICKET ROUTES ==========================

@router.api_route("/handler/shop", methods=["POST"], response_model=APIResponse[dict], response_class=ApiResponse)
async def create_tickets(request: Request):
    return await tickets_controller(request=request)


@router.api_route("/handler/shop", methods=["GET"], response_model=APIResponse[dict], response_class=ApiResponse)
async def get_tickets(request: Request):
    return await tickets_controller(request=request)


@router.api_route("/handler/shop", methods=["DELETE"], response_model=APIResponse[dict], response_class=ApiResponse)
async def delete_ticket(request: Request):
    return await tickets_controller(request=request)



# ========================== SUPPORT SETTINGS ROUTES ==========================

@router.api_route("/settings/", methods=["POST"], response_model=APIResponse[dict], response_class=ApiResponse)
async def create_support_settings(request: Request, auth_data=Depends(verify_jwt_token)):
    outlet_id = auth_data.get("outlet_id")
    
    return await support_settings_controller(request, outlet_id=outlet_id)


@router.api_route("/settings/", methods=["GET"], response_model=APIResponse[dict], response_class=ApiResponse)
async def get_support_settings(request: Request, auth_data=Depends(verify_jwt_token)):
    outlet_id = auth_data.get("outlet_id")
    return await support_settings_controller(request, outlet_id=outlet_id)


@router.api_route("/settings/", methods=["PUT"], response_model=APIResponse[dict], response_class=ApiResponse)
async def update_support_settings(request: Request, auth_data=Depends(verify_jwt_token)):
    outlet_id = auth_data.get("outlet_id")
    return await support_settings_controller(request, outlet_id=outlet_id)


@router.api_route("/settings/", methods=["DELETE"], response_model=APIResponse[dict], response_class=ApiResponse)
async def delete_support_settings(request: Request, auth_data=Depends(verify_jwt_token)):
    outlet_id = auth_data.get("outlet_id")
    return await support_settings_controller(request, outlet_id=outlet_id)


# ========================== RATING ROUTES ==========================

# Unauthenticated (customer)
@router.api_route("/ratings/shop", methods=["POST", "GET", "PUT", "DELETE"], response_model=APIResponse[dict], response_class=ApiResponse)
async def create_customer_rating(request: Request):
    return await customer_rating_controller(request)