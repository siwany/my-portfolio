import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Siwan",
  lastName: "Yang",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "CS Student @ Georgia Tech",
  avatar: "/images/profile.JPG",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Korean"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/siwany",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/siwan-yang-705742265/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:syang00129@gmail.com",
  },
  {
    name: "Resume",
    icon: "document",
    link: "/files/Resume.pdf",
  }
];

const home = {
  label: "Home",
  title: `${person.name}`,
  description: `Welcome to ${person.name}'s website!`,
  headline: <>Siwan Yang</>,
  subline: (
    <>
      A 4th year CS student at <b>Georgia Tech</b> passionate about
      <br /> LLMs, NLP, and machine learning to solve real-world problems.
    </>
  ),
};

const about = {
  label: "About",
  title: "About",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      Siwan is a CS student at Georgia Tech whose passions span AI, LLMs, and machine learning. 
      She enjoys building chatbots and developing user-centered technologies that apply language models to solve real-world problems. 
      Her interests also include research in computational linguistics and the intersection of language and technology.
      </>
    ),
  },
  
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "IBM Research - Open Liberty",
        timeframe: "May 2024 - Aug 2024",
        role: "Software Engineering Intern",
        achievements: [
          <>
            Designed and developed a Java-based web application integrating JMS and RESTful APIs to enable asynchronous communication between client and microservices, 
            resulting in improved message processing efficiency and enhanced system reliability.
          </>,
          <>
            Developed and authored a 3,000+ word technical guide on setting up Jakarta Messaging with Open Liberty Messaging Server and
            IBM MQ, now published as an official Open Liberty guide.
          </>,
          <>
            Optimized automated testing for Open Liberty guides by enhancing YAML-based CI/CD workflows, 
            reducing failures by 90% and improving test file efficiency and coverage across all related documentation.
          </>
        ],
        images: [
          {
            src: "/images/work/ol-logo.jpg",
            alt: "JMS Guide",
            url: "https://openliberty.io/guides/jms-intro.html",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/jms-guide.png",
            alt: "JMS Guide PDF Document",
            url: "/files/final_open_liberty.pdf",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Georgia Institute of Technology",
        degree: "Bachelor of Science - BS",
        major: "Computer Science",
        timeframe: "Jan 2024 - May 2026",
        descriptions: [
        <>Threads: Info-internetwork/Intelligence</>
        ]
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Languages",
        tags: ["Java", "Python", "C", "SQL", "Javascript", "R"],
      },
      {
        title: "Frameworks & Libraries",
        tags: ["React", "Next.js", "TailwindCSS", "RestfulAPIs"],
      },
      {
        title: "AI & ML",
        tags: ["LLM Integration", "RAG", "VectorDB", "Embeddings"],
      },
      {
        title: "Databases & Cloud",
        tags: ["Firebase", "MySQL", "Supabase", "MongoDB"],
      },
      {
        title: "Tools",
        tags: ["Docker", "Git", "Android Stuio"],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Recent posts",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "Projects",
  description: `Projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, home, about, blog, work };
