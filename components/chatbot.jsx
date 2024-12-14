import React, { useState, useEffect, useRef } from 'react';


const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === '' || isLoading) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messages.concat(userMessage).map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text
          })),
          max_tokens: 2048,
          temperature: 0.8,
          top_p: 0.1,
          presence_penalty: 0,
          frequency_penalty: 0
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessages(prevMessages => [
        ...prevMessages,
        { text: data.response, sender: 'bot' }
      ]);
    } catch (error) {
      console.error('Error in AI response:', error);
      setMessages(prevMessages => [
        ...prevMessages,
        { text: 'Sorry, I encountered an error. Please try again.', sender: 'bot' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px] w-full max-w-md mx-auto border rounded-lg overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={sendMessage} className="flex p-4 bg-gray-100">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default Chatbot;

