import React from 'react';
import { Box, Container, Typography, Chip, Stack } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import { motion } from 'framer-motion';

const About = () => {
    const highlights = [
        { icon: <PsychologyIcon />, label: "AI Engineering", color: "#a855f7" },
        { icon: <AutoAwesomeIcon />, label: "RAG Systems", color: "#00d9ff" },
        { icon: <CloudIcon />, label: "AWS Cloud", color: "#ff9800" },
        { icon: <CodeIcon />, label: "Full-Stack", color: "#10b981" },
    ];

    return (
        <Box id="about" sx={{ py: 12, bgcolor: '#172033', position: 'relative', overflow: 'hidden' }}>
            {/* Subtle Grid Pattern Background */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.05,
                    backgroundImage: `
                        linear-gradient(rgba(0,217,255,0.4) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,217,255,0.4) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    zIndex: 0
                }}
            />

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', mb: 6 }}>
                        <Chip
                            icon={<TerminalIcon sx={{ fontSize: 16 }} />}
                            label="01 — ÜBER MICH"
                            sx={{
                                mb: 3,
                                bgcolor: 'rgba(0, 217, 255, 0.1)',
                                color: '#00d9ff',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                letterSpacing: 2,
                                border: '1px solid rgba(0, 217, 255, 0.3)',
                                '& .MuiChip-icon': { color: '#00d9ff' }
                            }}
                        />

                        <Typography
                            variant="h2"
                            sx={{
                                mb: 2,
                                fontWeight: 800,
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                color: 'white',
                                fontFamily: 'Orbitron, sans-serif'
                            }}
                        >
                            Architekt <br /> digitaler <Box component="span" sx={{ color: '#00d9ff' }}>Systeme</Box>
                        </Typography>
                    </Box>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Box
                        sx={{
                            p: { xs: 3, md: 5 },
                            bgcolor: 'rgba(31, 41, 55, 0.4)', // slate-800 translucent
                            backdropFilter: 'blur(16px)',
                            borderRadius: 4,
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            borderLeft: '4px solid #a855f7',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                            position: 'relative'
                        }}
                    >
                        {/* Decorative HUD Corner */}
                        <Box sx={{ position: 'absolute', top: 0, right: 0, width: 40, height: 40, borderTop: '2px solid rgba(255,255,255,0.1)', borderRight: '2px solid rgba(255,255,255,0.1)', borderTopRightRadius: 16 }} />
                        <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: 40, height: 40, borderBottom: '2px solid rgba(168,85,247,0.3)', borderLeft: '2px solid rgba(168,85,247,0.3)', borderBottomLeftRadius: 16 }} />

                        <Typography variant="body1" paragraph sx={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)' }}>
                            Als Full-Stack Developer und AI Engineer schlage ich die Brücke zwischen modernem Webdesign und hochkomplexer KI-Architektur im Backend. Für mich geht es nicht nur darum, Code zu schreiben, sondern skalierbare und intelligente Ökosysteme zu konzipieren.
                        </Typography>

                        <Typography variant="body1" paragraph sx={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)' }}>
                            Mein aktueller Fokus liegt auf der Entwicklung von <strong style={{ color: '#00d9ff', fontWeight: 600 }}>RAG-Pipelines</strong> und der Orchestrierung von autonomen <strong style={{ color: '#a855f7', fontWeight: 600 }}>Multi-Agenten-Systemen</strong>. Ich baue keine simplen Chatbots, sondern digitale Assistenten, die komplexe Workflows verstehen, sicher mit Unternehmensdaten interagieren und über Cloud-Dienste wie AWS Lambda eigenständig Aufgaben ausführen.
                        </Typography>

                        <Typography variant="body1" sx={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)', mb: 5 }}>
                            Weil in der produktiven Nutzung Verlässlichkeit das Wichtigste ist, setze ich auf strikte Guardrails, die Halluzinationen verhindern, und strategisches Model Routing, das Leistung und Kosten perfekt ausbalanciert. Mein Anspruch ist es, Technologien nicht nur als Selbstzweck zu nutzen, sondern als pragmatische Werkzeuge, die Unternehmen sicherer, effizienter und zukunftsfähig machen.
                        </Typography>

                        {/* Highlight Chips */}
                        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap justifyContent="center">
                            {highlights.map((item, i) => (
                                <Chip
                                    key={i}
                                    icon={item.icon}
                                    label={item.label}
                                    sx={{
                                        px: 1,
                                        py: 2.5,
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        bgcolor: 'rgba(31, 41, 55, 0.8)',
                                        color: 'white',
                                        border: `1px solid ${item.color}40`,
                                        backdropFilter: 'blur(4px)',
                                        transition: 'all 0.3s ease',
                                        '& .MuiChip-icon': { color: item.color },
                                        '&:hover': {
                                            bgcolor: `${item.color}20`,
                                            borderColor: item.color,
                                            boxShadow: `0 0 15px ${item.color}40`,
                                            transform: 'translateY(-2px)'
                                        }
                                    }}
                                />
                            ))}
                        </Stack>
                    </Box>
                </motion.div>

            </Container>
        </Box>
    );
};

export default About;
