import { useState } from "react";
import Chatbot from "./components/Chatbot";
import MessageInput from "./components/MessageInput";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Olá! Como posso ajudar você?", sender: "bot" },
  ]);

  const sendMessage = (text) => {
    const userMessage = { id: Date.now(), text, sender: "user" };

    // Adiciona imediatamente a mensagem do usuário
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Mensagem do bot com delay realista (1 segundo)
    setTimeout(() => {
      const botMessage = { id: Date.now() + 1, text: "Recebido!", sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  return (
    <div>
      <Navbar />

      <section id="home" style={{ paddingTop: "80px" }}>
        <Chatbot messages={messages} />
        <MessageInput onSend={sendMessage} />
      </section>

      <section id="services"><Services /></section>
      <section id="about"><About /></section>

      <footer>© MJPRO 2025</footer>
    </div>
  );
}

export default App;