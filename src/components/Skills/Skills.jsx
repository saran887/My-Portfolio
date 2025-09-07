import { motion } from 'framer-motion';
import { 
  FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaDatabase, FaGithub, 
  FaHtml5, FaCss3Alt, FaGit, FaAndroid, FaChartBar, FaCode
} from 'react-icons/fa';
import { 
  SiC, SiMongodb, SiMysql, SiOracle, SiFlask, SiFastapi, SiTensorflow, 
  SiOpencv, SiPandas, SiNumpy, SiPhp, SiTailwindcss
} from 'react-icons/si';

const skillsByCategory = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90, icon: <FaPython className="w-6 h-6" /> },
      { name: 'Java', level: 85, icon: <FaJava className="w-6 h-6" /> },
      { name: 'C', level: 80, icon: <SiC className="w-6 h-6" /> },
      { name: 'JavaScript', level: 85, icon: <FaJs className="w-6 h-6" /> },
      { name: 'PHP', level: 75, icon: <SiPhp className="w-6 h-6" /> },
      { name: 'SQL', level: 85, icon: <FaDatabase className="w-6 h-6" /> },
    ]
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 85, icon: <FaReact className="w-6 h-6" /> },
      { name: 'HTML5', level: 90, icon: <FaHtml5 className="w-6 h-6" /> },
      { name: 'CSS3', level: 85, icon: <FaCss3Alt className="w-6 h-6" /> },
      { name: 'Tailwind CSS', level: 80, icon: <SiTailwindcss className="w-6 h-6" /> },
    ]
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js', level: 80, icon: <FaNodeJs className="w-6 h-6" /> },
      { name: 'Flask', level: 75, icon: <SiFlask className="w-6 h-6" /> },
      { name: 'FastAPI', level: 70, icon: <SiFastapi className="w-6 h-6" /> },
      { name: 'MongoDB', level: 75, icon: <SiMongodb className="w-6 h-6" /> },
      { name: 'MySQL', level: 80, icon: <SiMysql className="w-6 h-6" /> },
      { name: 'Oracle', level: 70, icon: <SiOracle className="w-6 h-6" /> },
    ]
  },
  {
    category: 'AI/ML & Data Science',
    skills: [
      { name: 'TensorFlow', level: 80, icon: <SiTensorflow className="w-6 h-6" /> },
      { name: 'Data Visualization', level: 75, icon: <FaChartBar className="w-6 h-6" /> },
      { name: 'OpenCV', level: 80, icon: <SiOpencv className="w-6 h-6" /> },
      { name: 'Pandas', level: 85, icon: <SiPandas className="w-6 h-6" /> },
      { name: 'NumPy', level: 85, icon: <SiNumpy className="w-6 h-6" /> },
    ]
  }
];

const tools = [
  { name: 'GitHub', icon: <FaGithub className="w-8 h-8" /> },
  { name: 'Git', icon: <FaGit className="w-8 h-8" /> },
  { name: 'VS Code', icon: <FaCode className="w-8 h-8" /> },
  { name: 'Android Studio', icon: <FaAndroid className="w-8 h-8" /> },
  { name: 'Data Visualization', icon: <FaChartBar className="w-8 h-8" /> },
];

const SkillBar = ({ name, level, icon }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-1">
      <div className="flex items-center">
        <span className="text-cyan-400 mr-2">{icon}</span>
        <span className="font-medium text-white">{name}</span>
      </div>
      <span className="text-sm text-gray-400">{level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </motion.div>

        {/* Categorized Skills */}
        <div className="space-y-16">
          {skillsByCategory.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold text-white mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-4 bg-gray-800 rounded-lg w-24 h-24 justify-center hover:bg-gray-700 transition-colors"
              >
                <div className="text-3xl text-cyan-400 mb-2">{tool.icon}</div>
                <span className="text-xs text-gray-300 text-center">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
