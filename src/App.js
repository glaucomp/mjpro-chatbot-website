import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Páginas adicionais (pode criar mais depois)

import "./App.css";
import ChatbotPage from './pages/home/ChatbotPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChatbotPage
        user_id="22"
        conversation_id="conv_1"
        agent_id="a1"
        admin_id="a2"
      />
    </QueryClientProvider>
  );
}

export default App;