import "./ChatSteps.css";
import ChatStepsIndicators from "./ChatStepsIndicators";
import ChatStepsText from "./ChatStepsText";

export default function ChatSteps({ title, subtitle, stepCount, activeSteps }) {
  return (
    <div className="chat-steps-container">
      <ChatStepsText title={title} subtitle={subtitle} />
      <ChatStepsIndicators stepCount={stepCount} activeSteps={activeSteps} />
    </div>
  );
}
