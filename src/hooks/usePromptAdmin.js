import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const FIXED_TOKEN = "4d4a50524f4432303232";

const promptConversationAdmin = async ({ prompt, user_id, conversation_id, agent_id, admin_id }) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${FIXED_TOKEN}`,
  };

  const response = await axios.post(
    'http://localhost:8000/api/prompt_conversation_admin/',
    { prompt, user_id, conversation_id, agent_id, admin_id },
    { headers }
  );

  return response.data;
};

export function usePromptConversationAdmin() {
  return useMutation({ mutationFn: promptConversationAdmin });
}