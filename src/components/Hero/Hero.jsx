import { motion } from 'framer-motion';
import { FiChevronDown, FiMail } from 'react-icons/fi';

const Hero = ({ scrollToSection }) => {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-200 dark:bg-grid-gray-700/50" />
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div variants={item} className="mb-6">
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 
            variants={item}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Saran Sarvesh A G
          </motion.h1>

          {/* Title */}
          <motion.h2 
            variants={item}
            className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6"
          >
            Full Stack Developer | AI & Deep Learning Enthusiast
          </motion.h2>

          {/* Short Bio */}
          <motion.p
            variants={item}
            className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Passionate developer who loves turning ideas into reality through code. 
            Specializes in building intelligent systems, scalable web & mobile apps, 
            and innovative solutions that make real-world impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex justify-center mb-12"
          >
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full shadow hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            >
              <FiMail /> Contact Me
            </a>
          </motion.div>

          {/* Project Section Button */}
          <motion.div
            variants={item}
            className="mt-12"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center mx-auto"
            >
              Explore My Projects
              <FiChevronDown className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
