from flask import Flask, request, jsonify
from openai import AzureOpenAI
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Flask App Initialization
app = Flask(__name__)

# Azure OpenAI Configuration
AZURE_OPENAI_ENDPOINT = os.getenv("AZURE_OPENAI_ENDPOINT")
AZURE_OPENAI_KEY = os.getenv("AZURE_OPENAI_KEY")
MODEL_NAME = os.getenv("MODEL_NAME")  # e.g., "gpt-35-turbo"

# Validate Azure OpenAI configuration
if not AZURE_OPENAI_ENDPOINT or not AZURE_OPENAI_KEY or not MODEL_NAME:
    raise ValueError("Please ensure AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_KEY, and MODEL_NAME are set in the .env file.")

# Initialize Azure OpenAI client
client = AzureOpenAI(
    azure_endpoint=AZURE_OPENAI_ENDPOINT,
    api_key=AZURE_OPENAI_KEY,
    api_version="2024-05-01-preview"
)
@app.route('/')
def home():
    """
    Default route for the root URL.
    """
    return jsonify({"message": "Welcome to the AI Chatbot API! Use the /api/chat endpoint to interact."}), 200

@app.route('/api/chat', methods=['POST'])
def chat():
    """
    Chat endpoint to handle user messages and return AI responses.
    """
    try:
        # Retrieve user message from the request body
        user_message = request.json.get('message')
        if not user_message:
            return jsonify({"error": "The 'message' field is required."}), 400

        # Prepare chat prompt
        chat_prompt = [
            {"role": "system", "content": "You are a helpful AI assistant."},
            {"role": "user", "content": user_message}
        ]

        # Generate AI response
        completion = client.chat.completions.create(
            model=MODEL_NAME,
            messages=chat_prompt,
            max_tokens=800,
            temperature=0.7,
            top_p=0.95,
            frequency_penalty=0,
            presence_penalty=0,
            stop=None,
            stream=False
        )

        # Extract the AI-generated content
        ai_response = completion.choices[0].message["content"]

        # Return response to the user
        return jsonify({"response": ai_response})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
