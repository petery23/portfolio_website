'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

	return (
		<motion.section
			ref={ref}
			id="about"
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 pt-16 lg:pt-24"
			initial={{ opacity: 0, y: 50 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<div className="sticky top-0 z-10 bg-[#f8f9fa] py-3 sm:py-4 -mx-6 sm:-mx-6 px-6 sm:px-6 mb-3 sm:mb-4">
				<h2 className="text-base sm:text-lg font-bold text-gray-900">👋 About Me</h2>
			</div>
			<div className="prose prose-gray max-w-none">
				<p className="text-gray-700 leading-relaxed">
					Hi! Thanks for checking out my website. I made this to show off some of the cool stuff I&apos;ve worked on. 
					If you think any of it&apos;s cool too, feel free to{' '}
					<a 
						href="https://www.linkedin.com/in/peter-yungman/" 
						target="_blank" 
						rel="noopener noreferrer"
						className="text-orange-600 hover:text-orange-700 font-medium hover:underline transition-all duration-200 hover:bg-orange-50 px-1 py-0.5 rounded"
					>
						reach out
					</a>
					{' '}— I&apos;m always looking for new projects and ideas to get involved with.
				</p>
			</div>
		</motion.section>
	);
}