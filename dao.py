from sqlalchemy import text, or_, select, bindparam
from .models import *
from.schemas import *
from app.database import *
from typing import Tuple
from app.database import SupportTicketAsyncSession
from sqlalchemy import func

JSON_KEY_MAPPING = {
    "email": "raised_by",
    "user_id": "raised_by",
    "user_type": "raised_by",
    "name": "raised_by",

    "customer_id": "customer_details",
    "customer_name": "customer_details",
    "customer_email": "customer_details",

    "priority": "additional_details",
    "department": "additional_details",
    "tags": "additional_details",
}

NORMAL_COLUMNS = {
    "created_at" : Ticket.created_at,
    "status": Ticket.status,
    "support_ticket_id" : Ticket.support_ticket_id,
    "outlet_id": Ticket.outlet_id,
    "assigned_agent": Ticket.assigned_agent,
}

# -------------------------------------------------------------- TickitsHarbour ------------------------------------------------------------

class TicketsDao:

    @staticmethod
    async def create(ticket: TicketBase) -> int:
        ticket_obj = Ticket(**ticket.dict())
        return await create(ticket_obj)

    @staticmethod
    async def get_by_support_ticket_id(support_ticket_id: String) -> Optional[Ticket]:
        query = select(Ticket).where(Ticket.support_ticket_id== support_ticket_id)
        return await fetch_one(query)

    @staticmethod
    async def get_by_assigned_agent(id: int):
        query = select(Ticket).where(Ticket.assigned_agent == id)
        return await fetch_all(query)

    @staticmethod
    async def get_by_id(id: int) -> Optional[Ticket]:
        query = select(Ticket).where(Ticket.id== id)
        return await fetch_one(query)

    @staticmethod
    async def get_last_ticket(outlet_id: int) -> Optional[str]:
        query = select(Ticket.support_ticket_id).where(Ticket.outlet_id == outlet_id).order_by(Ticket.id.desc()).limit(1)

        async with SupportTicketAsyncSession() as session:
            result = await session.execute(query)
            row = result.scalar_one_or_none()

            if row is None:
                return None
            return str(row)     

    @staticmethod
    async def get_outlet(shop: str) -> Tuple[str, str]:
        query = text(""" SELECT * FROM shopify_shop WHERE shop = :shop """).bindparams(shop=shop)
        result = await fetch_one(query)
        if not result:
            raise ValueError("No outlet info found")
        return result

    @staticmethod
    async def get_paginated_tickets(
        outlet_id: int,
        limit: int,
        offset: int,
        search: str | None = None,
        filters: dict | None = None,
        sort_by: str = "created_at",
        sort_order: str = "desc"):
        
        # base select query to fetch based on outlet_id
        query = select(Ticket).where(Ticket.outlet_id == outlet_id)
        
        # search
        if search is not None:
            search_pattern = f"%{search}%"
            
            query = query.where(
            or_(
                Ticket.support_ticket_id.ilike(search_pattern),
                Ticket.customer_details["customer_first_name"].astext.ilike(search_pattern),
                Ticket.customer_details["customer_last_name"].astext.ilike(search_pattern),
                Ticket.customer_details["customer_email"].astext.ilike(search_pattern),
                Ticket.content["subject"].astext.ilike(search_pattern),
                Ticket.content["description"].astext.ilike(search_pattern),
            )
        )
        
        # filter
        if filters is not None:
            for key, value in filters.items():
                
                if key in NORMAL_COLUMNS:
                    query = query.where(NORMAL_COLUMNS[key] == value)
                
                elif key in JSON_KEY_MAPPING:
                    column = getattr(Ticket, JSON_KEY_MAPPING[key])
                    query = query.where(column[key].astext == str(value))
                
                else:
                    raise ValueError(f"Unsupported filter: {key}")

        # sort & order
        SORTABLE_EXPRESSIONS = {
            "created_at": Ticket.created_at,
            "support_ticket_id": Ticket.support_ticket_id,
            "priority": Ticket.additional_details["priority"].astext,
            "department": Ticket.additional_details["department"].astext,
        }

        column = SORTABLE_EXPRESSIONS.get(sort_by, Ticket.created_at)

        if sort_order == "asc":
            query = query.order_by(column.asc())
        else:
            query = query.order_by(column.desc())
        
        # fallback sort_by
        if sort_by is None and sort_order is None:
            query = query.order_by(Ticket.support_ticket_id.asc())
        
        # total count
        count_query = select(func.count()).select_from(query.subquery())
        total_count = await fetch_all(count_query)
        
        # limit & offset
        query = query.limit(limit).offset(offset)
        row_query = await fetch_all(query)
        
        return row_query, total_count

    @staticmethod
    async def get_ticket_stats(outlet_id: int):
        query = (
            select(
                func.count().label("total"),
                func.count().filter(Ticket.status == "open").label("open_count"),
                func.count().filter(Ticket.status == "pending").label("pending_count"),
                func.count().filter(Ticket.status == "closed").label("closed_count"),
                func.count().filter(Ticket.status == "assigned").label("assigned_count"),
            ).where(Ticket.outlet_id == outlet_id)
        )

        result = await execute_query(query)

        row = result.one()  # IMPORTANT

        return {
            "total_tickets_count": row.total,
            "open_tickets_count": row.open_count,
            "pending_tickets_count": row.pending_count,
            "closed_tickets_count": row.closed_count,
            "assigned_tickets_count": row.assigned_count,
        }

    @staticmethod
    async def update(ticket: TicketUpdateIn) -> int:
        ticket = Ticket(**ticket.dict())
        return await update(ticket)

    @staticmethod
    async def update_status_and_agent(ticket_update: TicketUpdateIn):
        """
        Update ticket using TicketUpdateIn typehint.
        Sets closed_at timestamp when status changes to 'closed'.
        """
        status_value = ticket_update.status.value.lower() if hasattr(ticket_update.status, 'value') else str(ticket_update.status).lower()
        
        # Set closed_at if status is being changed to 'closed'
        if status_value == 'closed':
            query = text("""
                UPDATE tickets
                SET 
                    status = :status,
                    assigned_agent = :assigned_agent,
                    updated_at = NOW(),
                    closed_at = CASE 
                        WHEN closed_at IS NULL THEN NOW()
                        ELSE closed_at
                    END
                WHERE id = :id AND outlet_id = :outlet_id
                RETURNING id;
            """)
        else:
            query = text("""
                UPDATE tickets
                SET 
                    status = :status,
                    assigned_agent = :assigned_agent,
                    updated_at = NOW()
                WHERE id = :id AND outlet_id = :outlet_id
                RETURNING id;
            """)
        
        query = query.bindparams(
            id=ticket_update.id,
            outlet_id=ticket_update.outlet_id,
            status=status_value,
            assigned_agent=ticket_update.assigned_agent
        )

        result = await execute_query(query)
        row = result.fetchone()
        return row[0] if row else None

    @staticmethod
    async def update_agent_rating(id: int, rating: int):
        query = text("""
                UPDATE tickets
                SET 
                    agent_rating = :rating,
                    updated_at = NOW()
                WHERE id = :id
                RETURNING id;
            """).bindparams(id=id, rating=rating)
        
        result = await execute_query(query)
        row = result.fetchone()
        return row[0] if row else None

    @staticmethod
    async def update_customer_rating(ticket_id: int, rating: int):
        async with SupportTicketAsyncSession() as session:
            query = text("""
                UPDATE tickets
                SET 
                    customer_rating = :rating,
                    updated_at = NOW()
                WHERE id = :id
                RETURNING id;
            """).bindparams(id=ticket_id, rating=rating)
        
        result = await execute_query(query)
        row = result.fetchone()
        return row[0] if row else None

    @staticmethod
    async def delete(id: int):
        await delete_by_id(Ticket, id=id)

    @staticmethod
    async def filters(**filters) -> List[Ticket]:
        query = select(Ticket)
        conditions = [getattr(Ticket, key) == value for key, value in filters.items()]
        query = select(Ticket).where(*conditions)
        return await fetch_all(query)

    @staticmethod
    async def filters_unauth(**filters) -> List[Ticket]:
        query = select(Ticket)
        conditions = []

        for key, value in filters.items():
            if hasattr(Ticket, key):
                conditions.append(getattr(Ticket, key) == value)
                continue
            
            json_field = JSON_KEY_MAPPING.get(key)
            if json_field:
                column = getattr(Ticket, json_field)
                conditions.append(column[key].astext == str(value))
                continue
        query = select(Ticket).where(*conditions)
        return await fetch_all(query)

    @staticmethod
    async def count_open_tickets_by_agent(agent_id: int) -> int:
        query = select(func.count(Ticket.id)).where(Ticket.assigned_agent == agent_id, Ticket.status != 'closed')
        return await fetch_one(query)

# -------------------------------------------------------------- SupportSettings ------------------------------------------------------------

class SupportSettingsDao:

    @staticmethod
    async def create(setting: SupportSettingsBase) -> int:
        setting = SupportSettings(**setting.dict())
        return await create(setting)
    
    @staticmethod
    async def get_by_outlet_id_or_web_url(outlet_id: Optional[int]=None, web_url: Optional[str]=None) -> Optional[SupportSettings]:
        if outlet_id:
            query = select(SupportSettings).where(SupportSettings.outlet_id == outlet_id)
        else:
            query = select(SupportSettings).where(SupportSettings.web_url == web_url)
        return await fetch_one(query)

    @staticmethod
    async def get_by_api_key(api_key: str) -> Optional[SupportSettings]:
        query = select(SupportSettings).where(
            SupportSettings.api_key == api_key
        )
        return await fetch_one(query)
    
    @staticmethod
    async def get_outlet_by_web_url(web_url: str)-> int:
        query = select(SupportSettings.outlet_id).where(SupportSettings.web_url == web_url)
        
        outlet_id = await fetch_one(query)
        if not outlet_id:
            raise ValueError(f"No outlet found for web_url: {web_url}")
        return outlet_id
    
    @staticmethod
    async def filters(**filters) -> List[SupportSettings]:
        query = select(SupportSettings)
        conditions = [getattr(SupportSettings, key) == value for key, value in filters.items()]
        query = select(SupportSettings).where(*conditions)
        return await fetch_all(query)
    
    @staticmethod
    async def update(setting: SupportSettingsUpdateIn) -> int:
        setting = SupportSettings(**setting.dict())
        return await update(setting)
    
    @staticmethod
    async def delete(id: int):
        await delete_by_id(SupportSettings, id=id)

    @staticmethod
    async def get_outlet_by_api_key(api_key: str):
        query = text("""
            SELECT outlet_id
            FROM shopify_shop
            WHERE api_key = :api_key
        """).bindparams(api_key=api_key)

        result = await fetch_one(query)

        if not result:
            raise ValueError("Invalid API Key")

        return result
