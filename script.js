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

    const accountBtn = document.getElementById('accountBtn');
    const accountSlideout = document.getElementById('accountSlideout');
    const closeSlideout = document.getElementById('closeSlideout');
    const signInBtn = document.getElementById('signInBtn');
    const signOutBtn = document.getElementById('signOutBtn');

    accountBtn.addEventListener('click', function() {
        accountSlideout.classList.add('open');
    });

    closeSlideout.addEventListener('click', function() {
        accountSlideout.classList.remove('open');
    });

    signInBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Redirect to the authorization API sign-in page
        window.location.href = 'https://your-auth-provider.com/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code';
    });

    signOutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Perform sign out logic here
        console.log('User signed out');
        signInBtn.classList.remove('hidden');
        signOutBtn.classList.add('hidden');
    });

    // Check if user is already signed in (you'd typically check this server-side or in local storage)
    const isSignedIn = false; // Replace with actual check
    if (isSignedIn) {
        signInBtn.classList.add('hidden');
        signOutBtn.classList.remove('hidden');
    }
});