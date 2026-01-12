// Education content - FORK-SAFE: Replace with your education

import { EducationContent } from '@/modules/education/education.types';

export const educationContent: EducationContent = {
    heading: 'Education',
    subheading: 'My academic background',
    items: [
        {
            institution: 'University of Technology',
            degree: 'Bachelor of Science',
            field: 'Computer Science',
            period: {
                start: '2015',
                end: '2019',
            },
            description: [
                'Graduated with Honors',
                'Specialized in Software Engineering',
                'Dean\'s List for 6 semesters',
            ],
        },
        {
            institution: 'Online Learning Platform',
            degree: 'Professional Certificate',
            field: 'Full-Stack Web Development',
            period: {
                start: '2020',
                end: '2020',
            },
            description: [
                'Intensive bootcamp covering modern web technologies',
                'Built 10+ projects from scratch',
            ],
        },
    ],
};
