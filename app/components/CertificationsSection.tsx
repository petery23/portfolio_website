'use client';

import { motion } from 'framer-motion';

const certifications = [
	{
		name: 'AWS Certified Cloud Practitioner',
		issuer: 'Amazon Web Services',
		date: 'Issued Aug 2024 · Expires Aug 2027',
		url: '#', // Add URL to certification badge
	},
];

export default function CertificationsSection() {
	return (
		<motion.section
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.4 }}
		>
			<div className="sticky top-0 z-10 bg-[#f8f9fa] py-4 -mx-6 px-6 mb-4">
				<h2 className="text-lg font-bold text-gray-900">Certifications</h2>
			</div>
			<div>
				{certifications.map((cert, index) => (
					<div
						key={index}
						className="group relative rounded-lg border border-transparent p-4 transition-colors hover:bg-white hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg"
					>
						<div className="absolute -inset-px rounded-lg border border-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
						<a
							href={cert.url}
							target="_blank"
							rel="noopener noreferrer"
							className="font-medium text-gray-900 hover:text-blue-600"
						>
							{cert.name}
						</a>
						<p className="text-gray-700">{cert.issuer}</p>
						<p className="text-sm text-gray-500 mt-1">{cert.date}</p>
					</div>
				))}
			</div>
		</motion.section>
	);
}
