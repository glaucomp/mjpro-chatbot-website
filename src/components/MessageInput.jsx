import { useState } from "react";
import "./MessageInput.css";

export default function MessageInput({ onSend, isSending }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    onSend(input); // apenas envia o texto
    setInput("");
  };

  return (
    <form className="message-input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your message here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" disabled={isSending}>
        Send
      </button>
    </form>
  );
}
