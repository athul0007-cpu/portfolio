import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'athul0007krishna@gmail.com',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Athul, I am reaching out to you because...',
    githubProfile: 'https://github.com/athul0007-cpu',
    linkedinProfile: 'https://www.linkedin.com/in/athul-krishna-109830410',
    instagramProfile: 'https://www.instagram.com/athul._',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: GENERAL_INFO.githubProfile },
    { name: 'linkedin', url: GENERAL_INFO.linkedinProfile },
    { name: 'instagram', url: GENERAL_INFO.instagramProfile },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
    ],
    backend: [
        {
            name: 'Python',
            icon: '/logo/python.svg',
        },
        {
            name: 'Django',
            icon: '/logo/django.svg',
        },
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Supabase',
            icon: '/logo/supabase.svg',
        },
        {
            name: 'Firebase',
            icon: '/logo/firebase.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'Vercel',
            icon: '/logo/vercel.svg',
        },
        {
            name: 'Render',
            icon: '/logo/render.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Heat-wheels',
        slug: 'heat-wheels',
        techStack: ['JavaScript', 'HTML5', 'CSS3', 'Vercel'],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
        ],
        sourceCode: 'https://github.com/athul0007-cpu/Heat-wheels',
        liveUrl: 'https://heat-wheels-u88t.vercel.app/',
        year: 2025,
        description:
            'A premium, responsive online Hot Wheels toy vehicle model selling platform deployed on Vercel. It helps users showcase, trade, and custom-order collectible model cars through a polished browser experience.',
        role: `I designed and developed the interface, focusing on responsive layouts, clear product presentation, and fast deployment through Vercel.`,
    },
    {
        title: 'sreyou',
        slug: 'sreyou',
        techStack: ['JavaScript', 'HTML5', 'CSS3', 'Vercel'],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        sourceCode: 'https://github.com/athul0007-cpu/sreyou',
        liveUrl: 'https://sreyou.vercel.app/',
        year: 2025,
        description:
            "An elegant, interactive JavaScript web application custom-tailored to deliver a true 'Service for you' experience with clean rendering and smooth presentation.",
        role: `I built the application structure, styling, and deployment flow, keeping the interface lightweight and easy to navigate.`,
    },
    {
        title: 'Budgety',
        slug: 'budgety',
        techStack: ['JavaScript', 'HTML5', 'CSS3', 'Vercel'],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        sourceCode: 'https://github.com/athul0007-cpu/Budgety',
        liveUrl: 'https://budgety-dun-nine.vercel.app',
        year: 2025,
        description:
            'A personal treasury controller built to support individual financial growth, weekly habits, dynamic monthly allocations, and clear budget metrics.',
        role: `I created the budget interaction flow and visual structure, then deployed the project so it can be used directly from the web.`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Computer Engineering Student',
        company: 'GPTC Chelakkara',
        duration: '3rd Year',
    },
    {
        title: 'Developer / Member',
        company: 'Dcoode',
        duration: 'Ongoing Research Page',
    },
    {
        title: 'Hackathon Winner',
        company: 'Dcoode',
        duration: '2025',
    },
];
