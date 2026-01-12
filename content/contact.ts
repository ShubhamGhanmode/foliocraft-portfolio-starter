// Contact content - FORK-SAFE: Replace with your contact information

import { ContactContent } from '@/modules/contact/contact.types';

export const contactContent: ContactContent = {
    heading: 'Get in Touch',
    subheading: "Let's work together",
    description:
        "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!",
    methods: [
        {
            type: 'email',
            label: 'Email',
            value: 'hello@johndoe.dev',
            href: 'mailto:hello@johndoe.dev',
        },
        {
            type: 'location',
            label: 'Location',
            value: 'San Francisco, CA',
        },
        {
            type: 'social',
            label: 'LinkedIn',
            value: 'linkedin.com/in/johndoe',
            href: 'https://linkedin.com/in/johndoe',
        },
    ],
    form: {
        enabled: false, // Enable when you have a form endpoint
    },
};
