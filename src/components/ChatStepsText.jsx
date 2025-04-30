import { AnimatePresence, motion } from "framer-motion";
import "./ChatStepsText.css";

export default function ChatStepsText({ title, subtitle }) {
  return (
    <div className="chat-steps-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h2 className="chat-title">{title}</h2>
          <p className="chat-subtitle">{subtitle}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
