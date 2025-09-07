import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <motion.div
          className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <AnimatePresence mode="wait">
        <main className="overflow-hidden">
          <section id="home">
            <Hero scrollToSection={scrollToSection} />
          </section>
          
          <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <Projects />
            </div>
          </section>
          
          <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
              <Skills />
            </div>
          </section>
          
          <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <Contact />
            </div>
          </section>
        </main>
      </AnimatePresence>
      
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
