export const profile = {
  name: "Chung Pao (Bert) Hsiao",
  shortName: "Bert Hsiao",
  brand: "BERT HSIAO",
  title: "Full-Stack / Backend Software Engineer",
  tagline:
    "Building high-availability systems, secure payment infrastructure, and AI-powered platforms.",
  location: "Toronto, ON, Canada",
  phone: "647-335-4881",
  email: "x6815541@gmail.com",
  linkedin: "https://www.linkedin.com/in/bert-hsiao-30b97b199/",
  github: "https://github.com/frenchdog0802",
  workAuth: "PGWP",
  summary:
    "Full-stack / backend software engineer with 4+ years of experience building high-availability systems, secure payment infrastructure, and AI-powered platforms across fintech and SaaS environments. Recently completed a postgraduate diploma in Software Engineering Technology in Toronto; now focused on backend, cloud, and applied-AI engineering roles in Canada.",
};

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "JavaScript", "Python", "SQL", "HTML/CSS", "JSON/XML"],
  },
  {
    label: "AI / LLM",
    items: [
      "LangChain4j",
      "OpenAI Function Calling",
      "Prompt Engineering",
      "Agentic Workflow Design",
    ],
  },
  {
    label: "Frameworks",
    items: ["Spring Boot", "React", "Node.js (Express)"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "pgvector"],
  },
  {
    label: "Cloud / DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "Azure",
      "Jenkins",
      "GitHub Actions",
      "CI/CD",
      "Microservices",
    ],
  },
  {
    label: "Tools",
    items: [
      "Git",
      "OAuth2/JWT",
      "RESTful APIs",
      "Postman",
      "Maven",
      "Gradle",
      "JIRA",
      "JUnit",
      "Mockito",
    ],
  },
];

export const experience = [
  {
    company: "VortexNet LLC",
    location: "Covina, CA",
    role: "Software Engineer",
    type: "Internship",
    period: "Jan 2026 – Jun 2026",
    highlights: [
      "Built an asynchronous CI remediation pipeline using GitHub webhooks and background workers to diagnose failed builds, generate LLM-assisted fixes, and automatically open draft pull requests, reducing manual triage time from hours to minutes.",
      "Developed a full-stack AI workspace agent that translated natural-language requests into executable Google Workspace workflows across 10+ integrated tools, enabling users to complete multi-step tasks without switching applications.",
      "Architected a modular agent orchestration framework using LangChain4j tool calling and a pluggable tool registry, enabling scalable integration of new tools without modifying the core execution engine.",
      "Engineered a hybrid memory architecture combining PostgreSQL conversation history with pgvector semantic retrieval, improving context-recall accuracy from 45% to 90% by grounding AI outputs in relevant user context.",
    ],
  },
  {
    company: "Xujie Software Tech",
    location: "Taipei, TW",
    role: "Backend Engineer",
    type: "Full-time",
    period: "Jul 2022 – Jul 2024",
    highlights: [
      "Developed high-availability Spring Boot backend services processing 1,000+ daily transactions, ensuring reliable real-time SMS and FCM verification for production systems.",
      "Integrated 10+ secure payment gateways with 3D Secure (3DS) authentication, strengthening payment security and ensuring compliance with financial security standards.",
      "Implemented RabbitMQ-based asynchronous processing to reduce message delivery latency and improve backend responsiveness under high-concurrency workloads.",
    ],
  },
  {
    company: "Hung Yang Software Tech",
    location: "Taipei, TW",
    role: "Software Engineer",
    type: "Full-time",
    period: "Jul 2020 – Jun 2022",
    highlights: [
      "Optimized backend services by improving database queries and application performance, reducing API response times by 30%.",
      "Developed and maintained RESTful APIs integrating payment gateway services, enabling reliable and scalable order processing workflows.",
      "Collaborated with cross-functional engineering teams to build and maintain scalable backend systems supporting both web and mobile applications.",
    ],
  },
];

export const projects = [
  {
    name: "FastQuote",
    subtitle: "AI-Powered Quoting CRM",
    stack: "Full-Stack + LLM Application",
    period: "Jul 2025 – Present",
    url: "https://www.fastquotationpro.com/",
    preview: "previews/fastquote.jpg",
    highlights: [
      "Built an AI-powered B2B quoting assistant with LINE Bot integration, enabling businesses to respond to price inquiries 24/7 without manual intervention, reducing average quote response time from hours to under 30 seconds.",
      "Architected a 9-node LangGraph state machine (product matching → readiness assessment → pricing → safety check → human handoff) using LLM, handling multi-turn conversations with automatic escalation logic for complex orders.",
    ],
  },
  {
    name: "LarderMind",
    subtitle: "AI Meal Planning Assistant (CookCopilot)",
    stack: "Full-Stack + LLM Application",
    period: "Jul 2025 – Present",
    url: "https://cookcopilot-frontend-production.up.railway.app/",
    preview: "previews/cookcopilot.jpg",
    highlights: [
      "Developed an AI-powered meal planning assistant that converts pantry data into personalized meal plans for approximately 50 daily active users, leveraging LLM-based reasoning and scalable recipe-generation APIs.",
      "Implemented a full-stack architecture with a React frontend, Node.js backend, and cloud-based CI/CD deployment, improving system maintainability and supporting continuous product iteration.",
    ],
  },
  {
    name: "Credit Risk Scoring Model",
    subtitle: "Master's Thesis Research",
    stack: "Python, XGBoost, LightGBM, Scikit-learn",
    period: "Jul 2023 – Jun 2024",
    highlights: [
      "Built an in-house credit risk scoring model using stacking ensemble techniques with Logistic Regression, Decision Trees, XGBoost, and LightGBM on 59,000+ internal loan records, achieving 68.8% accuracy and 97.5% recall in default prediction.",
      "Reduced default rates by up to 28 percentage points across risk tiers and improved net return rate from 6.81% to 7.14%, replacing costly third-party risk providers with a transparent internal modeling framework.",
    ],
  },
];

export const education = [
  {
    school: "National Central University",
    location: "Taoyuan, Taiwan",
    degree:
      "Master of Science, Computer Science (Part-time, while employed full-time)",
    gpa: "3.8",
    period: "Sep 2022 – Jun 2024",
  },
  {
    school: "Centennial College",
    location: "Toronto, Canada",
    degree: "Advanced Diploma, Software Engineering Technology",
    gpa: "3.8",
    period: "Sep 2024 – Dec 2025",
  },
];

export const metrics = [
  { value: "4+", label: "Years Experience" },
  { value: "10+", label: "Payment Gateways" },
  { value: "90%", label: "AI Context Recall" },
  { value: "30%", label: "Faster APIs" },
];
