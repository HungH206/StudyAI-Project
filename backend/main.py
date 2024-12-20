from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from azure.ai.inference import ChatCompletionsClient
from azure.core.credentials import AzureKeyCredential
import os
import logging

# Logging setup
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# FastAPI app
app = FastAPI(title="Phi-3.5 Mini Chatbot API")

# Azure configuration
AZURE_ENDPOINT = os.getenv("AZURE_ENDPOINT", "https://Phi-3-mini-4k-instruct-lqhmi.eastus2.models.ai.azure.com")
AZURE_API_KEY = os.getenv("AZURE_API_KEY", "XLnL0L2hehCJMIAeIa17T4IdxOJwFpkU")
MODEL_NAME = os.getenv("MODEL_NAME", "phi3-mini-4k")

# Initialize Azure client
client = ChatCompletionsClient(
    endpoint=AZURE_ENDPOINT,
    credential=AzureKeyCredential(AZURE_API_KEY)
)

# Request schema
class ChatRequest(BaseModel):
    messages: list
    max_tokens: int = 2048
    temperature: float = 0.8
    top_p: float = 0.9
    presence_penalty: float = 0
    frequency_penalty: float = 0

@app.post("/chat")
async def chat(request: ChatRequest):
    """Chat with the Phi-3.5 mini model."""
    try:
        payload = {
            "messages": request.messages,
            "max_tokens": request.max_tokens,
            "temperature": request.temperature,
            "top_p": request.top_p,
            "presence_penalty": request.presence_penalty,
            "frequency_penalty": request.frequency_penalty,
        }
        logger.debug(f"Payload: {payload}")

        # Send request to Azure OpenAI
        response = client.complete(payload)
        logger.debug(f"Response: {response}")

        return {
            "response": response.choices[0].message.content,
            "model": response.model,
            "usage": {
                "prompt_tokens": response.usage.prompt_tokens,
                "total_tokens": response.usage.total_tokens,
                "completion_tokens": response.usage.completion_tokens,
            },
        }

    except Exception as e:
        logger.error(f"Error: {e}")
        raise HTTPException(status_code=500, detail="Failed to get response from AI model.")

@app.get("/")
async def read_root():
    return {"message": "Welcome to the Phi-3.5 Mini Chatbot API"}

@app.get("/health")
async def health_check():
    """Health check endpoint."""
    return {"status": "healthy"}
