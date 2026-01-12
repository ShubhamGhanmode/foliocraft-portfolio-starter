// Skills module types

import { ModuleContentBase } from '@/types/module';

export interface Skill {
    /** Skill name */
    name: string;
    /** Optional icon name or path */
    icon?: string;
    /** Proficiency level (1-100) */
    level?: number;
}

export interface SkillCategory {
    /** Category name */
    name: string;
    /** Skills in this category */
    skills: Skill[];
}

export interface SkillsContent extends ModuleContentBase {
    /** Skill categories */
    categories: SkillCategory[];
}
