import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import DevelopmentActivity from './components/DevelopmentActivity';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
  return (
    
      <div>
        <Header />
        <About />
        <Background />
        <Portfolio />
        <DevelopmentActivity />
        <Contact />
        <Footer />
      </div>
    
  );
}

export default App;
