import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from './pages/home/Footer';

// Páginas adicionais (pode criar mais depois)
import About from './pages/About';
import Services from './pages/Services';

import "./App.css";
import Home from './pages/Home';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}

export default App;