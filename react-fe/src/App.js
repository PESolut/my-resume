import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AOS from 'aos';
import './main.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
// test
// second test
// third test
// fourth test
// fifth test
// six test
