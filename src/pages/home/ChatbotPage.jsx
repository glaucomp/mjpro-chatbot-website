import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { useChatMessages } from "../../hooks/useChatMessages";
import Chatbot from "./Chatbot";
import ChatStepsIndicators from "./ChatStepsIndicators";
import ChatStepsText from "./ChatStepsText";
import LottieCentered from "./LottieCentered";
import MessageInput from "./MessageInput";

const stepsTexts = [
  { title: "Let’s start a chat", subtitle: "What industry are you in?" },
  { title: "Local matters", subtitle: "What suburb are you based in?" },
  { title: "We’re here to help", subtitle: "What’s your biggest challenge?" },
  {
    title: "Let’s Keep Talking",
    subtitle: "Continue talking to MxJ intelligence!",
  },
];

export default function ChatbotPage({ conversation_id }) {
  const { messages, sendMessage, isSending } = useChatMessages(conversation_id);

  const [responses, setResponses] = useState([]);

  const stepIndex = Math.min(responses.length, stepsTexts.length - 1);
  const currentStep = stepsTexts[stepIndex];

  const handleSend = (text) => {
    sendMessage(text);
    setResponses((prev) => [...prev, text]);
  };

  return (
    <div className="main-container">
      <AnimatePresence mode="wait">
        {stepIndex === 0 ? (
          <motion.div
            key="lottie"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LottieCentered />
          </motion.div>
        ) : (
          <motion.div
            key="chatbot"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Chatbot messages={messages} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="bottom-section-container">
        <ChatStepsText
          title={currentStep.title}
          subtitle={currentStep.subtitle}
        />
        <MessageInput onSend={handleSend} isSending={isSending} />
        <ChatStepsIndicators
          stepCount={stepsTexts.length}
          activeSteps={responses.length}
        />
      </div>
    </div>
  );
}
