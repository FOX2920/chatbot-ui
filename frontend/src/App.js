import React, { useState, useEffect } from 'react';
import ChatWindow from './components/ChatWindow';
import InputArea from './components/InputArea';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    setSessionId(Date.now().toString());
  }, []);

  const addMessage = (message, isUser = true) => {
    setMessages(prevMessages => [...prevMessages, { text: message, isUser }]);
  };

  const handleSendMessage = async (message) => {
    addMessage(message);
    setIsTyping(true);

    try {
      const response = await fetch('https://chatbot-ui-9i2s.onrender.com/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          message: message,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setIsTyping(false);
      addMessage(data.response, false);
    } catch (error) {
      console.error('Error:', error);
      setIsTyping(false);
      addMessage("Sorry, there was an error processing your request.", false);
    }
  };

  useEffect(() => {
    if (sessionId) {
      handleSendMessage("Hello!");
    }
  }, [sessionId]);

  return (
    <div className="App">
      <header>
        <h1>AI Chatbot</h1>
      </header>
      <main>
        <ChatWindow messages={messages} />
        {isTyping && <div className="typing-indicator">AI is typing<span>.</span><span>.</span><span>.</span></div>}
        <InputArea onSendMessage={handleSendMessage} />
      </main>
    </div>
  );
}

export default App;
