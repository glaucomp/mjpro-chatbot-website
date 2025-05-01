import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "./App.css";
import Navbar from "./components/Navbar";
import AnimatedCards from './pages/home/AnimatedCards';
import ChatbotPage from './pages/home/ChatbotPage';
import ContentSection from './pages/home/ContentSection';
import WhatWeDo from './pages/home/WhatWeDo';

import performanceVideo from './assets/old-site/355909_Man-Computer-Screen-Working-From-Home_By_Frame_Stock_Footage_Artlist_HD-1.mp4';
import appVideo from './assets/old-site/Showreel-1.mp4';
import FinalCtaSection from './pages/home/FinalCtaSection';
import Footer from './pages/home/Footer';

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
        <section id="what_we_do"><WhatWeDo /></section>

        <section id="ContentSectionLeft">
          <ContentSection
            subtitle="YOUR APP IDEA, REALIZED."
            title="Dreaming of an app that disrupts the market?"
            description="At M & J Productions, we turn your ideas into tangible, engaging, and profitable digital experiences. Our team is dedicated to crafting bespoke solutions that resonate with your target audience and set the stage for your business success."
            buttonLabel="Start Your App Journey"
            videoSrc={appVideo}
          />
        </section>
        <section id="contentSectionRight">
          <ContentSection
            subtitle="ELEVATE YOUR APP TO NEW HEIGHTS."
            title="Is your app not performing as expected?"
            description="Let’s change that. We specialize in revamping existing apps, focusing on enhancing user experience, functionality, and market fit. Our approach is not just about fixing; it’s about innovating and optimizing for growth."
            buttonLabel="Enhance Your App Now"
            videoSrc={performanceVideo}
            reverse={true}
          />
        </section>

        <section id="helmet"><FinalCtaSection /></section>


        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;