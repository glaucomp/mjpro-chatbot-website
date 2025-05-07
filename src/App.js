import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Páginas adicionais (pode criar mais depois)

import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import ChatbotPage from './pages/home/ChatbotPage';

const queryClient = new QueryClient();

function App() {
  const uniqueConversationId = uuidv4();
  return (
    <QueryClientProvider client={queryClient}>
      <ChatbotPage
        conversation_id={uniqueConversationId}
      />
    </QueryClientProvider>
  );
}

export default App;