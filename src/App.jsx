import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Analytics from './components/Analytics.jsx';
import Newsletter from './components/Newsletter.jsx';
import CardsContainer from './components/CardsContainer.jsx';
import Footer from './components/Footer.jsx';
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const [isInView, setIsInView ] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    
    <div className='scroll-smooth'>
      <Navbar isInView={isInView} />
      <Hero setIsInView={setIsInView}/>
      <Analytics />
      <Newsletter />
      <CardsContainer />
      <Footer />
    </div>
  )
}

export default App
