import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi';

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

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub className="w-5 h-5" />,
      href: 'https://github.com/yourusername',
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/yourusername',
    },
    {
      name: 'Email',
      icon: <FiMail className="w-5 h-5" />,
      href: 'mailto:your.email@example.com',
    },
  ];

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
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="#"
              download
              className="btn btn-primary flex items-center gap-2"
            >
              <FiDownload /> Download Resume
            </a>
            <a
              href="#contact"
              className="btn btn-outline flex items-center gap-2"
            >
              <FiMail /> Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={item}
            className="flex justify-center space-x-6 mb-12"
          >
            <a
              href="https://github.com/saran887"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/saran-sarvesh-a-g-950357285"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:saransarvesh213@gmail.com"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <FiMail className="w-6 h-6" />
            </a>
          </motion.div>

          {/* Scroll Down Button */}
          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center mt-8"
            onClick={() => scrollToSection('projects')}
            style={{ cursor: 'pointer' }}
          >
            <div className="w-8 h-12 rounded-full border-2 border-gray-400 flex justify-center p-2">
              <motion.div
                className="w-1 h-3 bg-gray-400 rounded-full"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
            <span className="text-xs text-gray-400 block mt-2">Scroll Down</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
