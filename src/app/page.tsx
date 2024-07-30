import React from 'react';
import Header from './components/mainComponents/Header';
import Hero from './components/mainComponents/Hero';
import About from './components/mainComponents/About';
import Services from './components/mainComponents/Services';
import Career from './components/mainComponents/Career';
import Gallery from './components/mainComponents/Gallery';
import Contacts from './components/mainComponents/Contacts';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const HomePage: React.FC = () => {
  return (
    <> 
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Career />
        <Gallery />
        <Contacts />
      </main>
      <ToastContainer autoClose={1500} />      
    </>
  );
};

export default HomePage;