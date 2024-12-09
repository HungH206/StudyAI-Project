from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

# Initialize Flask App
app = Flask(__name__)
CORS(app)

# OpenAI API Key Configuration
openai.api_key = "your_openai_api_key"  # Replace with your API key

# Chatbot Endpoint
@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json['message']
    
    try:
        # OpenAI GPT logic (You can modify this logic or use another AI model)
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=f"You are a helpful AI assistant. User: {user_message}",
            max_tokens=150
        )
        ai_message = response['choices'][0]['text'].strip()
    except Exception as e:
        ai_message = "Sorry, I am unable to process your request at the moment."

    return jsonify({"response": ai_message})

# Run Flask App
if __name__ == '__main__':
    app.run(debug=True)