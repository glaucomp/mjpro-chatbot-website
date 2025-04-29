import { useEffect, useRef } from "react";
import "./Chatbot.css";

export default function Chatbot({ messages }) {
  const bottomRef = useRef(null);
  const scrollAreaRef = useRef(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chatbot-container">
      <div className="chatbot-scroll-area" ref={scrollAreaRef}>
        <div className="chatbot-spacer" />
        {messages.map((msg, index) => (
          <div
            key={msg.id}
            className={`chatbot-message ${
              index === messages.length - 1
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
  );
}
