import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const projects = [
    {
        title: 'Ultimate (Frisbee Angle Analyzer)',
        tags: ['Python', 'MediaPipe', 'OpenCV', 'Flask', 'React Native', 'Firebase'],
        description:
            'Mobile app that analyzes throwing mechanics in ultimate frisbee using computer vision. Developed an app that uses the phone camera to track wrist angles and throwing form. Provides real-time feedback on separation degrees, reachback, elbow timing, and wrist speed. Designed with the goal of helping players improve consistency and prevent injuries.',
        link: 'https://github.com/petery23/Ultimate-Frisbee-Coach',
        image: '/projects/ultimate_logo.png',
    },
    {
        title: 'Signly',
        tags: ['Python', 'TensorFlow', 'PyTorch', 'MediaPipe Hands', 'Natural Language Processing'],
        description:
            'AI-powered sign language interpretation tool bridging accessibility gaps. Designed to interpret ASL into text in real-time, helping Deaf and hearing individuals communicate more easily. Focused on computer vision recognition of handshapes, movements, and context. Prototype stage involved model experimentation and dataset exploration.',
        link: 'https://github.com/willhuff0/signly',
        image: '/projects/signly_logo.png',
    },
    {
        title: 'WingingFlights',
        tags: ['Python', 'BeautifulSoup', 'Selenium', 'SMTP', 'SendGrid', 'SQLite'],
        description:
            'Cheap flight alert service with daily scraping and personalized notifications. Built a system where users sign up with email, travel dates, duration, and price range. Each morning, the app scrapes flight data and emails users any matching low-cost options. Automates planning and reduces hours of manual searching for deals.',
        link: 'https://github.com/petery23/WingingFlights',
        image: '/projects/wingingflights_logo.png',
    },
    {
        title: 'EchoGuard',
        tags: ['C/C++', 'Arduino'],
        description:
            'Wearable night-time obstacle alert to help seniors navigate safely in the dark. Team-built Arduino device that mounts on a hat kept by the nightstand. When the wearer gets up, an ultrasonic sensor detects nearby obstacles and triggers a piezo buzzer and light to warn of collisions—especially useful in low light. Includes tunable distance thresholds and alert patterns to reduce false alarms.',
        link: 'https://github.com/petery23/EchoGuard',
        image: '/projects/EchoGuard_logo.png',
    },
];

// Categorize skills by type
const skillCategories = {
    languages: ['Python', 'C/C++', 'Java', 'JavaScript', 'TypeScript', 'Dart'],
    frameworks: ['React Native', 'Flutter', 'Flask', 'TensorFlow', 'PyTorch'],
    tools: ['MediaPipe', 'OpenCV', 'MediaPipe Hands', 'BeautifulSoup', 'Selenium', 'SMTP', 'SendGrid', 'SQLite', 'PostgreSQL', 'Firebase', 'Arduino', 'HC-SR04 ultrasonic sensor', 'piezo buzzer', 'LED', 'Natural Language Processing']
};

const getSkillCategory = (skill: string): string => {
    if (skillCategories.languages.includes(skill)) return 'languages';
    if (skillCategories.frameworks.includes(skill)) return 'frameworks';
    return 'tools';
};

const categoryColors: { [key: string]: string } = {
    languages: 'bg-blue-100 text-blue-800',
    frameworks: 'bg-green-100 text-green-800',
    tools: 'bg-purple-100 text-purple-800'
};

// Create a separate component for individual projects to comply with Rules of Hooks
function ProjectCard({ project }: { project: typeof projects[0] }) {
    const projectRef = useRef(null);
    const projectInView = useInView(projectRef, { once: true, margin: "0px 0px -100px 0px" });
    
    return (
        <motion.li 
            ref={projectRef}
            className="mb-12 pb-8 border-b border-gray-200 last:border-b-0"
            initial={{ opacity: 0, y: 30 }}
            animate={projectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-white lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-1 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-gray-900">
                        <a
                            href={project.link}
                            className="inline-flex items-baseline font-medium leading-tight text-gray-900 hover:text-blue-600 focus-visible:text-blue-600 group/link text-base"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:block"></span>
                            <span>{project.title}</span>
                        </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-gray-700">{project.description}</p>
                    <ul className="mt-2 flex flex-wrap">
                        {project.tags.map((tag) => {
                            const category = getSkillCategory(tag);
                            return (
                                <li key={tag} className="mr-1.5 mt-2">
                                    <div
                                        className={`flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ${
                                            categoryColors[category] || 'bg-gray-100 text-gray-800'
                                        }`}
                                    >
                                        {tag}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="z-10 sm:order-2 sm:col-span-2 hidden sm:flex justify-center sm:justify-end">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 relative group/image">
                        <div className="absolute inset-0 bg-gray-50 rounded-lg border border-gray-200 group-hover/image:border-gray-300 transition-colors duration-300"></div>
                        <Image
                            src={project.image}
                            alt={`${project.title} logo`}
                            fill
                            className="object-contain rounded-lg p-1 group-hover/image:opacity-80 transition-opacity duration-300"
                        />
                    </div>
                </div>
            </div>
        </motion.li>
    );
}

export default function ProjectsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

    return (
        <motion.section
            ref={ref}
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* The sticky wrapper is now correct: it has the sticky, top-0, z-10, and bg-[#f8f9fa] classes */}
			<h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 sticky top-0 z-50 bg-[#f8f9fa] py-3 sm:py-4 -mx-4 sm:-mx-6 px-4 sm:px-6">
				🚀 Projects
			</h2>
            <ul className="group/list">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                ))}
            </ul>
        </motion.section>
    );
}