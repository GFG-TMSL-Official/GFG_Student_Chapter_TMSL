import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Challenges from './components/Challenges';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Gallery />
      <Events />
      <Challenges />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;