import React from 'react';
import { FloatingIcons } from './components/FloatingIcons';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { AIBackground } from './components/AIBackground';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <AIBackground />
      <Navbar />
      <FloatingIcons />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;