'use client';

import { ModuleProps } from '@/types/module';
import { Container, Card } from '@/components/ui';
import { Section, SectionHeader } from '@/components/layout';
import { educationContent } from '@/content/education';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export function Education({ id, className }: ModuleProps) {
    const { heading, subheading, items } = educationContent;

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <Section sectionId={id} className={cn('bg-[--color-accent] pt-24', className)}>
            <Container>
                <SectionHeader
                    heading={heading || 'Education'}
                    subheading={subheading}
                />

                <motion.div
                    className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {items.map((education, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card variant="glass" hover="glow" className="h-full">
                                <div className="flex items-start gap-5">
                                    {/* Icon container with gradient */}
                                    <div className="w-14 h-14 rounded-[--radius-md] bg-gradient-to-br from-[--color-primary] to-[--color-secondary] flex items-center justify-center flex-shrink-0 shadow-[var(--shadow-lift)]">
                                        <GraduationCap className="w-7 h-7 text-[--color-background]" />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-semibold text-[--color-foreground] leading-tight">
                                            {education.degree}
                                            {education.field ? (
                                                <span className="text-[--color-primary]"> in {education.field}</span>
                                            ) : ''}
                                        </h3>
                                        <p className="text-[--color-muted] mt-1">{education.institution}</p>
                                        <p className="inline-flex items-center mt-3 px-3 py-1 rounded-full bg-[--color-accent] border border-[--color-border] text-xs uppercase tracking-[0.15em] text-[--color-muted]">
                                            {education.period.start} – {education.period.end}
                                        </p>

                                        {education.description && education.description.length > 0 && (
                                            <ul className="mt-5 space-y-2 border-t border-[--color-border] pt-4">
                                                {education.description.map((point, pointIndex) => (
                                                    <li
                                                        key={pointIndex}
                                                        className="text-sm text-[--color-muted] flex items-start gap-3 group"
                                                    >
                                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[--color-primary] to-[--color-secondary] flex-shrink-0" />
                                                        <span className="leading-relaxed">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
}
