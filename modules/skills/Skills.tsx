'use client';

import { ModuleProps } from '@/types/module';
import { Container, Card } from '@/components/ui';
import { Section, SectionHeader } from '@/components/layout';
import { skillsContent } from '@/content/skills';
import { motion } from 'framer-motion';
import { cn } from '@/lib';

export function Skills({ id, className }: ModuleProps) {
    const { heading, subheading, categories } = skillsContent;

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <Section sectionId={id} className={cn('pt-24', className)}>
            <Container>
                <SectionHeader
                    heading={heading || 'Skills'}
                    subheading={subheading}
                />

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {categories.map((category, categoryIndex) => (
                        <motion.div key={categoryIndex} variants={itemVariants}>
                            <Card variant="glass" hover="glow" className="h-full">
                                {/* Category icon/number */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-[--radius-md] bg-gradient-to-br from-[--color-primary] to-[--color-secondary] flex items-center justify-center text-[--color-background] font-bold text-lg shadow-[var(--shadow-lift)]">
                                        {String(categoryIndex + 1).padStart(2, '0')}
                                    </div>
                                    <h3 className="text-xl font-semibold text-[--color-foreground]">
                                        {category.name}
                                    </h3>
                                </div>

                                <div className="space-y-5">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="group">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-semibold text-[--color-foreground] group-hover:text-[--color-primary] transition-colors">
                                                    {skill.name}
                                                </span>
                                                {skill.level && (
                                                    <span className="text-xs font-medium text-[--color-muted] bg-[--color-accent] px-2 py-1 rounded-full">
                                                        {skill.level}%
                                                    </span>
                                                )}
                                            </div>
                                            {skill.level && (
                                                <div className="h-2 rounded-full bg-[--color-accent] overflow-hidden relative">
                                                    {/* Background pattern */}
                                                    <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,var(--color-border)_4px,var(--color-border)_5px)]" />
                                                    {/* Progress bar */}
                                                    <motion.div
                                                        className="h-full rounded-full bg-gradient-to-r from-[--color-primary] to-[--color-secondary] relative"
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1, delay: skillIndex * 0.1, ease: "easeOut" }}
                                                    >
                                                        {/* Shine effect */}
                                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                                    </motion.div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
}
