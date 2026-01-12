// Experience content - FORK-SAFE: Replace with your work experience

import { ExperienceContent } from '@/modules/experience/experience.types';

export const experienceContent: ExperienceContent = {
    heading: 'Work Experience',
    subheading: 'My professional journey',
    items: [
        {
            company: 'Tech Company Inc.',
            role: 'Senior Full-Stack Developer',
            period: {
                start: 'Jan 2022',
                end: 'Present',
            },
            location: 'San Francisco, CA',
            description: [
                'Led development of a customer-facing dashboard serving 100k+ users',
                'Architected microservices infrastructure reducing deployment time by 60%',
                'Mentored junior developers and conducted code reviews',
            ],
        },
        {
            company: 'Startup Labs',
            role: 'Full-Stack Developer',
            period: {
                start: 'Jun 2020',
                end: 'Dec 2021',
            },
            location: 'Remote',
            description: [
                'Built and maintained React applications with TypeScript',
                'Implemented CI/CD pipelines using GitHub Actions',
                'Collaborated with design team to improve UX',
            ],
        },
        {
            company: 'Digital Agency',
            role: 'Frontend Developer',
            period: {
                start: 'Jan 2019',
                end: 'May 2020',
            },
            location: 'New York, NY',
            description: [
                'Developed responsive websites for various clients',
                'Optimized performance achieving 90+ Lighthouse scores',
                'Introduced component-based architecture using React',
            ],
        },
    ],
};
