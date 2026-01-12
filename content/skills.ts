// Skills content - FORK-SAFE: Replace with your skills

import { SkillsContent } from '@/modules/skills/skills.types';

export const skillsContent: SkillsContent = {
    heading: 'Skills & Technologies',
    subheading: 'Technologies I work with',
    categories: [
        {
            name: 'Frontend',
            skills: [
                { name: 'React', level: 95 },
                { name: 'Next.js', level: 90 },
                { name: 'TypeScript', level: 90 },
                { name: 'Tailwind CSS', level: 85 },
                { name: 'HTML/CSS', level: 95 },
            ],
        },
        {
            name: 'Backend',
            skills: [
                { name: 'Node.js', level: 85 },
                { name: 'Express', level: 80 },
                { name: 'PostgreSQL', level: 75 },
                { name: 'MongoDB', level: 70 },
                { name: 'REST APIs', level: 90 },
            ],
        },
        {
            name: 'Tools & Others',
            skills: [
                { name: 'Git', level: 90 },
                { name: 'Docker', level: 70 },
                { name: 'AWS', level: 65 },
                { name: 'Figma', level: 75 },
                { name: 'Jest', level: 80 },
            ],
        },
    ],
};
