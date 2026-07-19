// Central content source so sections stay easy to edit.

export const CONTACT = {
  email: 'vaibhavsalaklan@gmail.com',
  phone: '+91 89202 11343',
  linkedin: 'https://www.linkedin.com/in/vaibhav-salaklan-bu/',
  github: 'https://github.com/vaibhav1011',
  resume: '/resume.pdf',
}

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
]

export const EXPERIENCE = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Lit India Pvt. Ltd.',
    period: 'June 2025 – July 2025',
    points: [
      'Gained end-to-end SDLC exposure across planning, development, and deployment.',
      'Built UI features and backend endpoints with React, Node.js, and Express.',
      'Containerized services with Docker to reduce dev/staging inconsistencies.',
      'Debugged and resolved application bugs to improve overall stability.',
    ],
  },
]

export const PROJECTS = [
  {
    title: 'Enterprise RAG + Agentic Assistant',
    tech: ['FastAPI', 'LangGraph', 'PostgreSQL/pgvector', 'Streamlit', 'OpenAI/Ollama'],
    description:
      'Production-style RAG + agentic assistant routing messages through a LangGraph state machine into grounded Q&A (hybrid BM25+vector retrieval, RRF fusion), NL→SQL analytics, or human-approved actions via an interrupt/checkpoint pattern. Includes prompt-injection guardrails, self-critique verification, and a RAGAS-style eval harness.',
    github: 'https://github.com/vaibhav1011/Enterprise-RAG-Agentic-Assistant',
  },
  {
    title: 'AI Meeting Assistant Bot',
    tech: ['React', 'Node.js', 'MongoDB', 'Python', 'Playwright', 'WhisperX'],
    description:
      'AI-powered assistant that joins online meetings via link, captures audio, and turns conversations into summaries, action items, and tickets. Playwright browser automation handles bot-based joining of Google Meet, Zoom, and Teams with platform detection and pre-join workflows, while a Python microservice runs WhisperX timestamped transcription and pyannote.audio speaker diarization for near real-time, speaker-wise meeting intelligence.',
    github: 'https://github.com/vaibhav1011/meeting-transcript-ai',
  },
  {
    title: 'AI Virtual Mouse & Gesture Keyboard',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI', 'pynput', 'NumPy'],
    description:
      'Real-time hand-gesture control system using OpenCV and MediaPipe hand-landmark tracking. Supports cursor movement, left/right click, scroll, zoom, and drag-and-drop via a custom gesture state machine with debouncing and hysteresis to prevent misfires, plus a gesture-driven virtual keyboard with both dwell-time and pinch-to-confirm typing modes.',
    github: 'https://github.com/vaibhav1011/ai-virtual-mouse-keyboard',
    // TODO: add demo GIF/video once the card layout supports media
  },
  {
    title: 'Radhey Girls PG — Business Website & Local SEO',
    tech: ['HTML', 'CSS', 'JavaScript', 'SEO'],
    description:
      'Designed, built, and deployed a live production website for a family-run PG accommodation business near Bennett University, including custom domain setup and local SEO to improve discoverability for prospective tenants. End-to-end ownership across design, development, hosting, and deployment — live at radheygirlspg.in.',
    github: 'https://github.com/vaibhav1011/radheygirlspg',
  },
  {
    title: 'Database-Driven Library Management Backend',
    tech: ['Python', 'SQLite3'],
    description:
      'Relational library management system with a well-structured schema, primary-key constraints for data integrity, robust CRUD operations with error handling for duplicate entries, and clean separation of data and application logic layers.',
    github: null, // link hidden until provided
  },
]

export const SKILLS = [
  { group: 'Languages', items: ['Python', 'Java', 'C++', 'R', 'SQL'] },
  { group: 'Frontend', items: ['React', 'HTML/CSS'] },
  { group: 'Backend / DevOps', items: ['Node.js', 'Express', 'Docker', 'Linux', 'AWS'] },
  { group: 'Data / DB', items: ['MongoDB', 'SQLite3', 'PostgreSQL/pgvector', 'SQL'] },
  { group: 'AI / ML Tools', items: ['LangGraph', 'WhisperX', 'pyannote.audio', 'OpenAI/Ollama', 'RAG'] },
]

export const CERTIFICATIONS = [
  'AI with Python — Coincent AI',
  'Neural Networks and Deep Learning — Coursera',
  'Intro to Modern Database Systems — Saylor Academy',
  'OOP Data Structures in C++ — UIUC',
  'MATLAB Programming Techniques — MathWorks',
  'Digital Electronics — Infosys',
]
