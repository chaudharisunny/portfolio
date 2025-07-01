import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Features from './components/Feature';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home'
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Animate once
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Features />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
