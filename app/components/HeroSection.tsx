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
				
				<p className="text-neutral-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
					Hi, I’m Peter! I’m a Computer Science student at UF passionate about using AI to improve healthcare. My experience ranges from building motion-tracking apps with Mediapipe and OpenCV to researching linguistic markers of Hoarding Disorder with NLP. I’ve also worked as a TA, interned at a football data analytics startup, and led UI/UX efforts for SHPE. I love tackling problems that blend tech and impact, and I’m always open to connecting with others in software engineering and AI.
				</p>
			</div>
		</section>
	);
}
