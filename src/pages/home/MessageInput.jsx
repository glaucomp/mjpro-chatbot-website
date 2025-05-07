import { useState } from "react";
import "./MessageInput.css";

import bottomLight from "../../assets/icons/bottom-light.svg";
import iconSendActive from "../../assets/icons/icon-send-active.svg";
import iconSendDisabled from "../../assets/icons/icon-send-disabled.svg";
import leftLight from "../../assets/icons/left-light.svg";
import rightLight from "../../assets/icons/right-light.svg";

export default function MessageInput({ onSend, isSending }) {
  const [input, setInput] = useState("");
const [isFocused, setIsFocused] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();

  if (!input.trim() || isSending) return;

  onSend(input);
  setInput("");

  // Tell the parent window to scroll
  window.parent.postMessage({ action: 'scrollToTop' }, '*');

  // 👇 New part to fix the scroll issue
  if (document.activeElement) {
    document.activeElement.blur(); // blur the active field
  }
};

const handleKeyDown = (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleSubmit(e);
  }
};

  
return (
  <form
    className={`input-outer-container ${isFocused ? "active" : ""}`}
    onSubmit={handleSubmit}
  >
    <div className="input-inner-container">
      <div className="input-flex-container">
        <div className="leftcol">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown} // ✅ Add this line
          />
        </div>
        <div className="rightcol">
          <div className={`button-border ${input ? "send" : ""}`}>
            <button
              type="submit"
              className={`btn-send-message ${input ? "send" : ""}`}
              disabled={!input || isSending}
            >
              <img
                src={input ? iconSendActive : iconSendDisabled}
                alt="Send"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
);
}
