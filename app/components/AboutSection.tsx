'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
	return (
		<motion.section
			id="about"
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.1 }}
		>
			<h2 className="text-lg font-bold text-gray-900 mb-4 sticky top-0 bg-[#f8f9fa] py-4 -mx-6 px-6">
				About
			</h2>
			<p className="text-gray-800">
				Hey! I&apos;m Peter, a Computer Science student at UF who&apos;s probably fighting with Gemini right now 
				over some stubborn code. When I&apos;m not debugging at 2 AM or helping students as a TA, you&apos;ll find 
				me working on projects that caught my attention (usually involving computer vision or machine learning). 
				I love the challenge of turning &ldquo;this should work&rdquo; into &ldquo;why isn&apos;t this working?&rdquo; and then eventually 
				into something that actually helps people. Always curious about the stories behind the problems we&apos;re solving.
				Feel free to reach out if you want to chat about tech, projects, or just want to share some good memes!
			</p>
		</motion.section>
	);
}
