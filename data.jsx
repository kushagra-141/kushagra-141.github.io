// Portfolio content data — sourced VERBATIM from resume_cf_0225.pdf
// No invented details. If the resume doesn't say it, it isn't here.
const portfolioData = {
  name: "Kushagra Gupta",
  // Roles taken directly from resume objective statement
  roles: ["Data Scientist", "Machine Learning Engineer", "Software Developer"],
  email: "kg2347@rit.edu",
  personalEmail: "kushagra141@gmail.com",
  phone: "(770) 441-2337",
  github: "https://github.com/kushagra-141",
  linkedin: "https://www.linkedin.com/in/kushagra141/",
  location: "Rochester, New York",
  resume: "Resume.html",
  resumePdf: "uploads/resume_cf_0225.pdf",

  // About — written for portfolio voice, but every fact (programs, internships count, focus areas) traces back to the resume.
  about: {
    blurb:
      "I'm a CS master's student at RIT working at the intersection of machine learning, computer vision, and large-scale data engineering. Across four internships I've shipped Airflow data pipelines, Tableau dashboards, Python automation tooling, and risk-assessment workflows — and on the research side, co-authored an IEEE Xplore paper on detecting Parkinson's disease from voice recordings.",
    stats: [
      { value: 3.73, suffix: "/4.0", label: "Graduate GPA", decimals: 2 },
      { value: 1, suffix: "", label: "IEEE Publication", decimals: 0 },
      { value: 4, suffix: "", label: "Internships", decimals: 0 },
      { value: 5, suffix: "", label: "Projects", decimals: 0 },
    ],
  },

  // Skills — exact categories and items from the SKILLS section of the resume
  skills: {
    "Programming & Tools": [
      "Python", "SQL", "Java", "C", "Rust",
      "MongoDB", "Django", "FastAPI", "React", "Tableau",
      "PySpark", "Apache Airflow", "Databricks",
    ],
    "AI/ML Frameworks": [
      "PyTorch", "TensorFlow", "Keras", "Hugging Face Transformers",
    ],
    "CV & ML Stack": [
      "OpenCV", "Open3D", "scikit-learn", "XGBoost",
      "NumPy", "pandas", "matplotlib",
    ],
  },

  // Experience — bullets are the exact bullets from the resume
  experience: [
    {
      role: "Data Analyst Intern",
      company: "Vivriti Capital Limited",
      period: "Jan 2024 — Jul 2024",
      location: "Bangalore, India",
      bullets: [
        "Automated data ingestion and transformation pipelines using Python and Apache Airflow to significantly reduce manual processing time by 50%.",
        "Designed interactive Tableau dashboards for disbursement, loanbook, and repayment schedules, improving decision-making efficiency.",
      ],
    },
    {
      role: "Computer Science Teaching Assistant",
      company: "Manipal Institute of Technology",
      period: "Sep 2023 — Nov 2023",
      location: "Manipal, India",
      bullets: [
        "Mentored 40+ undergraduates in programming labs, increasing project success rates by 25% through structured guidance and code reviews.",
        "Assisted in debugging and grading, reinforcing coding best practices, and algorithmic thinking.",
      ],
    },
    {
      role: "Python Development Intern",
      company: "CodeClause",
      period: "Oct 2023",
      location: "Remote",
      bullets: [
        "Developed a suite of Python applications, including a voice assistant (SpeechRecognition), a Pygame Flappy Bird clone, a Tkinter-based URL shortener (TinyURL API), and a Tkinter alarm clock.",
      ],
    },
    {
      role: "Cyber & IT Risk Intern",
      company: "Grant Thornton Bharat LLP",
      period: "Jun 2023 — Jul 2023",
      location: "Gurugram, India",
      bullets: [
        "Supported SOC 1 and SOC 2 audit engagements by conducting risk assessments across 15+ client vendors, ensuring compliance with regulatory frameworks for third-party vendors.",
      ],
    },
  ],

  // Projects — title, blurb (=detail) and tech list are exactly what the resume bullets say.
  // No invented years, no invented architecture details, no invented tags.
  projects: [
    {
      title: "CLIP & DINOv2 on Tiny ImageNet",
      blurb:
        "Fine-tuned and benchmarked CLIP and DINOv2 vision models on the Tiny ImageNet dataset, achieving higher accuracy in pairwise image similarity tasks through hyperparameter tuning and optimization.",
      tech: ["Python", "transformers", "torch"],
    },
    {
      title: "Mean-Shift Clustering for Adaptive Image Segmentation",
      blurb:
        "Mean-shift clustering for adaptive image segmentation, dynamically estimating optimal bandwidth per image, improving segmentation accuracy by 18% compared to fixed-parameter methods.",
      tech: ["Python", "scikit-learn"],
    },
    {
      title: "Movie Recommendation System",
      blurb:
        "Movie recommendation system with a content-filtering algorithm trained on user ratings, deployed as a full-stack web application.",
      tech: ["Django", "HTML", "CSS", "Bootstrap", "jQuery"],
    },
    {
      title: "CUDA-Based Image Processing Tool",
      blurb:
        "CUDA-based image processing tool supporting edge detection, blurring, and vertical flipping, reducing processing time compared to CPU-based implementations.",
      tech: ["CUDA", "C"],
    },
    {
      title: "Device Identification Tool",
      blurb:
        "Device identification tool leveraging network traffic patterns to classify devices (mobile, desktop, tablet) with 92% accuracy, integrated with a GUI for visualization.",
      tech: ["Python", "Tkinter", "Wireshark"],
    },
  ],

  // Publication — exactly as written in the RESEARCH AND PUBLICATION section
  publication: {
    venue: "IEEE Xplore",
    year: "2024",
    title:
      "Applying Deep Learning for the Examination of Voice Disorders in the Identification of Parkinson's Disease",
    summary:
      "Published in IEEE Xplore (2024). Applied SVM, Random Forest, KNN, and XGBoost classifiers for prediction tasks.",
    classifiers: ["SVM", "Random Forest", "KNN", "XGBoost"],
    link: "https://ieeexplore.ieee.org/document/10489145",
  },

  // Education — exactly as listed
  education: [
    {
      school: "Rochester Institute of Technology",
      degree: "M.S. Computer Science",
      period: "2026",
      location: "USA",
      gpa: 3.73,
      gpaMax: 4.0,
      gpaLabel: "Current CGPA",
    },
    {
      school: "Manipal Institute of Technology",
      degree: "B.Tech. Computer Science and Engineering",
      period: "2024",
      location: "India",
      gpa: 8.10,
      gpaMax: 10.0,
      gpaLabel: "CGPA",
    },
  ],
};

window.portfolioData = portfolioData;
