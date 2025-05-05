import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Analytics from './components/Analytics.jsx';
import Newsletter from './components/NewsLetter.jsx';
import Cards from './components/cards.jsx';
import CardsContainer from './components/CardsContainer.jsx';
import Footer from './components/Footer.jsx';
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    
    <div className='scroll-smooth'>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <CardsContainer />
      <Footer />
    </div>
  )
}

export default App
