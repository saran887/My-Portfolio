import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiChevronDown, FiMail } from 'react-icons/fi';

const Hero = ({ scrollToSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60 } },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-200 dark:bg-grid-gray-700/50" />
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div variants={item} className="mb-6">
            <span className="text-blue-600 dark:text-blue-400 font-medium text-lg tracking-wide">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name with interactive hover */}
          <motion.h1
            variants={item}
            whileHover={{ scale: 1.05, textShadow: '0px 4px 24px #60a5fa' }}
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 cursor-pointer transition-all duration-300"
          >
            {`Saran Sarvesh A G`}
          </motion.h1>

          {/* Subtitle with fade-in */}
          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
          >
            {`Full Stack Developer & AI Enthusiast`}
          </motion.p>

          {/* Personal Introduction */}
          <motion.p
            variants={item}
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            I am a passionate technology enthusiast currently in final year of college, with a solid foundation in AI, IoT, and web development. I've worked on various real-world projects and have a strong desire to learn new technologies. My goal is to create smart, efficient solutions using AI and automation while continuously expanding my skills and taking on new challenges.
          </motion.p>

          {/* Call to Action Button with animation */}
          <motion.button
            variants={item}
            whileHover={{ scale: 1.08, backgroundColor: '#2563eb', color: '#fff' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection && scrollToSection('contact')}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          >
            <FiMail className="w-5 h-5" /> Contact Me
          </motion.button>

          {/* Down arrow with bounce animation */}
          <motion.div
            variants={item}
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mt-16 flex justify-center"
          >
            <button
              onClick={() => scrollToSection && scrollToSection('projects')}
              className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:scale-110 transition-transform border border-blue-200 dark:border-gray-700"
              aria-label="Scroll to Projects"
            >
              <FiChevronDown className="w-7 h-7 text-blue-500" />
            </button>
          </motion.div>
        </motion.div>
      </div>
      {/* Mouse scroll indicator at the bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
        <div className="w-7 h-12 rounded-full border-2 border-gray-400 dark:border-gray-600 flex items-start justify-center">
          <motion.div
            animate={{ y: [4, 20, 4] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-2 h-2 mt-2 rounded-full bg-gray-400 dark:bg-gray-600"
          />
        </div>
        <span className="mt-2 text-xs text-gray-500 dark:text-gray-400">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
