import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Real-Time Object Detection',
    description: 'AI-powered real-time object detection system with voice alerts for accessibility & safety',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'MobileNet SSD'],
    github: 'https://github.com/saran887/real-time-object-detection',
    demo: '#',
  },
  {
    title: 'Construction Portfolio',
    description: 'Modern responsive website showcasing projects with interactive galleries',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion','Node.js','MongoDB'],
    github: 'https://github.com/saran887/construction-portfolio',
    demo: '#',
  },
  {
    title: 'Smart Voting System',
    description: 'AI-based voting platform with face verification for secure elections',
    technologies: ['Python', 'OpenCV', 'Flask', 'MySQL'],
    github: 'https://github.com/saran887/smart-voting-system',
    demo: '#',
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
    demo: '#',
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
  >
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span key={i} className="px-2 py-1 bg-gray-700 text-cyan-300 text-xs rounded">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
        >
          <FiGithub className="mr-1" /> Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
        >
          <FiExternalLink className="mr-1" /> Live Demo
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My <span className="text-cyan-400">Projects</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
