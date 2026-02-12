from fastapi import Request
from typing import Optional
from app.utility import ApiResponse, get_request_data
from app.project_schemas import APIResponse
from user_agents import parse

from .services import *

# ============================================== UNAUTHENTICATED CUSTOMER TICKET CONTROLLER ========================================

async def tickets_controller(request: Request) -> ApiResponse:   
    data = await get_request_data(request.headers.get("content-type", ""), request)

    web_url = data.get("web_url")
    customer_id = data.get("customer_details", {}).get("customer_id") or data.get("customer_id")
    email = data.get("raised_by", {}).get("email") or data.get("email")

    if not web_url:
        return APIResponse.error(message="Missing param web_url", code=400)

    if not customer_id or not email:
        return APIResponse.error(message="customer_id or email not found", code=400)

    method = request.method

    match method:
        case "POST":
                result, status_code = await TicketService.save(**data)
                message = "Tickets send successfully"
        case "GET":
            support_ticket_id = data.get("support_ticket_id")
            if support_ticket_id:
                result, status_code = await TicketService.get_by_support_ticket_id(support_ticket_id)
            else:
                result, status_code = await TicketService.filters(**data)
                message = "Tickets fetched successfully"
        case "PUT":
            result, status_code = await TicketService.update(**data)
            message = "Tickets updated successfully"
        case "DELETE":
            result, status_code = await TicketService.delete(**data)
            message = "Tickets deleted successfully"
        case _:
            return APIResponse.error(message="Method not allowed", code=405)

    return APIResponse.success(data=result, message=message, code=status_code)


# ========================== SUPPORT SETTINGS CONTROLLER ==========================

async def support_settings_controller(request: Request, outlet_id: Optional[int]) -> ApiResponse:
    data = await get_request_data(request.headers.get("content-type", ""), request)
    data.update({"outlet_id": outlet_id})

    method = request.method

    match method:
        case "POST":
            result, status_code = await SupportSettingsService.save(**data)
            message = "SupportSettings created successfully"

        case "GET":
            result, status_code = await SupportSettingsService.filters(**data)
            message = "SupportSettings fetched successfully"

        case "PUT":
            result, status_code = await SupportSettingsService.update(**data)
            message = "SupportSettings updated successfully"

        case "DELETE":
            result, status_code = await SupportSettingsService.delete(**data)
            message = "SupportSettings deleted successfully"

        case _:
            return APIResponse.error(message="Method not allowed", code=405)

    return APIResponse.success(data=result, message=message, code=status_code)


# ========================== TICKET RATING CONTROLLERS ==========================

async def customer_rating_controller(request: Request) -> ApiResponse:
    data = await get_request_data(request.headers.get("content-type", ""), request)
    
    result, status_code = await TicketService.rate_ticket(**data)
    
    if status_code == 200:
        message = "Rating submitted successfully"
    else:
        message = result.get("error", "Rating failed")
    
    return APIResponse.success(data=result, message=message, code=status_code)