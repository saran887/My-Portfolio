import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      title: 'Email',
      value: 'saransarvesh213@gmail.com',
      icon: <FiMail className="w-6 h-6 text-blue-500" />,
      href: 'mailto:saransarvesh213@gmail.com'
    },
    {
      id: 2,
      title: 'GitHub',
      value: 'github.com/saran887',
      icon: <FiGithub className="w-6 h-6 text-gray-800 dark:text-gray-200" />,
      href: 'https://github.com/saran887',
      target: '_blank'
    },
    {
      id: 3,
      title: 'LinkedIn',
      value: 'linkedin.com/in/saran-sarvesh-a-g-950357285',
      icon: <FiLinkedin className="w-6 h-6 text-blue-600" />,
      href: 'https://linkedin.com/in/saran-sarvesh-a-g-950357285',
      target: '_blank'
    },
    {
      id: 4,
      title: 'LeetCode',
      value: 'leetcode.com/u/saransarvesh_51',
      icon: <SiLeetcode className="w-6 h-6 text-yellow-500" />,
      href: 'https://leetcode.com/u/saransarvesh_51',
      target: '_blank'
    },
    {
      id: 5,
      title: 'Resume',
      value: 'Download PDF',
      icon: <FiFileText className="w-6 h-6 text-red-500" />,
      href: 'https://drive.google.com/file/d/1UxHqPqUjk-7eurf4sK6MU-C3T0C5OLjz/view?usp=sharing',
      target: '_blank'
    }
  ];
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-cyan-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Feel free to reach out to me through any of the following channels. I'll get back to you as soon as possible!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.id}
                href={contact.href}
                target={contact.target || '_self'}
                rel={contact.target ? 'noopener noreferrer' : ''}
                download={contact.download || false}
                className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700">
                    {contact.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {contact.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
