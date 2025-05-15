import { useEffect, useRef, useState } from "react";
import "./Chatbot.css";

export default function Chatbot({ messages }) {
  const bottomRef = useRef(null);
  const scrollAreaRef = useRef(null);
  const [displayedMessages, setDisplayedMessages] = useState([]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [displayedMessages]);

  useEffect(() => {
    const lastMsg = messages[messages.length - 1];
    const isBot = lastMsg && lastMsg.sender === "bot";

    if (isBot) {
      let currentText = "";
      let index = 0;

      const type = () => {
        if (index < lastMsg.text.length) {
          currentText += lastMsg.text[index];
          index++;
          const updated = [
            ...messages.slice(0, -1),
            { ...lastMsg, text: currentText },
          ];
          setDisplayedMessages(updated);
          setTimeout(type, 20);
        } else {
          setDisplayedMessages(messages);
        }
      };

      type();
    } else {
      setDisplayedMessages(messages);
    }
  }, [messages]);

  return (
    <div className="chat-background">
      <div className="chatbot-container">
        <div className="chatbot-scroll-area" ref={scrollAreaRef}>
          <div className="chatbot-spacer" />
          {displayedMessages.map((msg, index) => (
            <div
              key={msg.id}
              className={`chatbot-message ${
                index === displayedMessages.length - 1
                  ? msg.sender === "user"
                    ? "center-user"
                    : "center-bot"
                  : msg.sender === "user"
                  ? "left"
                  : "right"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={bottomRef}></div>
        </div>
      </div>
    </div>
  );
}
