# chatbot_api.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from azure.ai.inference import ChatCompletionsClient
from azure.core.credentials import AzureKeyCredential
import os

# Define a FastAPI app
app = FastAPI()

# Define the Pydantic model for incoming requests (message format)
class ChatRequest(BaseModel):
    messages: list
    max_tokens: int = 2048
    temperature: float = 0.8
    top_p: float = 0.1
    presence_penalty: float = 0
    frequency_penalty: float = 0

# Initialize the Azure ChatCompletionsClient
api_key = os.getenv("AZURE_INFERENCE_CREDENTIAL", 'XLnL0L2hehCJMIAeIa17T4IdxOJwFpkU')
if not api_key:
    raise Exception("Azure API key must be set")
client = ChatCompletionsClient(
    endpoint='https://Phi-3-mini-4k-instruct-lqhmi.eastus2.models.ai.azure.com',
    credential=AzureKeyCredential(api_key)
)


@app.post("/chat")
async def chat(request: ChatRequest):
    payload = {
        "messages": request.messages,
        "max_tokens": request.max_tokens,
        "temperature": request.temperature,
        "top_p": request.top_p,
        "presence_penalty": request.presence_penalty,
        "frequency_penalty": request.frequency_penalty
    }
    try:
        response = client.complete(payload)
        return {
            "response": response.choices[0].message.content,
            "model": response.model,
            "usage": {
                "prompt_tokens": response.usage.prompt_tokens,
                "total_tokens": response.usage.total_tokens,
                "completion_tokens": response.usage.completion_tokens
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def read_root():
    return {"message": "Welcome to the AI Chatbot API"}

@app.get("/favicon.ico")
async def favicon():
    return "", 204