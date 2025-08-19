'use client';

import { motion } from 'framer-motion';

export default function SkillsSection() {
	const skills = [
		{ name: 'Python', icon: '🐍' },
		{ name: 'C++', icon: '⚡' },
		{ name: 'Java', icon: '☕' },
		{ name: 'JavaScript', icon: '🟨' },
		{ name: 'TypeScript', icon: '🔷' },
		{ name: 'Dart', icon: '🎯' },
		{ name: 'React Native', icon: '📱' },
		{ name: 'Flutter', icon: '💙' },
		{ name: 'Firebase', icon: '🔥' },
		{ name: 'Flask', icon: '🌶️' },
		{ name: 'OpenCV', icon: '👁️' },
		{ name: 'MediaPipe', icon: '🎬' },
	];
	
	const colorClasses = [
		'bg-white/90 hover:bg-white border border-blue-100 text-gray-800 shadow-lg hover:shadow-xl',
		'bg-white/90 hover:bg-white border border-blue-100 text-gray-800 shadow-lg hover:shadow-xl',
		'bg-white/90 hover:bg-white border border-blue-100 text-gray-800 shadow-lg hover:shadow-xl',
		'bg-white/90 hover:bg-white border border-blue-100 text-gray-800 shadow-lg hover:shadow-xl',
		'bg-white/90 hover:bg-white border border-blue-100 text-gray-800 shadow-lg hover:shadow-xl',
		'bg-white/90 hover:bg-white border border-blue-100 text-gray-800 shadow-lg hover:shadow-xl',
		'bg-white/90 hover:bg-white border border-blue-100 text-gray-800 shadow-lg hover:shadow-xl',
		'bg-white/90 hover:bg-white border border-blue-100 text-gray-800 shadow-lg hover:shadow-xl',
		'bg-white/90 hover:bg-white border border-blue-100 text-gray-800 shadow-lg hover:shadow-xl',
		'bg-white/90 hover:bg-white border border-blue-100 text-gray-800 shadow-lg hover:shadow-xl',
		'bg-white/90 hover:bg-white border border-blue-100 text-gray-800 shadow-lg hover:shadow-xl',
		'bg-white/90 hover:bg-white border border-blue-100 text-gray-800 shadow-lg hover:shadow-xl',
	];

	return (
		<section id="skills" className="py-20 md:py-32 relative">
			{/* Background pattern */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/30"></div>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1)_0%,transparent_50%)]"></div>
			
			<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
						Skills & Technologies
					</h2>
					
				</motion.div>

				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
					{skills.map((skill, index) => (
						<motion.div
							key={skill.name}
							initial={{ opacity: 0, y: 50, scale: 0.9 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ 
								duration: 0.6, 
								delay: index * 0.1
							}}
							whileHover={{ 
								scale: 1.05,
								y: -8,
								transition: { duration: 0.2 }
							}}
							viewport={{ once: true }}
							className={`
								${colorClasses[index]} 
								p-6 rounded-2xl cursor-pointer
								backdrop-blur-sm transition-all duration-300
								group relative overflow-hidden hover:-translate-y-2
							`}
						>
							{/* Animated background overlay */}
							<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							
							{/* Content */}
							<div className="relative z-10 text-center">
								<div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
									{skill.icon}
								</div>
								<h3 className="font-semibold text-sm md:text-base text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
									{skill.name}
								</h3>
							</div>

							{/* Shine effect */}
							<div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
						</motion.div>
					))}
				</div>

				{/* Additional decorative elements */}
				<div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
				<div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
			</div>
		</section>
	);
}
