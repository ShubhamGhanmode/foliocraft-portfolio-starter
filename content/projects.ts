// Projects content - FORK-SAFE: Replace with your projects

import { ProjectsContent } from '@/modules/projects/projects.types';

export const projectsContent: ProjectsContent = {
    heading: 'Featured Projects',
    subheading: "Some of the things I've built",
    maxDisplayedOnHome: 3, // Show only 3 projects on homepage
    items: [
        {
            title: 'E-Commerce Platform',
            description:
                'A full-featured e-commerce platform with cart, checkout, and payment integration.',
            technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
            links: {
                live: 'https://example.com',
                github: 'https://github.com/johndoe/ecommerce',
            },
            image: '/images/projects/ecommerce.jpg',
            featured: true,
        },
        {
            title: 'Task Management App',
            description:
                'A collaborative task management application with real-time updates.',
            technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
            links: {
                live: 'https://example.com',
                github: 'https://github.com/johndoe/taskapp',
            },
            image: '/images/projects/taskapp.jpg',
            featured: true,
        },
        {
            title: 'Weather Dashboard',
            description:
                'A beautiful weather dashboard with location-based forecasts.',
            technologies: ['React', 'OpenWeather API', 'Chart.js'],
            links: {
                github: 'https://github.com/johndoe/weather',
            },
            image: '/images/projects/weather.jpg',
            featured: false,
        },
        {
            title: 'AI Chat Assistant',
            description:
                'An intelligent chatbot powered by GPT-4 with conversation memory and context awareness.',
            technologies: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Prisma'],
            links: {
                live: 'https://example.com',
                github: 'https://github.com/johndoe/ai-chat',
            },
            featured: true,
        },
        {
            title: 'Fitness Tracker',
            description:
                'Mobile-first fitness tracking app with workout plans and progress visualization.',
            technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
            links: {
                github: 'https://github.com/johndoe/fitness',
            },
            featured: false,
        },
        {
            title: 'Blog CMS',
            description:
                'A headless CMS for managing blog content with markdown support and SEO optimization.',
            technologies: ['Next.js', 'Contentful', 'TypeScript', 'Vercel'],
            links: {
                live: 'https://example.com',
                github: 'https://github.com/johndoe/blog-cms',
            },
            featured: false,
        },
        {
            title: 'Portfolio Generator',
            description:
                'An open-source tool to generate beautiful portfolios from a configuration file.',
            technologies: ['Vue.js', 'Vite', 'Tailwind CSS'],
            links: {
                github: 'https://github.com/johndoe/portfolio-gen',
            },
            featured: false,
        },
        {
            title: 'Real-time Analytics Dashboard',
            description:
                'Enterprise analytics platform with live data visualization and custom reports.',
            technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis'],
            links: {
                live: 'https://example.com',
            },
            featured: true,
        },
    ],
};
