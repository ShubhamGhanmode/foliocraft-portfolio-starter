// Site configuration - FORK-SAFE: Modify metadata and links (profile values live in content/profile.ts)

import { SiteConfig } from '@/types/site';
import { profileContent } from '@/content/profile';

export const siteConfig: SiteConfig = {
    name: profileContent.name,
    description: profileContent.summary,
    url: 'https://johndoe.dev',
    ogImage: '/images/og-image.png',
    links: {
        github: 'https://github.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
        email: 'hello@johndoe.dev',
    },
    author: {
        name: profileContent.name,
        role: profileContent.role,
    },
};
