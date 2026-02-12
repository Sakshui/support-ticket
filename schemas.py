from typing import Optional, Dict, Any, List,Union
from datetime import datetime
from pydantic import BaseModel, Field, model_validator
from enum import Enum

# ================================================ Tickets ====================================================================

class PriorityEnum(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


class TicketStatusEnum(str, Enum):
    OPEN = "open"
    PENDING = "pending"
    ASSIGNED = "assigned"
    CLOSED = "closed"

    @classmethod
    def _missing_(cls, value):
        """
        Allow case-insensitive matching:
            'OPEN', 'open', 'Open', 'OpEn' → TicketStatusEnum.OPEN
        """
        if isinstance(value, str):
            lower = value.lower()
            for member in cls:
                if member.value == lower:
                    return member
        return None

class TicketContent(BaseModel):
    subject: str
    description: Optional[str] = None
    attachment: Optional[List[str]] = None

class RaisedBy(BaseModel):
    user_id: str
    user_type: str
    email: Optional[str] = None
    name: Optional[str]  = None

class CustomerDetails(BaseModel):
    customer_id: int
    customer_first_name: str
    customer_last_name: str
    customer_email: str
    customer_phone: str

class AdditionalDetails(BaseModel):
    tags: Optional[List[str]] = None
    priority: PriorityEnum = PriorityEnum.LOW
    department: str

class SourceInfo(BaseModel):
    browser: Optional[str] = None
    os: Optional[str] = None
    device: Optional[str] = None
    raw_user_agent: Optional[str] = None

class TicketBase(BaseModel):
    support_ticket_id: str
    content: Optional[TicketContent]
    raised_by: Optional[RaisedBy]
    customer_details: Optional[CustomerDetails] = None
    additional_details: AdditionalDetails
    outlet_id: int
    api_key: Optional[str] = None
    source: Optional[SourceInfo] = None 
    status: TicketStatusEnum = TicketStatusEnum.PENDING
    assigned_agent: Optional[int] = None

    model_config = {"from_attributes": True}


class TicketUpdateIn(BaseModel):
    id: int
    outlet_id: int
    status: Optional[TicketStatusEnum]
    assigned_agent: Optional[int]

class TicketRead(TicketBase):
    id: int
    created_at: datetime
    updated_at: datetime
    is_in_trash: bool

class TicketRatingIn(BaseModel):
    id: int
    rating: int = Field(..., ge=1, le=10)
    
    model_config = {"from_attributes": True}


# ================================================ SupportSettings ====================================================================

class SettingJSON(BaseModel):
    prefix: Optional[str]       = Field(default="TKT")
    start_no: Optional[str]     = Field(default="001")
    auto_assign: Optional[bool] = Field(default=True)
    email_required: bool        = Field(default=True)


class SupportSettingsBase(BaseModel):
    outlet_id: int
    web_url: str
    settings: SettingJSON

    model_config = {"from_attributes": True}


class SupportSettingsRead(SupportSettingsBase):
    id: int



class SupportSettingsUpdateIn(SupportSettingsBase):
    id: int
