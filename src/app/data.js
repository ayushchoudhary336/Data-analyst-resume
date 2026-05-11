export const ROLES = [
  "Data Analyst",
  "Data Engineer",
  "Business Analyst",
  "Business Development Executive",
  "Data Scientist"
];

export const SKILLS = {
  dataAnalysis: ["Data Visualization", "Statistical Analysis", "Upsampling", "Downsampling", "A/B Testing"],
  languagesAndTech: ["SQL", "Python", "Java", "R", "Excel", "Tableau", "Power BI"],
  webDev: ["Next.js", "React", "Vite", "Tailwind CSS", "HTML5", "CSS3"]
};

export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Sales Analysis",
    description: "Analyzed an e-commerce dataset to identify sales trends and key growth metrics using Python and Pandas.",
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    githubLink: "https://github.com"
  },
  {
    id: 2,
    title: "Customer Churn Prediction",
    description: "Built a machine learning model to predict customer churn, allowing proactive retention strategies.",
    techStack: ["Python", "Scikit-Learn", "SQL", "Tableau"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    githubLink: "https://github.com"
  },
  {
    id: 3,
    title: "Real-time Dashboarding",
    description: "Developed a real-time analytics dashboard tracking user engagement metrics with WebSockets.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Chart.js"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    githubLink: "https://github.com"
  },
  {
    id: 4,
    title: "Data Pipeline Automation",
    description: "Automated the extraction, transformation, and loading of sales data using custom ETL scripts.",
    techStack: ["Python", "Airflow", "PostgreSQL", "AWS S3"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    githubLink: "https://github.com"
  }
];

export const CERTIFICATIONS = [
  {
    id: 1,
    name: "Google Data Analytics Professional Certificate",
    organization: "Coursera",
    date: "Aug 2025",
    image: "/google-logo.png",
    link: "https://coursera.org"
  },
  {
    id: 2,
    name: "AWS Certified Data Engineer - Associate",
    organization: "Amazon Web Services",
    date: "Nov 2025",
    image: "/aws-logo.png",
    link: "https://aws.amazon.com"
  },
  {
    id: 3,
    name: "Python for Data Science",
    organization: "IBM",
    date: "Jan 2026",
    image: "/ibm-logo.png",
    link: "https://ibm.com"
  }
];
