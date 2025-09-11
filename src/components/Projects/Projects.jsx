import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Real-Time Object Detection',
    description: 'AI-powered real-time object detection system with voice alerts for accessibility & safety',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'MobileNet SSD'],
    github: 'https://github.com/saran887/real-time-object-detection',
    
  },
  {
    title: 'Construction Portfolio',
    description: 'Modern responsive website showcasing projects with interactive galleries',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion','Node.js','MongoDB'],
    github: 'https://github.com/saran887/construction-portfolio',
    demo: 'https://construction-website-git-main-sarans-projects-ffa5672c.vercel.app?_vercel_share=RynzIlxEehWUlNGk695ZpSxmmQTttnQk',
  },
  {
    title: 'Smart Voting System',
    description: 'AI-based voting platform with face verification for secure elections',
    technologies: ['Python', 'OpenCV', 'Flask', 'MySQL'],
    github: 'https://github.com/saran887/smart-voting-system',
    
  },
  {
    title: 'Sales Card Generator',
    description: 'Dynamic tool for customizable sales cards with analytics & performance tracking',
    technologies: ['Python', 'Pandas', 'Numpy', 'Flask'],
    github: 'https://github.com/saran887/sales-card-generator',
    demo: '#',
  },
  {
    title: 'IoT E-Commerce Platform',
    description: 'Full-stack IoT-focused e-commerce platform with inventory management',
    technologies: ['React', 'Node.js', 'MongoDB', 'IoT Integration'],
    github: 'https://github.com/saran887/iot-ecommerce',
    demo: 'https://iot-webpage-git-main-sarans-projects-ffa5672c.vercel.app?_vercel_share=RPdbB1VKgefwYDmFvfAkqPUMsuoXKV0Q',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated horizontal line */}
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: '100%' } : { width: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-400/30 to-transparent pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl shadow-lg p-6 flex flex-col hover:scale-105 hover:shadow-2xl transition-transform duration-300 group border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(60,132,206,0.15)' }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-cyan-400 group-hover:underline transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto flex gap-4">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-cyan-400 transition-colors text-lg"
                    aria-label="GitHub"
                    whileHover={{ scale: 1.2, color: '#2563eb' }}
                  >
                        <FiGithub />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-cyan-400 transition-colors text-lg"
                        aria-label="Demo"
                        whileHover={{ scale: 1.2, color: '#06b6d4' }}
                      >
                        <FiExternalLink />
                      </motion.a>
                    )}
          </div>
        </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects;
