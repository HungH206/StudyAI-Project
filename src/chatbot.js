const MAX_MESSAGES = 50; // Limit message history
const API_URL = process.env.REACT_APP_API_URL || 'http:////Phi-3-mini-4k-instruct-lqhmi.eastus2.models.ai.azure.com/api/chat';


const res = await axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/chat`,
    { messages: updatedMessages }
  );
  
  document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
  
    const messages = [
      { content: "Hello! I'm your AI study assistant. How can I help you today?", sender: 'bot' }
    ];
  
    const renderMessages = () => {
      chatMessages.innerHTML = messages.map(message => `
        <div class="flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4">
          <div class="max-w-xs p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}">
            ${message.content}
          </div>
        </div>
      `).join('');
      chatMessages.scrollTop = chatMessages.scrollHeight;
    };
  
    const sendMessage = async () => {
      const input = userInput.value.trim();
      if (!input) return;
  
      messages.push({ content: input, sender: 'user' });
      userInput.value = '';
      renderMessages();
  
      try {
        const response = await fetch('http://Phi-3-mini-4k-instruct-lqhmi.eastus2.models.ai.azure.com/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: input })
        });
        const data = await response.json();
        messages.push({ content: data.response, sender: 'bot' });
      } catch (error) {
        console.error('Error:', error);
        messages.push({ content: 'Error fetching response. Please try again.', sender: 'bot' });
      } finally {
        renderMessages();
      }
    };
  
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });
  
    renderMessages();
  });
  