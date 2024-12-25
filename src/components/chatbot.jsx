import React, { useState, useEffect, useRef } from 'react';
import Layout from '@/components/layout'; // Importing shared layout for consistency
import { Button } from '@/components/ui/button'; // Reusable button component
import { Input } from '@/components/ui/input'; // Reusable input component
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Card UI components
import { ScrollArea } from '@/components/ui/scroll-area'; // Scrollable area
import { Avatar, AvatarFallback } from '@/components/ui/avatar'; // Avatar for chat messages

const AiAssistantPage = () => {
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
      const response = await fetch('https://Phi-3-mini-4k-instruct-lqhmi.eastus2.models.ai.azure.com/api/chat', {
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
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Study Assistant</h1>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Chat with Your AI Assistant</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] pr-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
                  <div className={`flex items-start ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>{message.sender === 'user' ? 'U' : 'AI'}</AvatarFallback>
                    </Avatar>
                    <div className={`mx-2 p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                      {message.text}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </ScrollArea>
            <div className="flex mt-4">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message here..."
                className="flex-grow mr-2"
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <Button onClick={sendMessage}>Send</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AiAssistantPage;
