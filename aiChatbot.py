from dotenv import load_dotenv
import os
from flask import Flask, request, jsonify
from openai import OpenAI
from azure.identity import DefaultAzureCredential, get_bearer_token_provider
import requests

# Load environment variables from .env file
load_dotenv()

# Initialize Flask App
app = Flask(__name__)

# Azure OpenAI and Bot Service configurations
AZURE_OPENAI_ENDPOINT = os.getenv("AZURE_OPENAI_ENDPOINT")
AZURE_OPENAI_KEY = os.getenv("AZURE_OPENAI_KEY")
AZURE_BOT_SERVICE_ENDPOINT = os.getenv("AZURE_BOT_SERVICE_ENDPOINT")
MODEL_NAME = "gpt-35-turbo"  # Replace with your Azure OpenAI model

# Initialize Azure OpenAI client
# Initialize Azure OpenAI client
OpenAI.api_key = AZURE_OPENAI_KEY
OpenAI.api_base = AZURE_OPENAI_ENDPOINT

@app.route('/api/chat', methods=['POST'])
def chat():
    """Handles chat messages from the user."""
    try:
        user_message = request.json.get('message')
        if not user_message:
            return jsonify({"error": "Message field is required."}), 400

        # Use Azure OpenAI to generate a response
        response = OpenAI.ChatCompletion.create(
            model=MODEL_NAME,
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": user_message}
            ]
        )

        assistant_message = response['choices'][0]['message']['content']

        # Optionally log the chat to Azure Bot Service
        log_to_bot_service(user_message, assistant_message)

        return jsonify({"response": assistant_message})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


def log_to_bot_service(user_message, assistant_message):
    """Logs the conversation to Azure Bot Service."""
    try:
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {AZURE_OPENAI_KEY}'
        }
        payload = {
            "userMessage": user_message,
            "botResponse": assistant_message
        }
        response = requests.post(AZURE_BOT_SERVICE_ENDPOINT, headers=headers, json=payload)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"Failed to log to Bot Service: {e}")


if __name__ == '__main__':
    app.run(debug=True)
