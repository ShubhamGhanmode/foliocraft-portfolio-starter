// About content - FORK-SAFE: Replace with your information

import { AboutContent } from '@/modules/about/about.types';

export const aboutContent: AboutContent = {
    heading: 'About Me',
    subheading: 'A little bit about who I am',
    description: [
        "I'm a full-stack developer with 5+ years of experience building web applications. I specialize in React, Next.js, and Node.js, with a passion for creating clean, efficient, and scalable code.",
        'When I\'m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing.',
        "I believe in continuous learning and always strive to stay up-to-date with the latest industry trends and best practices.",
    ],
    highlights: [
        { label: 'Years Experience', value: '5+' },
        { label: 'Projects Completed', value: '50+' },
        { label: 'Happy Clients', value: '30+' },
    ],
    image: '/images/about.jpg',
};
