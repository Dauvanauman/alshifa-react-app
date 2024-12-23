import { useState } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chatbot">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Chat with us</h3>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="chatbot-messages">
            {/* चैट मैसेज यहाँ आएंगे */}
          </div>
          <div className="chatbot-input">
            <input type="text" placeholder="Type your message..." />
            <button>Send</button>
          </div>
        </div>
      )}
      
      {!isOpen && (
        <button 
          className="chatbot-trigger"
          onClick={() => setIsOpen(true)}
        >
          Chat with us
        </button>
      )}
    </div>
  );
}

export default Chatbot;
