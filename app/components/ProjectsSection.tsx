import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Ultimate (Frisbee Angle Analyzer)',
        tags: ['Python', 'MediaPipe', 'OpenCV', 'Flask', 'React Native'],
        description:
            'Mobile app that analyzes throwing mechanics in ultimate frisbee using computer vision. Developed an app that uses the phone camera to track wrist angles and throwing form. Provides real-time feedback on separation degrees, reachback, elbow timing, and wrist speed. Designed with the goal of helping players improve consistency and prevent injuries.',
        link: 'https://github.com/petery23/Ultimate-Frisbee-Coach',
    },
    {
        title: 'Signly',
        tags: ['Python', 'TensorFlow', 'PyTorch', 'MediaPipe Hands', 'Natural Language Processing'],
        description:
            'AI-powered sign language interpretation tool bridging accessibility gaps. Designed to interpret ASL into text in real-time, helping Deaf and hearing individuals communicate more easily. Focused on computer vision recognition of handshapes, movements, and context. Prototype stage involved model experimentation and dataset exploration.',
        link: 'https://github.com/willhuff0/signly',
    },
    {
        title: 'WingingFlights',
        tags: ['Python', 'BeautifulSoup', 'Selenium', 'SMTP', 'SendGrid', 'SQLite', 'PostgreSQL'],
        description:
            'Cheap flight alert service with daily scraping and personalized notifications. Built a system where users sign up with email, travel dates, duration, and price range. Each morning, the app scrapes flight data and emails users any matching low-cost options. Automates planning and reduces hours of manual searching for deals.',
        link: 'https://github.com/petery23/WingingFlights',
    },
    {
        title: 'EchoGuard',
        tags: ['Arduino', 'C/C++', 'HC-SR04 ultrasonic sensor', 'piezo buzzer', 'LED'],
        description:
            'Wearable night-time obstacle alert to help seniors navigate safely in the dark. Team-built Arduino device that mounts on a hat kept by the nightstand. When the wearer gets up, an ultrasonic sensor detects nearby obstacles and triggers a piezo buzzer and light to warn of collisions—especially useful in low light. Includes tunable distance thresholds and alert patterns to reduce false alarms.',
        link: 'https://github.com/petery23/EchoGuard',
    },
];

const tagColors = {
    Python: 'bg-yellow-100 text-yellow-800',
    MediaPipe: 'bg-orange-100 text-orange-800',
    OpenCV: 'bg-green-100 text-green-800',
    Flask: 'bg-gray-200 text-gray-900',
    'React Native': 'bg-blue-100 text-blue-800',
    TensorFlow: 'bg-red-100 text-red-800',
    PyTorch: 'bg-pink-100 text-pink-800',
    'MediaPipe Hands': 'bg-orange-200 text-orange-900',
    'Natural Language Processing': 'bg-indigo-100 text-indigo-800',
    BeautifulSoup: 'bg-lime-100 text-lime-800',
    Selenium: 'bg-emerald-100 text-emerald-800',
    SMTP: 'bg-cyan-100 text-cyan-800',
    SendGrid: 'bg-sky-200 text-sky-900',
    SQLite: 'bg-purple-100 text-purple-800',
    PostgreSQL: 'bg-violet-100 text-violet-800',
    Arduino: 'bg-teal-100 text-teal-800',
    'C/C++': 'bg-gray-300 text-gray-900',
    'HC-SR04 ultrasonic sensor': 'bg-gray-200 text-gray-700',
    'piezo buzzer': 'bg-yellow-200 text-yellow-900',
    LED: 'bg-red-200 text-red-900',
};

export default function ProjectsSection() {
    return (
        <motion.section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            {/* The sticky wrapper is now correct: it has the sticky, top-0, z-10, and bg-[#f8f9fa] classes */}
			<h2 className="text-lg font-bold text-gray-900 mb-4 sticky top-0 z-50 bg-[#f8f9fa] py-4 -mx-6 px-6">
				Projects
			</h2>
            <ul className="group/list">
                {projects.map((project, idx) => (
                    <li key={idx} className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-white lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
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
                                    {project.tags.map((tag) => (
                                        <li key={tag} className="mr-1.5 mt-2">
                                            <div
                                                className={`flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ${
                                                    tagColors[tag] || 'bg-gray-100 text-gray-800'
                                                }`}
                                            >
                                                {tag}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </motion.section>
    );
}