/*import App from './index.html';*/

document.addEventListener('DOMContentLoaded', function() {
  /*document.getElementById('root').innerHTML = App();*/

    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    const chatMessages = document.querySelector('.chat-messages');

    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage('You', message);
            chatInput.value = '';
            // Simulate AI response
            setTimeout(() => {
                addMessage('AI', 'Thank you for your question. I\'m here to help!');
            }, 1000);
        }
    }

    function addMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});