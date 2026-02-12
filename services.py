from .schemas import *
from .dao import *

class TicketService:

    @staticmethod
    async def save(**data):

        web_url = data.get('web_url')
        support_settings_for_outlet = await SupportSettingsDao.get_by_outlet_id_or_web_url(web_url=web_url)

        if not support_settings_for_outlet:
            return {"error": f"SupportSettings not found for shop '{web_url}'"}, 404

        data["outlet_id"] = support_settings_for_outlet.outlet_id

        additional = data.get("additional_details", {})
        if not additional or "department" not in additional:
            return {"error": "department field is required"}, 400

        outlet_id = data["outlet_id"]
        support_settings_for_outlet = await SupportSettingsDao.get_by_outlet_id_or_web_url(outlet_id=outlet_id)
        settings = support_settings_for_outlet.settings

        ticket_prefix = settings["prefix"]
        start_no = settings["start_no"]
        email_required = settings["email_required"]
        email = data.get("raised_by", {}).get("email")

        if email_required and email is None:
            return {"error": "kindly provide email to generate Ticket."}, 400

        # ---- Generate ticket number ----
        last_ticket = await TicketsDao.get_last_ticket(outlet_id=outlet_id)
        if last_ticket:
            current_no = ''.join(ch for ch in last_ticket if ch.isdigit())
            next_no = int(current_no) + 1
        else:
            next_no = int(start_no)

        padded_no = str(next_no).zfill(3)
        support_ticket_id = f"{ticket_prefix}{padded_no}"

        data["support_ticket_id"] = support_ticket_id

        # department = additional.get("department")
        # department_agents = await AgentsDao.filters(outlet_id=outlet_id, department=department)

        # if not department_agents:
        #     return {"error": f"No agents found for department '{department}'"}, 400
        
        # # Find agent with least open tickets, default to first agent
        # lowest_load = -1
        # selected_agent = department_agents[0]
        
        # for agent in department_agents:
        #     open_ticket_count = await TicketsDao.count_open_tickets_by_agent(agent_id=agent.id)
        #     if open_ticket_count < lowest_load or lowest_load == -1:
        #         lowest_load = open_ticket_count
        #         selected_agent = agent

        # data["assigned_agent"] = selected_agent.id

        ticket_model = TicketBase(**data)
        id_ = await TicketsDao.create(ticket_model)
        return {"id": id_}, 200
    
    @staticmethod
    async def filters(**filters):
        web_url = filters.get("web_url")
        outlet_id = await SupportSettingsDao.get_outlet_by_web_url(web_url=web_url)
        filters.pop("web_url")
        filters["outlet_id"] = outlet_id

        tickets = await TicketsDao.filters_unauth(**filters)
        tickets = [TicketRead.from_orm(ticket).dict() for ticket in tickets]
        return {"tickets": tickets}, 200


    @staticmethod
    async def delete(**data):
        id_ = data.get('id')
        if not id_:
            raise ValueError("Missing 'id' to delete ticket")
        ticket = await TicketsDao.get_by_id(id=id_)
        if not ticket:
            return {"ticket": None}, 404
        
        customer_id = data.get("customer_id")
        ticket_customer_id = (ticket.customer_details or {}).get("customer_id")

        if int(customer_id) == int(ticket_customer_id):
            await TicketsDao.delete(id=id_)
            return {"id": id_}, 200
        else:
            return {"id":None}, 403
        
    @staticmethod
    async def rate_ticket(**data):
        ticket_id = data.get("id")
        rating = data.get("rating")
        
        if not ticket_id or rating is None:
            return {"error": "id and rating are required"}, 400
        
        ticket = await TicketsDao.get_by_id(ticket_id)
        if not ticket:
            return {"error": "Ticket not found"}, 404
        
        if ticket.status != "closed":
            return {"error": "Can only rate closed tickets"}, 400
        
        rating_model = TicketRatingIn(id=ticket_id, rating=rating)
        
        id_ = await TicketsDao.update_agent_rating(ticket_id, rating_model.rating)
        return {"id": id_, "rating": rating_model.rating}, 200


class SupportSettingsService:

    @staticmethod
    async def save(**data):
        outlet_id = data.get("outlet_id")
        existing = await SupportSettingsDao.get_by_outlet_id_or_web_url(outlet_id=outlet_id)

        if existing:
            data["id"] = existing.id
            id_ = await SupportSettingsDao.update(SupportSettingsUpdateIn(**data))
            return {"id": id_}, 200

        model = SupportSettingsBase(**data)
        id_ = await SupportSettingsDao.create(model)
        return {"id": id_}, 200


    @staticmethod
    async def filters(**filters):
        settings = await SupportSettingsDao.filters(**filters)
        settings = [SupportSettingsRead.from_orm(i).model_dump() for i in settings]
        return {"settings": settings}, 200


    @staticmethod
    async def update(**data):
        id_ = await SupportSettingsDao.update(SupportSettingsUpdateIn(**data))
        return {"id": id_}, 200


    @staticmethod
    async def delete(**data):
        id_ = data.get("id")
        if not id_:
            raise ValueError("Missing id for deletion")

        await SupportSettingsDao.delete(id=id_)
        return {"id": id_}, 200
