from .schemas import *

review_handler_docs = {
    "POST": {
        "summary": "Create Review",
        "description": (
            "**📝 Submit a New Review**\n\n"
            "Creates a new review for a shop or product.\n\n"
            "**Required fields:**\n"
            "- `first_name`, `last_name`, `email`\n"
            "- `shop` (`shop name`)\n"
            "- `stars`: Rating details (`product_review` optional, `shop_review` required)\n"
            "- `review`: Review content (`title`, `description`, optional `attachment`)\n"
            "- `platform`, `customer_id`, `shop`, `review_type`, `user_type`, `status`\n\n"
            "**Returns:**\n"
            "- Created review ID"
        ),
        "openapi_extra": {
            "requestBody": {
                "required": True,
                "content": {
                    "application/json": {
                        "schema": None
                    }
                }
            }
        }
    },
    "GET": {
        "summary": "Get Reviews",
        "description": (
            "**🔍 Retrieve Reviews**\n\n"
            "Fetch a single review by `id` or filter reviews by other fields.\n\n"
            "**Query Params (optional):**\n"
            "- `id`: Retrieve a specific review\n"
            "- `outlet_id`, `customer_id`, `platform`, etc., for filtering\n\n"
            "**Returns:**\n"
            "- Single review object or a list of reviews matching filters"
        ),
        "openapi_extra": {
            "parameters": [
                {
                    "name": "id",
                    "in": "query",
                    "required": False,
                    "schema": {"type": "integer"},
                    "description": "Review ID"
                }
                # Additional filter parameters can be added here
            ]
        }
    },
    "PUT": {
        "summary": "Update Review",
        "description": (
            "**✏️ Update an Existing Review**\n\n"
            "Modify an existing review by providing all required fields.\n\n"
            "**Required fields:**\n"
            "- `id`: ID of the review to update\n"
            "- All other fields as per `ReviewUpdateIn`\n\n"
            "**Returns:**\n"
            "- Updated review ID"
        ),
        "openapi_extra": {
            "requestBody": {
                "required": True,
                "content": {
                    "application/json": {
                        "schema": None
                    }
                }
            }
        }
    },
    "DELETE": {
        "summary": "Delete Review",
        "description": (
            "**🗑️ Remove a Review**\n\n"
            "Delete a review using its ID.\n\n"
            "**Query Params:**\n"
            "- `id`: ID of the review to delete (required)\n\n"
            "**Returns:**\n"
            "- Deletion success confirmation\n\n"
            "**Errors:**\n"
            "- `400`: Missing or invalid ID"
        ),
        "openapi_extra": {
            "parameters": [
                {
                    "name": "id",
                    "in": "query",
                    "required": True,
                    "schema": {"type": "integer"},
                    "description": "ID of the review to delete"
                }
            ]
        }
    }
}

reply_handler_docs = {
    "POST": {
        "summary": "Create Reply",
        "description": (
            "**💬 Submit a New Reply**\n\n"
            "Creates a reply for an existing review (by customer or merchant).\n\n"
            "**Required fields:**\n"
            "- `review_id`: ID of the review being replied to\n"
            "- `outlet_id`: ID of the outlet/shop\n"
            "- `reply`: Object with `title` (optional) and `description` (required)\n"
            "- `user_type`: Either `GUEST` or `LOGGED_IN`\n"
            "- `is_by_merchant`: `true` if reply is by merchant, else `false`\n\n"
            "**Optional fields:**\n"
            "- `first_name`, `last_name`, `email`\n"
            "- `status`: Defaults to `PENDING`\n\n"
            "**Returns:**\n"
            "- Created reply ID"
        ),
        "openapi_extra": {
            "requestBody": {
                "required": True,
                "content": {
                    "application/json": {
                        "schema": None,
                        "example": {
                            "review_id": 12,
                            "outlet_id": 5,
                            "is_by_merchant": True,
                            "first_name": "John",
                            "last_name": "Doe",
                            "email": "john.doe@example.com",
                            "reply": {
                                "title": "Thanks for your feedback",
                                "description": "We appreciate your review and will improve our service!"
                            },
                            "user_type": "LOGGED_IN",
                            "status": "PENDING"
                        }
                    }
                }
            }
        }
    },
    "GET": {
        "summary": "Get Replies",
        "description": (
            "**🔍 Retrieve Replies**\n\n"
            "Fetch replies by `id` or filter using query params.\n\n"
            "**Query Params (optional):**\n"
            "- `id`: Retrieve a specific reply\n"
            "- `review_id`: Replies for a specific review\n"
            "- `outlet_id`, `is_by_merchant`, `user_type`, `status`\n\n"
            "**Returns:**\n"
            "- A single reply or a list of replies"
        ),
        "openapi_extra": {
            "parameters": [
                {
                    "name": "id",
                    "in": "query",
                    "required": False,
                    "schema": {"type": "integer"},
                    "description": "Reply ID"
                },
                {
                    "name": "review_id",
                    "in": "query",
                    "required": False,
                    "schema": {"type": "integer"},
                    "description": "Filter by review ID"
                },
                {
                    "name": "outlet_id",
                    "in": "query",
                    "required": False,
                    "schema": {"type": "integer"},
                    "description": "Filter by outlet ID"
                },
                {
                    "name": "is_by_merchant",
                    "in": "query",
                    "required": False,
                    "schema": {"type": "boolean"},
                    "description": "Filter by merchant replies"
                },
                {
                    "name": "user_type",
                    "in": "query",
                    "required": False,
                    "schema": {"type": "string", "enum": ["GUEST", "LOGGED_IN"]},
                    "description": "Filter by user type"
                },
                {
                    "name": "status",
                    "in": "query",
                    "required": False,
                    "schema": {"type": "string", "enum": ["PENDING", "ACTIVE", "REJECTED", "TRASH"]},
                    "description": "Filter by reply status"
                }
            ]
        }
    },
    "PUT": {
        "summary": "Update Reply",
        "description": (
            "**✏️ Update an Existing Reply**\n\n"
            "Modify a reply by providing its `id` and updated fields.\n\n"
            "**Required fields:**\n"
            "- `id`: ID of the reply to update\n"
            "- Other fields same as `ReplyUpdateIn`\n\n"
            "**Returns:**\n"
            "- Updated reply ID"
        ),
        "openapi_extra": {
            "requestBody": {
                "required": True,
                "content": {
                    "application/json": {
                        "schema":TicketUpdateIn.model_json_schema(),
                        "example": {
                            "id": 7,
                            "review_id": 12,
                            "outlet_id": 5,
                            "is_by_merchant": False,
                            "first_name": "Jane",
                            "last_name": "Smith",
                            "email": "jane.smith@example.com",
                            "reply": {
                                "title": "Clarification",
                                "description": "Could you please provide more details?"
                            },
                            "user_type": "GUEST",
                            "status": "ACTIVE"
                        }
                    }
                }
            }
        }
    },
    "DELETE": {
        "summary": "Delete Reply",
        "description": (
            "**🗑️ Remove a Reply**\n\n"
            "Delete a reply using its ID.\n\n"
            "**Query Params:**\n"
            "- `id`: ID of the reply to delete (required)\n\n"
            "**Returns:**\n"
            "- Deletion success confirmation\n\n"
            "**Errors:**\n"
            "- `400`: Missing or invalid ID"
        ),
        "openapi_extra": {
            "parameters": [
                {
                    "name": "id",
                    "in": "query",
                    "required": True,
                    "schema": {"type": "integer"},
                    "description": "ID of the reply to delete"
                }
            ]
        }
    }
}
