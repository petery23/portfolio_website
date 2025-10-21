'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
	return (
		<motion.div initial="hidden" animate="visible" variants={containerVariants}>
			<div className="text-center lg:text-left">
				<motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
					<Image
						src="/portrait.jpeg"
						alt="Portrait of Peter Yungman"
						width={120}
						height={120}
						className="rounded-full border-2 border-gray-300 mb-8"
					/>
				</motion.div>
				<motion.h1 variants={itemVariants} className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
					Peter Yungman
				</motion.h1>
				<motion.h2 variants={itemVariants} className="mt-2 text-base font-medium tracking-tight text-gray-800 sm:text-lg lg:text-xl">
					Computer Science Student at the University of Florida
				</motion.h2>
				<motion.p variants={itemVariants} className="mt-3 max-w-xs mx-auto lg:mx-0 leading-normal text-gray-600 text-sm sm:text-base">
				Teaching Assistant @ University of Florida
				</motion.p>
			</div>

			<motion.nav variants={itemVariants} className="mt-8 lg:mt-12">
				<ul className="flex flex-col space-y-2 lg:space-y-4 items-center lg:items-start">
					<li>
						<a href="#about" className="group flex items-center py-2 lg:py-3">
							<span className="nav-indicator mr-3 lg:mr-4 h-px w-6 lg:w-8 bg-gray-400 transition-all group-hover:w-12 lg:group-hover:w-16 group-hover:bg-blue-600"></span>
							<span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-900">
								👋 About
							</span>
						</a>
					</li>
					<li>
						<a href="#projects" className="group flex items-center py-2 lg:py-3">
							<span className="nav-indicator mr-3 lg:mr-4 h-px w-6 lg:w-8 bg-gray-400 transition-all group-hover:w-12 lg:group-hover:w-16 group-hover:bg-blue-600"></span>
							<span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-900">
								🚀 Projects
							</span>
						</a>
					</li>
					<li>
						<a href="#certifications" className="group flex items-center py-2 lg:py-3">
							<span className="nav-indicator mr-3 lg:mr-4 h-px w-6 lg:w-8 bg-gray-400 transition-all group-hover:w-12 lg:group-hover:w-16 group-hover:bg-blue-600"></span>
							<span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-900">
								🏆 Certifications
							</span>
						</a>
					</li>
					<li>
						<a href="#education" className="group flex items-center py-2 lg:py-3">
							<span className="nav-indicator mr-3 lg:mr-4 h-px w-6 lg:w-8 bg-gray-400 transition-all group-hover:w-12 lg:group-hover:w-16 group-hover:bg-blue-600"></span>
							<span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-900">
								🎓 Education
							</span>
						</a>
					</li>
					<li>
						<a href="#skills" className="group flex items-center py-2 lg:py-3">
							<span className="nav-indicator mr-3 lg:mr-4 h-px w-6 lg:w-8 bg-gray-400 transition-all group-hover:w-12 lg:group-hover:w-16 group-hover:bg-blue-600"></span>
							<span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-900">
								💻 Skills
							</span>
						</a>
					</li>
				</ul>
			</motion.nav>

			<div className="flex justify-center lg:justify-start">
				<motion.div variants={itemVariants} className="mt-6 lg:mt-8 flex items-center space-x-4 lg:space-x-6">
					<motion.a
					href="https://github.com/petery23"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
					whileHover={{ scale: 1.1, y: -2 }}
					className="text-gray-900 hover:text-blue-600 transition-colors"
				>
					<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
					</svg>
				</motion.a>
				<motion.a
					href="https://www.linkedin.com/in/peter-yungman/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
					whileHover={{ scale: 1.1, y: -2 }}
					className="text-blue-600 hover:text-blue-700 transition-colors relative"
				>
					<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
					</svg>
					<span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
						<span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-[ping_2s_ease-in-out_infinite]"></span>
						<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
					</span>
				</motion.a>
				</motion.div>
			</div>
		</motion.div>
	);
}
