'use client';

import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<div className="text-center">
				<div className="mb-6 sm:mb-8">
					<Image src="/portrait.jpeg" alt="Portrait of Peter Yungman" width={200} height={200} className="rounded-full mx-auto border-4 border-gray-200 shadow-xl" />
				</div>
				<h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 drop-shadow-lg">
					Peter Yungman
				</h1>
				<p className="text-lg sm:text-xl text-secondary mb-2 sm:mb-3 font-semibold">Computer Science @ UF · AI & Healthcare</p>
				<p className="text-neutral-700 max-w-2xl mx-auto text-base sm:text-lg font-medium mb-4 sm:mb-6">
					I build practical, human-centered software. Focusing on AI for healthcare and accessible tools that make people’s lives easier. I like clean UX, clear data, and shipping things that work.
				</p>
				<p className="text-neutral-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
					I’m a CS student at the University of Florida with experience in React Native, computer vision, and applied ML. My projects span a rehab app for range-of-motion, a wearable blood-pressure device, and tools for student communities.
				</p>
			</div>
		</section>
	);
}
