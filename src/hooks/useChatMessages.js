import { useCallback, useState } from "react";
import { usePromptConversationAdmin } from "./usePromptAdmin";

export function useChatMessages(initialMessage, user_id, conversation_id, agent_id, admin_id) {
  const [messages, setMessages] = useState([
    { id: Date.now(), text: initialMessage, sender: "bot" },
  ]);
  const [voiceMessage, setVoiceMessage] = useState('');
  const { mutate, isPending } = usePromptConversationAdmin();

  const sendMessage = useCallback((userPrompt) => {
    const userMessage = { id: Date.now(), text: userPrompt, sender: "user" };
    setMessages(prev => [...prev, userMessage]);

    mutate(
      { prompt: userPrompt, user_id, conversation_id, agent_id, admin_id },
      {
        onSuccess: (data) => {
          const botMessage = {
            id: Date.now() + 1,
            text: data.generation,
            sender: "bot",
          };
          setMessages(prev => [...prev, botMessage]);
          setVoiceMessage(data.generation);
        },
        onError: (error) => {
          console.error("Erro na API:", error);
          const errorMessage = {
            id: Date.now() + 1,
            text: "Oops! Something went wrong.",
            sender: "bot",
          };
          setMessages(prev => [...prev, errorMessage]);
        },
      }
    );
  }, [mutate, user_id, conversation_id, agent_id, admin_id]);

  return {
    messages,
    voiceMessage,
    sendMessage,
    isSending: isPending,
  };
}