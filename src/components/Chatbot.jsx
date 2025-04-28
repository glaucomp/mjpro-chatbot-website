import { useEffect, useRef } from "react";
import "./Chatbot.css";

export default function Chatbot({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    //bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chatbot-container">
      <div className="chatbot-scroll-area">
        <div style={{ flexGrow: 1 }} />{" "}
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
