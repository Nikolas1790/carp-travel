import React from 'react';
import Head from 'next/head';
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
      <Head>
        <title>Carp Travel</title>
        <meta name="description" content="Traveling to the most beautiful corners of the Carpathians. Enjoy stunning views, exciting expeditions and the best service!" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Carp Travel" />
        <meta property="og:description" content="Traveling to the most beautiful corners of the Carpathians." />
        <meta property="og:url" content="https://carp-travel-peach.vercel.app/" />
        <meta property="og:image" content="https://carp-travel-peach.vercel.app/img/readme/home-desc.jpg" />
        <meta property="og:locale" content="en_US"  />
      </Head>     
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
    </>
  );
};

export default HomePage;
