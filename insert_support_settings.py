import asyncio
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
from modules.TicketsHarbour.models import SupportSettings  


DATABASE_URL = "postgresql+asyncpg://ticket_user:ticket00@localhost:5432/ticket_db"
engine = create_async_engine(DATABASE_URL, echo=True)

AsyncSessionLocal = sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False
)



async def insert_support_setting():
    async with AsyncSessionLocal() as db:
        new_setting = SupportSettings(
            id=1,
            outlet_id=43,
            web_url="quickstart-990d097b.myshopify.com",
            settings={
                "support_email": "support@example.com",
                "support_phone": "+911234567890",
                "working_hours": "Mon-Fri 9:00-18:00",
                "enable_notifications": True
            }  
        )
        db.add(new_setting)
        await db.commit()
        await db.refresh(new_setting)
        print("Inserted ID:", new_setting.id)

asyncio.run(insert_support_setting())
