import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import myImg from "../assites/portfolio-image.png";

export const DATA = {
  name: "Faizan Ansari",
  initials: "FA",
  location: "Karachi, Pakistan",
  locationLink: "https://www.google.com/maps/place/karachi",
  description:
    "Software Engineer in MERN Stack turned Entrepreneur. I love building things and helping people. Very active on LinkedIn.",
  summary:
    "At the end of 2022, I began studying Web & Mobile Development at SMIT and started university at Federal Urdu University. Initially, I found JavaScript challenging, so I retook the course with a new teacher and completed MERN Stack training at [Expertizo University](https://www.expertizouniversity.pk/). Now, I'm pursuing my goal of Mobile Development while interning as a MERN Stack Developer.",
  avatarUrl: "https://avatars.githubusercontent.com/u/100279140?v=4",
  skills: [
    "CSS 3",
    "BootStap",
    "Tailwind CSS",
    "ShadCN",
    "Material UI",
    "JavaScript",
    "Typescript",
    "React.js",
    "Redux Toolkit",
    "Next.js",
    "React-Native CLI",
    "Node.js",
    "Rest API",
    "Express.js",
    "Firebase",
    "MongoDB",
    "AWS",
    "NoSQL",
    "MySQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Faizanansari222",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/faizanansari07/",
        icon: Icons.linkedin,

        navbar: true,
      },
   
      email: {
        name: "Send Email",
        url: "faizanrazaansari07@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Coderatory",
      href: "https://coderatory.com",
      badges: [],
      location: "Remote",
      title: "Build ERP Softwares as a MERN Stack Develper",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C4D0BAQG3G8GlNZvByw/company-logo_200_200/company-logo_200_200/0/1630453717890/coderatory_logo?e=2147483647&v=beta&t=cejXa_oCTW5cGvmzfX8SL6HOnEyow5PtIzG7awswfaY",
      start: "Sept 2024",
      end: "Continue",
      description:
        "Developing advanced features for ERP software while working as a MERN Stack Developer, focused on creating efficient, scalable solutions for enterprise needs",
    },
  
  ],
  education: [
    {
      school: "Expertizo University",
      href: "https://expertizouniversity.pk",
      degree: "MERN Stack Development",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEino0iKTWRS-SY1VMco--9JhJyRXkW2aSdg&s",
      start: "2023",
      end: "2024",
    },

    {
      school: "Saylani Mass IT Traning Center",
      href: "#",
      degree: "Mobile Application Development",
      logoUrl: "https://student.saylaniwelfare.com/assets/logo-OpazD70S.png",
      start: "2024",
      end: "Continue",
    },
    {
      school: "Federal Urdu University",
      href: "https://fuuast.edu.pk/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUY6m-wLQ6DGGKG7CBkWAlJMd0I7apPBgxvQ&s",
      start: "2022",
      end: "Continue",
    },
  ],
  projects: [
    {
      title: "Scrolllink",
      href: "",
      dates: "Nov 2024 - Present",
      active: true,
      description:
        "with the relize of the hackathon, I built a web application for a social media platform called 'Scrolllink,' utilizing the MERN stack to implement both frontend and backend features seamlessly.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Firebase",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Faizanansari222/Hackathon-Expertizo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "My Portfolio",
      href: "https://faizan-pr.netlify.app/",
      dates: "June 2024 - Aug 2024",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://faizan-pr.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Faizanansari222/Personal-Portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "OLX Clone",
      href: "",
      dates: "Febuary 2024 - March 2024",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "MongoDB",
        "Express.js",
        "Mongoose",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
      // https://cdn.llm.report/openai-demo.mp4
    },
    {
      title: "Bridle Dashboard",
      href: "https://bridle-1vsd.vercel.app/dashboard",
      dates: "Dec 2024 - Dec 2024",
      active: true,
      description:
        "Developed a Portal for the horse's events managing industry .",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://bridle-1vsd.vercel.app/dashboard",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Faizanansari222/bridle_",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
      // https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4
    },
  ],
  hackathons: [
    {
      title: "Mobile Application Hackathon CLI",
      dates: "August 23rd - 24th, 2024",
      location: "Karachi, Pakistan",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      icon: "public",
      image: "https://student.saylaniwelfare.com/assets/logo-OpazD70S.png",
      links: [],
    },

    {
      title: "MERN Stack Hackathon from Expertizo University",
      dates: "November 9th - 16th, 2024",
      location: "Karachi, Pakistan",
      description:
        "Developed a fully functional web application for a social media platform called 'Scrolllink,' utilizing the MERN stack to implement both frontend and backend features seamlessly.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEino0iKTWRS-SY1VMco--9JhJyRXkW2aSdg&s",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "SMIT Hack Modren Web & App",
      dates: "November 23rd - 25th, 2023",
      location: "Karachi, Pakistan",
      description:
        "Developed a Web Application for the Hoaspital landing page which delivered an interactive experience to patients.",
      image: "https://student.saylaniwelfare.com/assets/logo-OpazD70S.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },

   
  ],
} as const;
