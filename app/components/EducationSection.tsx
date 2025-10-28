'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const education = [
	{
		degree: 'Bachelor of Science in Computer Science',
		university: 'University of Florida',
		location: 'Gainesville, FL',
		gpa: '4.0/4.0',
		details: [
			{
				title: 'Leadership',
				items: ['Software Developer for Dream Team Engineering', 'AI Researcher for Linguistics/AI Lab', 'UI/UX Lead for SHPE'],
			},
			{
				title: 'Relevant Courses',
				items: ['Data Structures and Algorithms', 'Computer Organization and Architecture', 'Software Engineering', 'Operating Systems'],
			},
		],
	},
];

export default function EducationSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

	return (
		<motion.section
			ref={ref}
			id="education"
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			initial={{ opacity: 0, y: 50 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<div className="sticky top-0 z-10 bg-[#f8f9fa] py-3 sm:py-4 -mx-6 sm:-mx-6 px-6 sm:px-6 mb-3 sm:mb-4">
				<h2 className="text-base sm:text-lg font-bold text-gray-900">🎓 Education</h2>
			</div>
			{education.map((edu, index) => (
				<a
					key={index}
					href="https://www.ufl.edu/"
					target="_blank"
					rel="noopener noreferrer"
					className="group relative block rounded-lg border border-transparent p-4 transition-colors hover:bg-white hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg cursor-pointer"
				>
					<h3 className="font-medium text-gray-900 group-hover:text-blue-600">
						{edu.degree}
					</h3>
					<p className="text-gray-700 group-hover:text-blue-600">
						{edu.university}
					</p>
					<p className="text-sm text-gray-500 mt-1">
						GPA: {edu.gpa}
					</p>
					<div className="mt-2 space-y-2">
						{edu.details.map((detail, i) => (
							<div key={i}>
								<p className="text-gray-700">
									<span className="font-semibold text-gray-800">{detail.title}:</span> {detail.items.join(', ')}
								</p>
							</div>
						))}
					</div>
				</a>
			))}
		</motion.section>
	);
}
