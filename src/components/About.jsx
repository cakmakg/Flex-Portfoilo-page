import React from 'react';
import { Box, Typography, Chip, Stack, Divider } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CloudIcon from '@mui/icons-material/Cloud';
import LayersIcon from '@mui/icons-material/Layers';
import TranslateIcon from '@mui/icons-material/Translate';
import { SectionShell } from './ui/SectionShell';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';
import { Reveal } from './ui/Reveal';
import { accents, alpha } from '../theme/tokens';

const highlights = [
    { icon: <PsychologyIcon />, label: 'LangGraph Multi-Agent', color: accents.purple },
    { icon: <AutoAwesomeIcon />, label: 'RAG & Vector Search', color: accents.cyan },
    { icon: <LayersIcon />, label: 'Multi-Tenant SaaS', color: accents.warn },
    { icon: <CloudIcon />, label: 'AWS & MLOps', color: accents.success },
];

const About = () => (
    <SectionShell id="about" surface="s3" bg="grid" maxWidth="md">
        <SectionHeading
            index="01"
            overline="ÜBER MICH"
            title={<>Architekt digitaler <Box component="span" sx={{ color: accents.cyan }}>Systeme</Box></>}
        />

        <Reveal delay={0.15}>
            <GlassCard accent={accents.purple} corners={['tr', 'bl']} interactive={false} sx={{ p: { xs: 3, md: 5 } }}>
                <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                    Ich baue Full-Stack-Anwendungen mit <Box component="strong" sx={{ color: accents.cyan, fontWeight: 600 }}>React, Node.js und TypeScript</Box> und entwerfe darauf aufbauend KI-Systeme, die eigenständig arbeiten. Der Schwerpunkt liegt auf Multi-Agent-Architekturen, ereignisgesteuerten LLM-Workflows und Multi-Tenant-SaaS-Plattformen für Geschäftsprozesse.
                </Typography>

                <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                    KI nutze ich dabei nicht nur als Anwender. Ich baue deterministische State Machines mit <Box component="strong" sx={{ color: accents.purple, fontWeight: 600 }}>LangGraph</Box>, verteile Aufgaben je nach Anforderung auf Claude, Gemini oder OpenAI und verbinde die Agenten über n8n und Webhooks mit Gmail, Slack und Social-Media-Kanälen.
                </Typography>

                <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                    Damit die Ergebnisse verlässlich bleiben, arbeite ich mit RAG über MongoDB Atlas Vector Search, mit Critic-Agents für die automatische Qualitätsprüfung und mit Human-in-the-Loop-Freigaben an kritischen Stellen. Kostenkontrolle gehört dazu: Der Token-Verbrauch wird pro Mandant erfasst und über Stripe abgerechnet.
                </Typography>

                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                    Praktisch komme ich aus mehreren Richtungen: Aktuell betreue ich bei <Box component="strong" sx={{ color: 'white', fontWeight: 600 }}>Reisegesucht.com</Box> in Bonn Web-Content und Social Media, davor 1st-Level-IT-Support bei der GIS GmbH und Frontend-Entwicklung einer Shopping-Plattform mit React und TypeScript bei Vidinli Software. Von 2020 bis 2023 habe ich ein eigenes Catering-Unternehmen gegründet und geführt — Kundenkontakt, Finanzen und Verantwortung von Anfang bis Ende. Den Weg in die IT bin ich über zwei Umschulungen gegangen: Full Stack Web Developer bei Clarusway und Fachinformatiker für Systemintegration bei der FAW.
                </Typography>

                <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)', mb: 3 }} />

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mb: 4, flexWrap: 'wrap' }}>
                    <TranslateIcon sx={{ fontSize: 18, color: accents.cyan }} />
                    <Typography sx={{ fontFamily: 'Victor Mono, monospace', fontSize: '0.8rem', letterSpacing: 1, color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>
                        Deutsch (C1) · Englisch (B1) · Spanisch · Türkisch (Muttersprache)
                    </Typography>
                </Box>

                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap justifyContent="center">
                    {highlights.map((item) => (
                        <Chip
                            key={item.label}
                            icon={item.icon}
                            label={item.label}
                            sx={{
                                px: 1,
                                py: 2.5,
                                fontWeight: 600,
                                bgcolor: alpha('#1f2937', 0.8),
                                color: 'white',
                                border: `1px solid ${alpha(item.color, 0.25)}`,
                                transition: 'all 0.3s ease',
                                '& .MuiChip-icon': { color: item.color },
                                '&:hover': {
                                    bgcolor: alpha(item.color, 0.12),
                                    borderColor: item.color,
                                    boxShadow: `0 0 15px ${alpha(item.color, 0.25)}`,
                                    transform: 'translateY(-2px)',
                                },
                            }}
                        />
                    ))}
                </Stack>
            </GlassCard>
        </Reveal>
    </SectionShell>
);

export default About;
