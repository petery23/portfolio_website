'use client';

import CertificationsSection from './components/CertificationsSection';
import EducationSection from './components/EducationSection';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';

export default function SimplePortfolio() {
	return (
		<div className="lg:flex lg:justify-between lg:gap-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
			<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
				<HeroSection />
			</header>
			<main className="pt-24 lg:w-1/2 lg:py-24">
				<ProjectsSection />
				<CertificationsSection />
				<EducationSection />
				<SkillsSection />
			</main>
		</div>
	);
}
