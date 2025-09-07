import React from 'react';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const ContactInfo = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Get In Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email */}
        <a 
          href="mailto:saransarvesh213@gmail.com" 
          className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
            <MdEmail className="text-2xl text-blue-600 dark:text-blue-300" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Email</h3>
            <p className="text-gray-600 dark:text-gray-300">saransarvesh213@gmail.com</p>
          </div>
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/saran-sarvesh-a-g-950357285/" 
          className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
            <FaLinkedin className="text-2xl text-blue-600 dark:text-blue-300" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">LinkedIn</h3>
            <p className="text-gray-600 dark:text-gray-300">Saran Sarvesh A G</p>
          </div>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/saran887" 
          className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full mr-4">
            <FaGithub className="text-2xl text-gray-800 dark:text-gray-200" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">GitHub</h3>
            <p className="text-gray-600 dark:text-gray-300">@saran887</p>
          </div>
        </a>

        {/* LeetCode */}
        <a 
          href="https://leetcode.com/u/saransarvesh_51/" 
          className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-yellow-50 dark:hover:bg-gray-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-full mr-4">
            <SiLeetcode className="text-2xl text-yellow-600 dark:text-yellow-300" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">LeetCode</h3>
            <p className="text-gray-600 dark:text-gray-300">@saransarvesh_51</p>
          </div>
        </a>

        {/* Resume */}
        <a 
          href="https://drive.google.com/file/d/1UxHqPqUjk-7eurf4sK6MU-C3T0C5OLjz/view?usp=sharing" 
          className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-green-50 dark:hover:bg-gray-600 transition-colors md:col-span-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4">
            <FaFileAlt className="text-2xl text-green-600 dark:text-green-300" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Resume</h3>
            <p className="text-gray-600 dark:text-gray-300">View or Download My Resume</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
