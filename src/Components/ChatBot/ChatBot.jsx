import React from 'react';
import "./ChatBot.css";
import chatbotImage from "./chatbot (1).png"; // Import the image

const ChatBot = () => {
  return (
    <div className="chatbot-container">
      <a href="http://localhost:8501" target="_blank" rel="noopener noreferrer"> 
        <img src={chatbotImage} alt="chatbot" />
      </a>
    </div>
  );
}

export default ChatBot;
