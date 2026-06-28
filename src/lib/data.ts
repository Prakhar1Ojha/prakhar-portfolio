/** Portfolio content data — update with your real information */

export const bio = {
  summary:
    "Passionate software engineer specializing in AI, full-stack development, and futuristic user experiences. I build intelligent systems that bridge cutting-edge technology with elegant design.",
  goals: [
    "Develop AI-powered applications that solve real-world problems",
    "Contribute to open-source and the developer community",
    "Work at the intersection of machine learning and product engineering",
    "Create immersive, accessible digital experiences",
  ],
  interests: [
    "Artificial Intelligence",
    "Holographic UI Design",
    "Open Source",
    "Competitive Programming",
    "Robotics",
    "Sci-Fi Technology",
  ],
};

export const education = [
  {
    id: "school",
    type: "School",
    institution: "Delhi Public School",
    period: "2015 — 2019",
    degree: "Higher Secondary (Science)",
    achievements: ["Science Olympiad Finalist", "Coding Club President"],
  },
  {
    id: "college",
    type: "College",
    institution: "Indian Institute of Technology",
    period: "2019 — 2023",
    degree: "B.Tech in Computer Science",
    achievements: ["Dean's List", "AI Research Lab Member", "Hackathon Winner"],
  },
];

export const experience = [
  {
    id: "exp1",
    role: "AI Engineering Intern",
    company: "TechNova Labs",
    period: "Jun 2023 — Aug 2023",
    description:
      "Built NLP pipelines and deployed ML models to production. Improved inference latency by 40% through model optimization.",
    tech: ["Python", "TensorFlow", "FastAPI", "Docker"],
  },
  {
    id: "exp2",
    role: "Full Stack Developer",
    company: "CodeForge Solutions",
    period: "Jan 2024 — Present",
    description:
      "Developed scalable web applications serving 50K+ users. Led frontend architecture migration to React and Next.js.",
    tech: ["React", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    id: "exp3",
    role: "Open Source Contributor",
    company: "Various Projects",
    period: "2022 — Present",
    description:
      "Active contributor to ML and web frameworks. Maintained documentation and fixed critical bugs across 10+ repositories.",
    tech: ["Git", "Python", "TypeScript"],
  },
];

export const skillCategories = [
  {
    id: "programming",
    name: "Programming",
    icon: "Code2",
    skills: [
      { name: "Python", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "C++", level: 75 },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: "Layout",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Three.js", level: 70 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 82 },
      { name: "REST APIs", level: 88 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    id: "ai",
    name: "AI",
    icon: "Brain",
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 78 },
      { name: "OpenAI API", level: 85 },
      { name: "LangChain", level: 72 },
    ],
  },
  {
    id: "ml",
    name: "Machine Learning",
    icon: "Cpu",
    skills: [
      { name: "Scikit-learn", level: 82 },
      { name: "Computer Vision", level: 75 },
      { name: "NLP", level: 80 },
      { name: "MLOps", level: 68 },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 72 },
      { name: "Firebase", level: 78 },
    ],
  },
  {
    id: "cloud",
    name: "Cloud",
    icon: "Cloud",
    skills: [
      { name: "AWS", level: 78 },
      { name: "GCP", level: 70 },
      { name: "Vercel", level: 88 },
      { name: "Docker", level: 82 },
    ],
  },
  {
    id: "tools",
    name: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 75 },
      { name: "Postman", level: 85 },
    ],
  },
  {
    id: "soft",
    name: "Soft Skills",
    icon: "Users",
    skills: [
      { name: "Communication", level: 88 },
      { name: "Team Leadership", level: 82 },
      { name: "Problem Solving", level: 92 },
      { name: "Agile", level: 85 },
    ],
  },
];

export const projects = [
  {
    id: "neural-viz",
    title: "Neural Network Visualizer",
    description:
      "Interactive 3D visualization of neural network architectures with real-time training metrics and holographic UI.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    tech: ["React", "Three.js", "TensorFlow.js", "WebGL"],
    github: "https://github.com/prakhar/neural-viz",
    demo: "https://neural-viz.demo.com",
  },
  {
    id: "ai-assistant",
    title: "HoloAssist AI",
    description:
      "Voice-enabled AI assistant with holographic interface, context-aware responses, and multi-modal input support.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tech: ["Next.js", "OpenAI", "WebRTC", "Framer Motion"],
    github: "https://github.com/prakhar/holo-assist",
    demo: "https://holo-assist.demo.com",
  },
  {
    id: "quantum-dash",
    title: "Quantum Dashboard",
    description:
      "Real-time analytics dashboard with predictive ML models, animated data visualizations, and cyberpunk aesthetics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tech: ["TypeScript", "D3.js", "Python", "FastAPI"],
    github: "https://github.com/prakhar/quantum-dash",
    demo: "https://quantum-dash.demo.com",
  },
  {
    id: "codeforge",
    title: "CodeForge IDE",
    description:
      "Browser-based IDE with AI code completion, collaborative editing, and futuristic HUD-inspired interface.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    tech: ["Monaco Editor", "Node.js", "WebSockets", "Redis"],
    github: "https://github.com/prakhar/codeforge",
    demo: "https://codeforge.demo.com",
  },
];

export const certifications = [
  {
    id: "cert1",
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80",
  },
  {
    id: "cert2",
    title: "Google ML Engineer",
    issuer: "Google Cloud",
    date: "2023",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80",
  },
  {
    id: "cert3",
    title: "Meta Front-End Developer",
    issuer: "Meta",
    date: "2023",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80",
  },
  {
    id: "cert4",
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2022",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
  },
];

export const achievements = [
  { label: "Projects", value: 24, suffix: "+" },
  { label: "Commits", value: 1847, suffix: "+" },
  { label: "Certificates", value: 12, suffix: "" },
  { label: "Coding Hours", value: 3500, suffix: "+" },
  { label: "Hackathons", value: 8, suffix: "" },
];

export const githubStats = {
  username: "prakhar",
  followers: 342,
  repositories: 48,
  languages: [
    { name: "TypeScript", percentage: 35, color: "#3178c6" },
    { name: "Python", percentage: 30, color: "#3572A5" },
    { name: "JavaScript", percentage: 20, color: "#f1e05a" },
    { name: "Other", percentage: 15, color: "#8b949e" },
  ],
  /** Simulated contribution data (weeks × days) */
  contributions: generateContributions(),
};

/** Generate pseudo-random GitHub-style contribution grid */
function generateContributions(): number[][] {
  const weeks = 52;
  const days = 7;
  const grid: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      week.push(Math.random() > 0.3 ? Math.floor(Math.random() * 5) : 0);
    }
    grid.push(week);
  }
  return grid;
}

export const timeline = [
  { year: "2019", event: "Started B.Tech in Computer Science" },
  { year: "2021", event: "First open-source contribution" },
  { year: "2022", event: "Won university hackathon" },
  { year: "2023", event: "AI Engineering Internship" },
  { year: "2024", event: "Full Stack Developer role" },
  { year: "2025", event: "Building the future" },
];
