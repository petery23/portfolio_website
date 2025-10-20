'use client';

import AboutSection from './components/AboutSection';
import CertificationsSection from './components/CertificationsSection';
import EducationSection from './components/EducationSection';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';

export default function SimplePortfolio() {
	return (
		<div className="lg:flex lg:justify-between lg:gap-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
			<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 py-8 text-center lg:text-left">
				<HeroSection />
			</header>
			<main className="pt-8 lg:pt-24 lg:w-1/2 lg:py-24">
				<AboutSection />
				<div className="border-t border-gray-200 my-8"></div>
				<ProjectsSection />
				<div className="border-t border-gray-200 my-8"></div>
				<CertificationsSection />
				<div className="border-t border-gray-200 my-8"></div>
				<EducationSection />
				<div className="border-t border-gray-200 my-8"></div>
				<SkillsSection />
			</main>
		</div>
	);
}
