import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const FIXED_TOKEN = "4d4a50524f4432303232";

const promptConversationAdmin = async ({ prompt, conversation_id }) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${FIXED_TOKEN}`,
  };

  const response = await axios.post(
    'https://api.mjpro.vip/api/prompt_conversation_admin/',
    { prompt, conversation_id },
    { headers }
  );

  return response.data;
};

export function usePromptConversationAdmin() {
  return useMutation({ mutationFn: promptConversationAdmin });
}