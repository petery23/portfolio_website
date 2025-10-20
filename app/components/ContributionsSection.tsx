'use client';

import Image from 'next/image';

export default function ContributionsSection() {
	return (
		<section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-12">
			<h2 className="text-lg font-bold text-gray-900 mb-4">GitHub Contributions</h2>
			<div className="relative">
				{/* We can replace this with a real-time contribution graph later */}
				<Image
					src="/code.jpg" // Placeholder image
					alt="GitHub contributions graph"
					width={800}
					height={150}
					className="w-full"
				/>
				<p className="text-sm text-gray-500 absolute top-0 right-0">226 Contributions in 12 months</p>
			</div>
		</section>
	);
}
