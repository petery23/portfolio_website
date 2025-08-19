import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
	{
		title: 'Ultimate (Frisbee Angle Analyzer)',
		oneLiner: 'Mobile app that analyzes throwing mechanics in ultimate frisbee using computer vision.',
		details:
			'Developed an app that uses the phone camera to track wrist angles and throwing form. Provides real-time feedback on separation degrees, reachback, elbow timing, and wrist speed. Designed with the goal of helping players improve consistency and prevent injuries.',
		stack: 'Python, MediaPipe/OpenCV, Flask backend, React Native (front-end prototype)',
		link: 'https://github.com/petery23/Ultimate-Frisbee-Coach',
		image: '/projects/ultimate_logo.png', // Use /projects/ultimate.jpg when ready
	},
	{
		title: 'Signly',
		oneLiner: 'AI-powered sign language interpretation tool bridging accessibility gaps.',
		details:
			'Designed to interpret ASL into text in real-time, helping Deaf and hearing individuals communicate more easily. Focused on computer vision recognition of handshapes, movements, and context. Prototype stage involved model experimentation and dataset exploration.',
		stack: 'Python, TensorFlow/PyTorch, MediaPipe Hands, Natural Language Processing',
		link: 'https://github.com/willhuff0/signly',
		image: '/projects/signly_logo.png', // Use /projects/signly.jpg when ready
	},
	{
		title: 'WingingFlights',
		oneLiner: 'Cheap flight alert service with daily scraping and personalized notifications.',
		details:
			'Built a system where users sign up with email, travel dates, duration, and price range. Each morning, the app scrapes flight data and emails users any matching low-cost options. Automates planning and reduces hours of manual searching for deals.',
		stack: 'Python, BeautifulSoup/Selenium (scraping), SMTP/SendGrid (email automation), SQLite/PostgreSQL',
		link: 'https://github.com/petery23/WingingFlights',
		image: '/projects/wingingflights_logo.png', // Use /projects/wingingflights.jpg when ready
	},
	{
	title: 'EchoGuard',
	oneLiner: 'Wearable night-time obstacle alert to help seniors navigate safely in the dark.',
	details:
		'Team-built Arduino device that mounts on a hat kept by the nightstand. When the wearer gets up, an ultrasonic sensor detects nearby obstacles and triggers a piezo buzzer and light to warn of collisions—especially useful in low light. Includes tunable distance thresholds and alert patterns to reduce false alarms.',
	stack: 'Arduino (C/C++), HC-SR04 ultrasonic sensor, piezo buzzer, LED, breadboard/3D-printed mount',
	link: 'https://github.com/petery23/EchoGuard',
	image: '/projects/echoguard_logo.png', // Use /projects/echoguard.jpg when ready
	},
];


const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.18 },
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 32 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function ProjectsSection() {
	return (
		<motion.section className="py-12 sm:py-20"
			variants={containerVariants}
			initial="hidden" 	
			whileInView="visible"
			viewport={{ once: true }}
		>
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center" variants={cardVariants}>
					Featured Projects
				</motion.h2>
				<motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8" variants={containerVariants}>
					{projects.map((project, idx) => (
						<motion.div
							key={idx}
							className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
							variants={cardVariants}
						>
							<div className="aspect-video bg-gray-100 relative">
								<Image src={project.image} alt={project.title} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{project.title}</h3>
								<p className="text-xs sm:text-sm text-blue-700 font-medium mb-2">{project.oneLiner}</p>
								<p className="text-sm sm:text-base text-gray-600 mb-2">{project.details}</p>
								<p className="text-xs sm:text-xs text-gray-500 mb-4"><span className="font-semibold">Stack:</span> {project.stack}</p>
								<div className="flex gap-2">
									<a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base">
										View Project →
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</motion.section>
	);
}
