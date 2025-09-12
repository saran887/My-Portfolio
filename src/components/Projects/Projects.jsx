import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
	{
		title: 'Vehicle Underbody Monitoring System',
		description:
			'A deep learning-based safety system designed for heavy vehicles. Cameras are installed under the truck to continuously monitor blind spots, using MobileNet SSD with TensorFlow & OpenCV for real-time detection. When an object, pedestrian, or vehicle enters the blind spot, the system instantly alerts the driver with voice notifications, reducing blind spot accidents and enhancing road safety.',
		technologies: ['Python', 'TensorFlow', 'OpenCV', 'MobileNet SSD'],
		github: 'https://github.com/saran887/real-time-object-detection',
	},
	
	{
		title: 'Smart Voting System',
		description:
			'An AI-driven voting platform that ensures secure and transparent elections. Voters are authenticated through real-time face recognition using Python and OpenCV, while Flask and MySQL handle backend operations. This system minimizes voter fraud, streamlines the election process, and provides accurate result tracking.',
		technologies: ['Python', 'OpenCV', 'Flask', 'MySQL'],
		github: 'https://github.com/saran887/smart-voting-system',
	},
	{
		title: 'Sales Card Generator',
		description:
			'A business tool for creating customizable sales cards with integrated analytics. It supports real-time performance tracking, visual reports, and data export options. Designed to help businesses analyze sales data effectively, it is built with Python, Pandas, and Flask for a lightweight yet powerful solution.',
		technologies: ['Python', 'Pandas', 'NumPy', 'Flask'],
		github: 'https://github.com/saran887/sales-card-generator',
		
	},
  {
		title: 'Comez Landing Page',
		description:
			'A clean and responsive landing page designed for startups and businesses. Built with React, Vite, and Tailwind CSS, it features modern layouts, smooth animations, and a fully mobile-friendly design. Ideal for showcasing services, products, or company branding in a professional way.',
		technologies: ['React', 'Vite', 'Tailwind CSS'],
		github: 'https://github.com/saran887/comez-landing-page',
		demo: 'https://comez.in',
	},
  {
		title: 'Construction Portfolio',
		description:
			'A modern, responsive web portfolio for showcasing construction projects. Features interactive image galleries, smooth animations, and dynamic content rendering. Built with the MERN stack, it allows easy project management and provides a professional platform for clients to explore completed and ongoing projects.',
		technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'MongoDB'],
		github: 'https://github.com/saran887/construction-portfolio',
		demo: 'https://construction-website-git-main-sarans-projects-ffa5672c.vercel.app?_vercel_share=RynzIlxEehWUlNGk695ZpSxmmQTttnQk',
	},
	{
		title: 'IoT E-Commerce Platform',
		description:
			'A next-generation e-commerce platform integrated with IoT for real-time inventory tracking and automated stock updates. Built with the MERN stack, it provides secure user authentication, dynamic product catalogs, and seamless order management, making it suitable for businesses embracing IoT in retail.',
		technologies: ['React', 'Node.js', 'MongoDB', 'IoT Integration'],
		github: 'https://github.com/saran887/iot-ecommerce',
		demo: 'https://iot-webpage-git-main-sarans-projects-ffa5672c.vercel.app?_vercel_share=RPdbB1VKgefwYDmFvfAkqPUMsuoXKV0Q',
	},
	
];

const Projects = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });
	return (
		<section
			id="projects"
			ref={ref}
			className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
		>
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
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
					}
					transition={{ duration: 0.7 }}
					className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent"
				>
					Projects
				</motion.h2>
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, idx) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.6, delay: idx * 0.1 }}
							className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl shadow-lg p-8 flex flex-col hover:scale-105 hover:shadow-2xl transition-transform duration-300 group border border-gray-200 dark:border-gray-700"
							whileHover={{
								scale: 1.05,
								boxShadow: '0 8px 32px 0 rgba(60,132,206,0.15)',
							}}
						>
							<div className="mb-6">
								<h3 className="text-2xl font-bold mb-3 text-blue-600 dark:text-cyan-400 group-hover:underline transition-all">
									{project.title}
								</h3>
								<p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-2">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 text-xs rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium"
										>
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
