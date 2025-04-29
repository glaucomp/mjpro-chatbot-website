import { useChatMessages } from "../hooks/useChatMessages";
import Chatbot from "./Chatbot";
import MessageInput from "./MessageInput";

export default function ChatbotComponent({
  initialMessage = "Hey! How can I help you?",
  user_id,
  conversation_id,
  agent_id,
  admin_id,
}) {
  const { messages, sendMessage, isSending } = useChatMessages(
    initialMessage,
    user_id,
    conversation_id,
    agent_id,
    admin_id
  );

  return (
    <div>
      <Chatbot messages={messages} />
      <MessageInput onSend={sendMessage} isSending={isSending} />
    </div>
  );
}
