'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Categorize skills by type
const skillCategories = {
	languages: ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 'Dart'],
	frameworks: ['React Native', 'Flutter', 'Flask'],
	tools: ['Firebase', 'OpenCV', 'MediaPipe']
};

const categoryColors: { [key: string]: string } = {
	languages: 'bg-blue-100 text-blue-800',
	frameworks: 'bg-green-100 text-green-800',
	tools: 'bg-purple-100 text-purple-800'
};

export default function SkillsSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

	return (
		<motion.section
			ref={ref}
			id="skills"
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			initial={{ opacity: 0, y: 50 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<div className="sticky top-0 z-10 bg-[#f8f9fa] py-3 sm:py-4 -mx-4 sm:-mx-6 px-4 sm:px-6 mb-3 sm:mb-4">
				<h2 className="text-base sm:text-lg font-bold text-gray-900">💻 Skills</h2>
			</div>
 			<div className="space-y-6">
				{Object.entries(skillCategories).map(([categoryName, categorySkills]) => (
					<div key={categoryName}>
						<h3 className="text-sm font-semibold text-gray-700 mb-3 capitalize">
							{categoryName}
						</h3>
						<div className="flex flex-wrap gap-2">
							{categorySkills.map((skill) => (
								<span
									key={skill}
									className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 hover:brightness-110 cursor-default ${
										categoryColors[categoryName] || 'bg-gray-100 text-gray-800'
									}`}
								>
									{skill}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</motion.section>
	);
}
