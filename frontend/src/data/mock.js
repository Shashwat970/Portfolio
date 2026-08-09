// Mock data for portfolio site
export const portfolioData = {
  personal: {
    name: "Shashwat Srivastava",
    title: "Data Science Expert",
    tagline: "Building the future, one line of code at a time",
    description: "An enthusiastic, passionate graduate, ready to bring value to the organization. With a drive for continued learning alongside a strong skill set in strategic project management and team leadership, I could be a successful and valued team member in any fast-paced environment. I have a geeky curiosity and a passion for coming up with innovative solutions to problems, landing things, and building bridges within teams to align for results.",
    image: "https://i.pinimg.com/280x280_RS/d1/2d/6d/d12d6dc8b0912314c1fb35ce990244d9.jpg",
    resume: "https://drive.google.com/file/d/1FK5UcwW4OaR5maQ0FXVLrzK6oBCuuh0_/view?usp=sharing",
    location: "living on Earth",
    email: "shashwat09722@gmail.com",
    phone: "+91 9456136336",
    socialLinks: {
      github: "https://github.com/Shashwat970",
      linkedin: "https://linkedin.com/in/shashsri00",
      instagram: "https://instagram.com/shashwat_sri0",
      twitter: "https://x.com/shashwat09722"
    }
  },

  stats: {
    experience: "1+",
    projects: "10+",
    certifications: "50+",
    clients: "5+"
  },

  about: {
    title: "Born to Build, Not to Follow",
    story: "I'm that curious developer who started coding at the age of 16 and never looked back. Inspired by innovators like Elon Musk—aim high, work hard, never give up.\n\nI believe in solving real problems through technology. My parents' support reminds me daily why I'm here—to build something meaningful and change lives through code. Not just seeking jobs, but creating opportunities.",
    highlights: [
      {
        icon: "Code",
        title: "10+ Projects",
        description: "Built 10+ Data Analytics projects and steganography, moodmate bot and more.. , all from MVPs to full-scale platforms across various domains."
      },
      {
        icon: "Award", 
        title: "50+ Certifications",
        description: "AI & ML, Cloud Computing, Cybersecurity, Data Science, and hackathon participation."
      }
    ]
  },

  education: [
    {
      year: "2023 - 2026",
      degree: "Bachelor's in Computer Applications",
      institution: "SRM University, kathalankankur",
      description: "Specialization in Data Science"
    },
    {
      year: "2022", 
      degree: "Class XII - Science",
      institution: "Vardhman Academy",
      description: "Stream with Mathematics and Computer Science"
    }
  ],

  skills: {
    frontend: [
      { name: "HTML5", icon: "🌐", level: 95 },
      { name: "Next.js", icon: "▲", level: 90 },
      { name: "TypeScript", icon: "TS", level: 88 },
      { name: "Tailwind CSS", icon: "🎨", level: 92 },
      { name: "Vue.js", icon: "💚", level: 85 }
    ],
    backend: [
      { name: "Node.js", icon: "🟢", level: 90 },
      { name: "Python", icon: "🐍", level: 90 },
      { name: "MongoDB", icon: "🍃", level: 82 },
      { name: "SQL", icon: "◉", level: 98 }
    ],
    tools: [
      { name: "Git", icon: "📚", level: 95 },
      { name: "Docker", icon: "🐳", level: 85 },
      { name: "AWS", icon: "☁️", level: 80 },
      { name: "Hugging Face", icon: " 🤗 ", level: 81 },
      { name: "VS Code", icon: "💻", level: 98 }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Image Steganography App",
      description: "This is an interactive web application that allows users to encode secret messages into images and decode hidden messages from encoded images. The app is built using Streamlit and OpenCV, ensuring an intuitive user interface and efficient image processing." ,
      image: "https://media.wired.com/photos/594db1717c1bde11fe06f341/3:2/w_1920,c_limit/hidden_data-01.png",
      technologies: ["Python", "Streamlit", "OpenCV", "ASCII mapping", "NumPy"],
      liveUrl: "https://cybersecurityprograms-m2qquc8uts9rfirpd6gk5m.streamlit.app/",
      githubUrl: "https://github.com/Shashwat970/Cybersecurity_programs",
      featured: true
    },
    {
      id: 2, 
      title: "Moodmate bot",
      description: "Team productivity platform with real-time collaboration, AI task prioritization, and advanced analytics. Supports teams of 2-200 with enterprise-grade security.",
      image: "https://www.shutterstock.com/image-vector/doodle-emoticon-face-icon-set-600nw-2479174063.jpg",
      technologies: ["Python", "Transformers", "Gradio"],
      liveUrl: "https://huggingface.co/spaces/shake97/moodmate",
      githubUrl: "https://github.com/Shashwat970/Moodmate",
      featured: false
    },
    {
      id: 3,
      title: "Sales Dashboard",
      description: "TThe Sales-Forecasting System for E-Commerce Food Products is designed to help e-commerce platforms predict the sales of food products based on historical sales data. By analyzing various factors such as pricing, promotional offers, and seasonal trends, the system uses machine learning algorithms to forecast future demand.",
      image: "https://thumbs.dreamstime.com/b/titanic-iceberg-original-oil-painting-ocean-night-canvas-full-moon-stars-modern-impressionism-200487951.jpg",
      technologies: ["python, HTML5, Css"],
      liveUrl: "https://salesdashboard-1k48.onrender.com/login",
      githubUrl: "https://github.com/Shashwat970/salesdashboard",
      featured: true
    },
    {
      id: 4,
      title: "Crypto Neon Terminal",
      description: "Project fetches live Bitcoin & Ethereum prices (USD) then Visualizes 30-day historical trends using interactive Plotly charts, allowing users to refresh data dynamically.It also enables CSV export of historical data",
      image: "https://media.istockphoto.com/id/1034363382/photo/coins-of-various-cryptocurrencies.jpg?s=612x612&w=0&k=20&c=-ia1tKJeGeoJ7bWN8i6Udzq92MZ9T9vi--OFT6fVsiA=",
      technologies: ["Css", "Python", "HTML5", "Javascript"],
      liveUrl: "https://crypto-data-analytics.vercel.app/",
      githubUrl: "https://github.com/Shashwat970/crypto-neon-terminal",
      featured: true
    }
  ],

  services: [
    {
      icon: "Code",
      title: "Full-Stack Development", 
      description: "End-to-end web application development using modern frameworks. From concept to deployment, I build scalable solutions with clean architecture and best practices."
    },
    {
      icon: "Shield",
      title: "CyberSecurity",
      description: "I develop intelligent cybersecurity solutions that integrate AI, data analysis, and automation to enhance threat detection and system security. My projects include real-time log monitoring for suspicious activity, IP reputation analysis, and AI-powered security Q&A systems that explain vulnerabilities such as SQL Injection, XSS, and CSRF. By leveraging Python, Regex, Natural Language Processing, and LangChain, I build tools that not only detect and classify threats but also educate users to strengthen overall security posture."
    },
    {
      icon: "Brain",
      title: "AI & Machine Learning",
      description: "Intelligent solutions using machine learning, natural language processing, and computer vision. Transform your data into actionable insights and automated decisions."
    }
  ]
};

export const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" }, 
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];
