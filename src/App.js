import Navbar from "./components/Navbar";
import About from "./pages/About";
import Services from "./pages/Services";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ChatbotComponent from "./components/ChatbotComponent";

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar />

        <section id="home" style={{ paddingTop: "80px" }}>
          <ChatbotComponent
            user_id="22"
            conversation_id="conv_1"
            agent_id="a1"
            admin_id="a2"
          />
        </section>

        <section id="services"><Services /></section>
        <section id="about"><About /></section>

        <footer>© MJPRO 2025</footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;