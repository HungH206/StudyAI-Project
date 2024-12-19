from fastapi import FastAPI
from .chatbot_api import app as chatbot_app  # Use relative import for the FastAPI app instance

# Create a new FastAPI app
app = FastAPI(title="Chatbot API")

# Mount the chatbot app
app.mount("/chat", chatbot_app)

@app.get("/")
async def read_root():
    return {"message": "Chatbot API is running!"}

@app.get("/favicon.ico")
async def favicon():
    return "", 204