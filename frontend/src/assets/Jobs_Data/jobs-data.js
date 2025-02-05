export const jobData = [
  {
    id: 1,
    title: "Senior Product Designer",
    company: "Acme Corp",
    logo: "https://jobbox-nextjs-v3.vercel.app/_next/static/media/right-job-head.20bf0a8a.svg",
    timeAgo: "2 days ago",
    location: "123 Main St, Anytown USA",
    phone: "(555) 555-1234",
    email: "careers@acmecorp.com",
    salary: "80,000 - 100,000",
    experience: "5+ years",
    deadline: "06/30/2023",
    updated: "06/15/2023",
    jobLevel: "Senior",
    industry: "Technology",
    tools: ["Figma", "Adobe Creative Cloud"],
    jobType: "Full-time",
    description: "Acme Corp is seeking an experienced Senior Product Designer to join our growing design team. In this role, you will be responsible for designing intuitive and user-friendly experiences for our flagship software product.",
    requirements: [
      "Bachelor's degree in Interaction Design, Visual Design, or a related field",
      "5+ years of product design experience, preferably in the software industry",
      "Strong proficiency in design tools such as Figma, Sketch, or Adobe Creative Cloud",
      "Excellent problem-solving and creative thinking skills",
      "Ability to translate business requirements into user-centric design solutions"
    ],
    preferredExperience: [
      "Experience designing for enterprise software applications",
      "Familiarity with agile development methodologies",
      "Understanding of user research and usability testing practices"
    ],
    questions: [
      {
        type: "text",
        label: "Years of Design Experience",
        fieldName: "yearsExperience"
      },
      {
        type: "textarea",
        label: "Why are you interested in this role?",
        fieldName: "interestStatement"
      },
      {
        type: "checkbox",
        label: "I am able to relocate to the job location",
        fieldName: "canRelocate"
      },
      {
        type: "radio",
        label: "Availability",
        fieldName: "availability",
        options: [
          { label: "Available to start immediately", value: "immediate" },
          { label: "2 weeks notice", value: "2-weeks" },
          { label: "1 month notice", value: "1-month" },
          { label: "Other", value: "other" }
        ]
      },
      {
        type: "text",
        label: "Portfolio Website",
        fieldName: "portfolioUrl"
      }
    ]
  },
  {
    id: 2,
    title: "Junior Frontend Developer",
    company: "CodeFactory",
    logo: "https://jobbox-nextjs-v3.vercel.app/_next/static/media/right-job-head.20bf0a8a.svg",
    timeAgo: "30 mins ago",
    location: "123 Elm Street, Los Angeles, CA, USA",
    phone: "(456) 789-1234",
    email: "hr@codefactory.com",
    salary: "$600 - $800",
    experience: "0 - 1 year",
    deadline: "10/15/2022",
    updated: "10/12/2022",
    jobLevel: "Entry Level",
    industry: "IT Services",
    tools: ["HTML", "CSS", "JavaScript"],
    jobType: "Contract",
    description: "Join our dynamic frontend development team where creativity meets technical expertise. We are looking for a passionate developer to contribute to our UI/UX designs.",
    requirements: [
      "Strong understanding of HTML, CSS, and JavaScript",
      "Basic knowledge of React or Angular",
      "Good problem-solving skills",
      "Willingness to learn and adapt",
      "Effective communication and collaboration"
    ],
    preferredExperience: [
      "Experience with responsive design",
      "Basic understanding of RESTful APIs",
      "Knowledge of version control systems like Git"
    ],
    productDesigner: {
      knowledge: "Basic knowledge of frontend technologies and their integration.",
      research: "Participate in UI/UX research to enhance user satisfaction.",
      deliverables: "Assist in creating wireframes and prototypes for frontend components.",
      communication: "Effectively communicate project requirements and updates with the team."
    }
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "DataLabs Inc.",
    timeAgo: "2 hours ago",
    logo: "https://jobbox-nextjs-v3.vercel.app/_next/static/media/right-job-head.20bf0a8a.svg",
    location: "456 Maple Drive, New York, NY, USA",
    phone: "(789) 123-4567",
    email: "jobs@datalabs.com",
    salary: "$1000 - $1500",
    experience: "3 - 5 years",
    deadline: "10/20/2022",
    updated: "10/19/2022",
    jobLevel: "Mid-Level",
    industry: "Data Analysis",
    tools: ["Python", "SQL", "Tableau"],
    jobType: "Full-Time",
    description: "We are seeking an experienced Data Scientist to analyze large data sets, derive actionable insights, and improve our decision-making processes.",
    requirements: [
      "Proficient in Python, R, or SQL",
      "Strong analytical and problem-solving skills",
      "Experience with data visualization tools like Tableau or Power BI",
      "Knowledge of machine learning algorithms",
      "Ability to process and clean large datasets"
    ],
    preferredExperience: [
      "Experience in predictive modeling",
      "Hands-on experience with cloud platforms like AWS or Azure",
      "Knowledge of big data tools like Hadoop or Spark"
    ],
    productDesigner: {
      knowledge: "Expertise in data science methodologies and tools.",
      research: "Perform advanced analytics to support business strategies.",
      deliverables: "Develop dashboards and predictive models for real-time analytics.",
      communication: "Present data findings to stakeholders in a clear and concise manner."
    }
  },
  {
    id: 4,
    company: "Tesla",
    logo: "https://jobbox-nextjs-v3.vercel.app/_next/static/media/right-job-head.20bf0a8a.svg",
    title: "Mechanical Engineer",
    location: "Austin, US",
    type: "Fulltime",
    timeAgo: "3 hours ago",
  description: "Join our dynamic frontend development team where creativity meets technical expertise. We are looking for a passionate developer to contribute to our UI/UX designs.",
    salary: "45K - 55K",
    industry: "Automotive",
    tools: ["SolidWorks", "AutoCAD"],
    featured: true
  },
  {
    id: 5,
    company: "Amazon",
    logo: "https://jobbox-nextjs-v3.vercel.app/_next/static/media/right-job-head.20bf0a8a.svg",
    title: "Cloud Solutions Architect",
    location: "Seattle, US",
    type: "Contract",
    timeAgo: "5 hours ago",
  description: "Join our dynamic frontend development team where creativity meets technical expertise. We are looking for a passionate developer to contribute to our UI/UX designs.",
    salary: "50K - 60K",
    industry: "Technology",
    tools: ["AWS", "Terraform"],
    featured: true
  },
  {
    id: 6,
    company: "JP Morgan Chase",
    logo: "https://jobbox-nextjs-v3.vercel.app/_next/static/media/right-job-head.20bf0a8a.svg",
    title: "Financial Advisor",
    location: "Chicago, US",
    type: "Fulltime",
    timeAgo: "6 hours ago",
  description: "Join our dynamic frontend development team where creativity meets technical expertise. We are looking for a passionate developer to contribute to our UI/UX designs.",
    salary: "30K - 50K",
    industry: "Finance",
    tools: ["CRM", "PowerPoint"],
    featured: false
  },
  {
    id: 7,
    company: "Google",
    logo: "https://jobbox-nextjs-v3.vercel.app/_next/static/media/right-job-head.20bf0a8a.svg",
    title: "Machine Learning Engineer",
    location: "Mountain View, US",
    type: "Fulltime",
    timeAgo: "8 hours ago",
  description: "Join our dynamic frontend development team where creativity meets technical expertise. We are looking for a passionate developer to contribute to our UI/UX designs.",
    salary: "50K - 60K",
    industry: "Software",
    tools: ["TensorFlow", "PyTorch"],
    featured: true
  },
  {
    id: 8,
    company: "Facebook",
    logo: "https://jobbox-nextjs-v3.vercel.app/_next/static/media/right-job-head.20bf0a8a.svg",
    title: "Social Media Manager",
    location: "California, US",
    type: "Part-time",
    timeAgo: "9 hours ago",
  description: "Join our dynamic frontend development team where creativity meets technical expertise. We are looking for a passionate developer to contribute to our UI/UX designs.",
    salary: "20K - 30K",
    industry: "Marketing",
    tools: ["Hootsuite", "Canva"],
    featured: false
  },
  {
    id: 9,
    company: "Microsoft",
    logo: "https://jobbox-nextjs-v3.vercel.app/_next/static/media/right-job-head.20bf0a8a.svg",
    title: "Azure Specialist",
    location: "Redmond, US",
    type: "Contract",
    timeAgo: "10 hours ago",
  description: "Join our dynamic frontend development team where creativity meets technical expertise. We are looking for a passionate developer to contribute to our UI/UX designs.",
    salary: "40K - 50K",
    industry: "Software",
    tools: ["Azure", "PowerShell"],
    featured: true
  },
  {
    id: 10,
    company: "Stripe",
    logo: "https://jobbox-nextjs-v3.vercel.app/_next/static/media/right-job-head.20bf0a8a.svg",
    title: "Payment Integration Engineer",
    location: "Dublin, Ireland",
    type: "Fulltime",
    timeAgo: "12 hours ago",
  description: "Join our dynamic frontend development team where creativity meets technical expertise. We are looking for a passionate developer to contribute to our UI/UX designs.",
    salary: "50K - 60K",
    industry: "Finance",
    tools: ["Ruby", "JavaScript"],
    featured: false
  },
  {
    id: 11,
    company: "Netflix",
    logo: "https://jobbox-nextjs-v3.vercel.app/_next/static/media/right-job-head.20bf0a8a.svg",
    title: "Frontend Developer",
    location: "Los Angeles, US",
    type: "Fulltime",
    timeAgo: "14 hours ago",
  description: "Join our dynamic frontend development team where creativity meets technical expertise. We are looking for a passionate developer to contribute to our UI/UX designs.",
    salary: "35K - 50K",
    industry: "Entertainment",
    tools: ["React", "CSS"],
    featured: true
  },
  {
    id: 12,
    company: "Intel",
    logo: "https://jobbox-nextjs-v3.vercel.app/_next/static/media/right-job-head.20bf0a8a.svg",
    title: "Chip Design Engineer",
    location: "Santa Clara, US",
    type: "Fulltime",
    timeAgo: "15 hours ago",
  description: "Join our dynamic frontend development team where creativity meets technical expertise. We are looking for a passionate developer to contribute to our UI/UX designs.",
    salary: "50K - 60K",
    industry: "Hardware",
    tools: ["Verilog", "SystemVerilog"],
    featured: false
  },
  {
    id: 13,
    company: "Oracle",
    logo: "https://jobbox-nextjs-v3.vercel.app/_next/static/media/right-job-head.20bf0a8a.svg",
    title: "Database Administrator",
    location: "Remote",
    type: "Fulltime",
    timeAgo: "16 hours ago",
  description: "Join our dynamic frontend development team where creativity meets technical expertise. We are looking for a passionate developer to contribute to our UI/UX designs.",
    salary: "40K - 50K",
    industry: "Software",
    tools: ["SQL", "Oracle DB"],
    featured: true
  },
  {
    id: 14,
    company: "Spotify",
    logo: "https://jobbox-nextjs-v3.vercel.app/_next/static/media/right-job-head.20bf0a8a.svg",
    title: "Backend Developer",
    location: "Stockholm, Sweden",
    type: "Part-time",
    timeAgo: "18 hours ago",
  description: "Join our dynamic frontend development team where creativity meets technical expertise. We are looking for a passionate developer to contribute to our UI/UX designs.",
    salary: "30K - 45K",
    industry: "Entertainment",
    tools: ["Node.js", "Java"],
    featured: false
  },
  {
    id: 15,
    company: "Slack",
    logo: "https://jobbox-nextjs-v3.vercel.app/_next/static/media/right-job-head.20bf0a8a.svg",
    title: "Customer Support Specialist",
    location: "Remote",
    type: "Part-time",
    timeAgo: "20 hours ago",
  description: "Join our dynamic frontend development team where creativity meets technical expertise. We are looking for a passionate developer to contribute to our UI/UX designs.",
    salary: "20K - 30K",
    industry: "Software",
    tools: ["Zendesk", "Slack"],
    featured: false
  }
];



export const industryFilters = [
  { name: "All", count: 180 },
  { name: "Software", count: 12 },
  { name: "Finance", count: 23 },
  { name: "Recruiting", count: 43 },
  { name: "Management", count: 65 },
  { name: "Advertising", count: 76 }
];

export const salaryRanges = [
  { name: "All", count: 145 },
  { name: "$0k - $20k", count: 56 },
  { name: "$20k - $40k", count: 37 },
  { name: "$40k - $60k", count: 75 }
];