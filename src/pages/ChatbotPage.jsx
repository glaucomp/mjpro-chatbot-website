import Chatbot from "../components/Chatbot";
import MessageInput from "../components/MessageInput";
import { useChatMessages } from "../hooks/useChatMessages";

export default function ChatbotPage({
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
