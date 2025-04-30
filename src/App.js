import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import AnimatedCards from './pages/home/AnimatedCards';
import ChatbotPage from './pages/home/ChatbotPage';
import WhatWeDo from './pages/home/WhatWeDo';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar />

        <section id="home" style={{ paddingTop: "80px" }}>
          <ChatbotPage
            user_id="22"
            conversation_id="conv_1"
            agent_id="a1"
            admin_id="a2"
          />
        </section>
        <section id="animated_cards"> <AnimatedCards /></section>
        <section id="services"><WhatWeDo /></section>
        <section id="about"><About /></section>

        <footer>© MJPRO 2025</footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;