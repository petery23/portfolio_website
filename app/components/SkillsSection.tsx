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
		'bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:to-purple-700',
		'bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600 hover:from-emerald-600 hover:to-teal-700',
		'bg-gradient-to-br from-pink-500 via-rose-600 to-orange-600 hover:from-pink-600 hover:to-orange-700',
		'bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 hover:from-indigo-600 hover:to-pink-700',
		'bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700',
		'bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 hover:from-orange-600 hover:to-pink-700',
		'bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 hover:from-violet-600 hover:to-indigo-700',
		'bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-600 hover:from-teal-600 hover:to-blue-700',
		'bg-gradient-to-br from-yellow-500 via-orange-600 to-red-600 hover:from-yellow-600 hover:to-red-700',
		'bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 hover:from-green-600 hover:to-teal-700',
		'bg-gradient-to-br from-red-500 via-pink-600 to-rose-600 hover:from-red-600 hover:to-rose-700',
		'bg-gradient-to-br from-purple-500 via-violet-600 to-purple-600 hover:from-purple-600 hover:to-purple-700',
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
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						<span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
							Skills & Technologies
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Here are the technologies and tools I work with to bring ideas to life
					</p>
				</motion.div>

				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
					{skills.map((skill, index) => (
						<motion.div
							key={skill.name}
							initial={{ opacity: 0, y: 50, scale: 0.9 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ 
								duration: 0.6, 
								delay: index * 0.1,
								ease: "easeOut"
							}}
							whileHover={{ 
								scale: 1.05,
								y: -8,
								transition: { duration: 0.2 }
							}}
							viewport={{ once: true }}
							className={`
								${colorClasses[index]} 
								text-white p-6 rounded-2xl shadow-xl cursor-pointer
								backdrop-blur-sm border border-white/20
								group relative overflow-hidden
							`}
						>
							{/* Animated background overlay */}
							<div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							
							{/* Content */}
							<div className="relative z-10 text-center">
								<div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
									{skill.icon}
								</div>
								<h3 className="font-semibold text-sm md:text-base group-hover:text-white transition-colors duration-300">
									{skill.name}
								</h3>
							</div>

							{/* Shine effect */}
							<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
						</motion.div>
					))}
				</div>

				{/* Additional decorative elements */}
				<div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
				<div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
			</div>
		</section>
	);
}
