'use client';

import { motion } from 'framer-motion';

interface Experience {
	role: string;
	company: string;
	date: string;
	location: string;
	description: string[];
}

const experiences: Experience[] = [
	// Add experiences here
];

export default function ExperienceSection() {
	return (
		<motion.section
			id="experience"
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<div className="sticky top-0 z-10 bg-[#f8f9fa] py-4 -mx-6 px-6 mb-4">
				<h2 className="text-lg font-bold text-gray-900">Experience</h2>
			</div>
			{experiences.length > 0 ? (
				<ol className="group/list">
					{experiences.map((exp, index) => (
						<li key={index} className="mb-12">
							<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
								<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-gray-100/70 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
								<header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2">
									{exp.date}
								</header>
								<div className="z-10 sm:col-span-6">
									<h3 className="font-medium leading-snug text-gray-900">
										<a
											href="#"
											className="inline-flex items-baseline font-medium leading-tight text-gray-900 hover:text-blue-600 focus-visible:text-blue-600 group/link text-base"
										>
											<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:block"></span>
											<span>
												{exp.role} · <span className="inline-block font-semibold">{exp.company}</span>
											</span>
										</a>
									</h3>
									<p className="mt-2 text-sm leading-normal text-gray-700">{exp.description.join(' ')}</p>
								</div>
							</div>
						</li>
					))}
				</ol>
			) : (
				<p className="text-gray-700">No professional experience yet. Check back soon!</p>
			)}
		</motion.section>
	);
}
