'use client';

import { motion } from 'framer-motion';

const skills = [
	'Python',
	'C++',
	'Java',
	'JavaScript',
	'TypeScript',
	'Dart',
	'React Native',
	'Flutter',
	'Firebase',
	'Flask',
	'OpenCV',
	'MediaPipe',
];

export default function SkillsSection() {
	return (
		<motion.section
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.6 }}
		>
			<div className="sticky top-0 z-10 bg-[#f8f9fa] py-4 -mx-6 px-6 mb-4">
				<h2 className="text-lg font-bold text-gray-900">Skills</h2>
			</div>
			<div className="flex flex-wrap gap-2">
				{skills.map((skill, index) => (
					<span
						key={index}
						className="px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full"
					>
						{skill}
					</span>
				))}
			</div>
		</motion.section>
	);
}
