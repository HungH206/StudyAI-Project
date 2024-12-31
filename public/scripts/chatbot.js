const MAX_MESSAGES = 50; // Limit message history
const API_URL = 'http://localhost:8000/chat'; // Chat API URL


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
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: [{ role: "user", content: input }],  // Wrap input in a list with role and content
            max_tokens: 2048,
            temperature: 0.8,
            top_p: 0.9,
            presence_penalty: 0,
            frequency_penalty: 0
          })
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
  