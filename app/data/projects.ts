// ─── Tag colors ─────────────────────────────────────────────────────────────
export const TAG_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'Python':        { bg: '#dff7e3', text: '#1a7f37', border: '#b3dfc0' },
  'MediaPipe':     { bg: '#ddf4ff', text: '#0969da', border: '#aecbf0' },
  'OpenCV':        { bg: '#fff3cd', text: '#7d5700', border: '#e0c97d' },
  'Flask':         { bg: '#f0f0f0', text: '#444',    border: '#ccc'    },
  'React Native':  { bg: '#e0f2fe', text: '#0369a1', border: '#93c5de' },
  'Firebase':      { bg: '#fef3c7', text: '#8a5700', border: '#f0d07a' },
  'TensorFlow':    { bg: '#fee2e2', text: '#b91c1c', border: '#fca5a5' },
  'PyTorch':       { bg: '#ffedd5', text: '#9a3412', border: '#fdba74' },
  'MediaPipe Hands':{ bg: '#ddf4ff', text: '#0969da', border: '#aecbf0' },
  'Natural Language Processing': { bg: '#f3e8ff', text: '#6b21a8', border: '#d8b4fe' },
  'BeautifulSoup': { bg: '#dcfce7', text: '#166534', border: '#86efac' },
  'Selenium':      { bg: '#fef9c3', text: '#7d5700', border: '#fde047' },
  'SMTP':          { bg: '#f0f0f0', text: '#444',    border: '#ccc'    },
  'SendGrid':      { bg: '#ddf4ff', text: '#0969da', border: '#aecbf0' },
  'SQLite':        { bg: '#e0f2fe', text: '#0369a1', border: '#93c5de' },
  'C/C++':         { bg: '#f3e8ff', text: '#6b21a8', border: '#d8b4fe' },
  'Arduino':       { bg: '#dcfce7', text: '#166534', border: '#86efac' },
  'Git':           { bg: '#fee2e2', text: '#b91c1c', border: '#fca5a5' },
};

// ─── Skill type ─────────────────────────────────────────────────────────────
export interface Skill {
  name: string;
  description: string;
}

// ─── Project type ───────────────────────────────────────────────────────────
export interface Project {
  id: string;
  filename: string;  // shown in tree and tab, e.g. 'frisbee-analyzer.md'
  title: string;
  skills: Skill[];
  desc: string;
  github?: string;
  image?: string;
}

// ─── Projects data ──────────────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    id: 'frisbee',
    filename: 'frisbee-analyzer.md',
    title: 'Ultimate Frisbee Angle Analyzer',
    image: '/projects/ultimate_logo.png',
    github: 'https://github.com/petery23/frisbee-analyzer',
    skills: [
      { name: 'Python', description: 'Core language for the backend API and computer vision pipeline' },
      { name: 'MediaPipe', description: 'Real-time pose estimation to track wrist and elbow positions during throws' },
      { name: 'OpenCV', description: 'Frame capture, image preprocessing, and angle calculation overlays' },
      { name: 'Flask', description: 'REST API serving analysis results to the mobile client' },
      { name: 'React Native', description: 'Cross-platform mobile app for recording throws and viewing feedback' },
      { name: 'Firebase', description: 'User auth, cloud storage for video uploads, and Firestore for session history' },
    ],
    desc: 'Mobile app that analyzes throwing mechanics in ultimate frisbee using computer vision. Uses the phone camera to track wrist angles and throwing form in real time, providing feedback on separation degrees, reachback, elbow timing, and wrist speed. Designed to help players improve consistency and prevent injuries.',
  },
  {
    id: 'winging',
    filename: 'winging-flights.md',
    title: 'WingingFlights',
    image: '/projects/wingingflights_logo.png',
    github: 'https://github.com/petery23/WingingFlights',
    skills: [
      { name: 'Python', description: 'Main scripting language for scraping logic and email automation' },
      { name: 'BeautifulSoup', description: 'HTML parsing to extract flight prices, routes, and availability' },
      { name: 'Selenium', description: 'Browser automation for scraping JavaScript-rendered flight search pages' },
      { name: 'SMTP', description: 'Sending formatted email alerts with matched flight deals' },
      { name: 'SendGrid', description: 'Production email delivery for reliable, high-volume notifications' },
      { name: 'SQLite', description: 'Local database storing user preferences, search criteria, and alert history' },
    ],
    desc: 'Cheap flight alert service with daily scraping and personalized notifications. Users sign up with email, travel dates, duration, and price range. Each morning the app scrapes flight data and emails users any matching low-cost options \u2014 automating trip planning and saving hours of manual searching.',
  },
  {
    id: 'echoguard',
    filename: 'echo-guard.md',
    title: 'EchoGuard',
    image: '/projects/EchoGuard_logo.png',
    github: 'https://github.com/petery23/echo-guard',
    skills: [
      { name: 'C/C++', description: 'Low-level firmware for sensor reading, threshold logic, and alert triggers' },
      { name: 'Arduino', description: 'Hardware platform — wired ultrasonic sensor, piezo buzzer, and LED to the microcontroller' },
    ],
    desc: 'Wearable night-time obstacle alert to help seniors navigate safely in the dark. A team-built Arduino device that mounts on a hat by the nightstand. An ultrasonic sensor detects nearby obstacles and triggers a piezo buzzer and LED. Includes tunable distance thresholds and alert patterns to reduce false alarms.',
  },
];
