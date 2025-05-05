import "./ChatStepsIndicators.css";

export default function ChatStepsIndicators({ stepCount, activeSteps }) {
  return (
    <div className="chat-steps-container">
      <div className="chat-steps-indicators">
        {[...Array(stepCount)].map((_, index) => (
          <div
            key={index}
            className={`indicator ${index < activeSteps ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
