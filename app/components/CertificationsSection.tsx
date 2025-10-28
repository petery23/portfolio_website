'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const certifications = [
	{
		name: 'AWS Certified Cloud Practitioner',
		issuer: 'Amazon Web Services',
		date: 'In Progress',
		url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
		status: 'in-progress'
	},
];

export default function CertificationsSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

	return (
		<motion.section
			ref={ref}
			id="certifications"
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			initial={{ opacity: 0, y: 50 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<div className="sticky top-0 z-10 bg-[#f8f9fa] py-3 sm:py-4 -mx-6 sm:-mx-6 px-6 sm:px-6 mb-3 sm:mb-4">
				<h2 className="text-base sm:text-lg font-bold text-gray-900">🏆 Certifications</h2>
			</div>
			<div>
				{certifications.map((cert, index) => (
					<a
						key={index}
						href={cert.url}
						target="_blank"
						rel="noopener noreferrer"
						className={`group relative block rounded-lg border border-transparent p-4 transition-colors hover:bg-white hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg cursor-pointer ${
							cert.status === 'in-progress' ? 'bg-blue-50 border-blue-200' : ''
						}`}
					>
						<div className="flex items-center gap-2">
							<span className="font-medium text-gray-900 group-hover:text-blue-600">
								{cert.name}
							</span>
						</div>
						<p className="text-gray-700">{cert.issuer}</p>
						<p className={`text-sm mt-1 ${
							cert.status === 'in-progress' ? 'text-blue-600 font-medium' : 'text-gray-500'
						}`}>
							{cert.date}
						</p>
					</a>
				))}
			</div>
		</motion.section>
	);
}
