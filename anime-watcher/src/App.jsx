import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Popular from './components/Popular';
import Devintro from './components/Devintro';
import Comments from './Comments';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Popular />
      <Devintro />
      <Comments />
      <Footer />
    </>
  );
}