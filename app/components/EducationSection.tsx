'use client';

import { motion } from 'framer-motion';

const education = [
	{
		degree: 'Bachelor of Science in Computer Science',
		university: 'University of Florida',
		location: 'Gainesville, FL',
		date: 'May 2028',
		gpa: '4.0/4.0',
		details: [
			{
				title: 'Leadership',
				items: ['Software Developer for Dream Team Engineering', 'AI Researcher for Linguistics/AI Lab', 'UI/UX Lead for SHPE'],
			},
			{
				title: 'Relevant Courses',
				items: ['Data Structures and Algorithms'],
			},
		],
	},
];

export default function EducationSection() {
	return (
		<motion.section
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.5 }}
		>
			<div className="sticky top-0 z-10 bg-[#f8f9fa] py-4 -mx-6 px-6 mb-4">
				<h2 className="text-lg font-bold text-gray-900">Education</h2>
			</div>
			{education.map((edu, index) => (
				<div
					key={index}
					className="group relative rounded-lg border border-transparent p-4 transition-colors hover:bg-white hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg"
				>
					<div className="absolute -inset-px rounded-lg border border-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
					<h3 className="font-medium text-gray-900">
						{edu.degree}
					</h3>
					<p className="text-gray-700">{edu.university}</p>
					<p className="text-sm text-gray-500 mt-1">
						{edu.date} · GPA: {edu.gpa}
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
				</div>
			))}
		</motion.section>
	);
}
