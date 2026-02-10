import React from 'react';
import { Box, Container, Typography, Grid, Avatar, Chip, Stack } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { motion } from 'framer-motion';

const About = () => {
    const highlights = [
        { icon: <PsychologyIcon />, label: "AI Engineering", color: "#a855f7" },
        { icon: <SmartToyIcon />, label: "RAG Systems", color: "#00d9ff" },
        { icon: <CloudIcon />, label: "AWS Cloud", color: "#ff9800" },
        { icon: <CodeIcon />, label: "Full-Stack", color: "#10b981" },
    ];

    return (
        <Box id="about" sx={{ py: 10, bgcolor: '#1a1a2e' }}>
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    {/* Image / AI Visual */}
                    <Grid item xs={12} md={5}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                {/* Glowing Background */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        width: 280,
                                        height: 280,
                                        borderRadius: '50%',
                                        background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)',
                                        filter: 'blur(40px)',
                                    }}
                                />

                                {/* Profile Image */}
                                <Avatar
                                    src="/profile.jpg"
                                    alt="Gökhan Cakmak"
                                    sx={{
                                        width: 250,
                                        height: 250,
                                        border: '3px solid',
                                        borderColor: '#a855f7',
                                        boxShadow: '0 0 40px rgba(168, 85, 247, 0.3)',
                                    }}
                                />

                                {/* Floating AI Badge */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 10,
                                        right: '20%',
                                        bgcolor: '#0f0f1a',
                                        border: '2px solid #00d9ff',
                                        borderRadius: 3,
                                        px: 2,
                                        py: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                    }}
                                >
                                    <AutoAwesomeIcon sx={{ color: '#00d9ff', fontSize: 20 }} />
                                    <Typography variant="body2" sx={{ color: '#00d9ff', fontWeight: 600 }}>
                                        AI Developer
                                    </Typography>
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>

                    {/* Content */}
                    <Grid item xs={12} md={7}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Chip
                                icon={<PsychologyIcon />}
                                label="Über mich"
                                sx={{
                                    mb: 2,
                                    bgcolor: 'rgba(168, 85, 247, 0.2)',
                                    color: '#a855f7',
                                    '& .MuiChip-icon': { color: '#a855f7' }
                                }}
                            />

                            <Typography
                                variant="h3"
                                sx={{
                                    mb: 3,
                                    fontWeight: 700,
                                    color: 'white'
                                }}
                            >
                                Full-Stack Developer &
                                <Box component="span" sx={{ color: '#00d9ff' }}> AI Engineer</Box>
                            </Typography>

                            <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)' }}>
                                Ich bin ein Softwareentwickler, der mit modernen Webtechnologien ästhetische und funktionale
                                Benutzeroberflächen gestaltet und gleichzeitig komplexe Systeme im Hintergrund steuert.
                            </Typography>

                            <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)' }}>
                                Ich schreibe nicht nur Code – ich entwickle skalierbare und intelligente Lösungen.
                                In letzter Zeit arbeite ich intensiv mit der <strong style={{ color: '#00d9ff' }}>RAG-Architektur</strong> und
                                entwickle <strong style={{ color: '#a855f7' }}>KI-gestützte Assistenten</strong>, mit denen Nutzer mit
                                ihren eigenen Daten interagieren können.
                            </Typography>

                            <Typography variant="body1" sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', mb: 4 }}>
                                Ich entwickle mich kontinuierlich im Bereich Cloud-Technologien (AWS) und AI Engineering weiter.
                            </Typography>

                            {/* Highlight Chips */}
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                {highlights.map((item, i) => (
                                    <Chip
                                        key={i}
                                        icon={item.icon}
                                        label={item.label}
                                        sx={{
                                            bgcolor: `${item.color}20`,
                                            color: item.color,
                                            border: `1px solid ${item.color}40`,
                                            '& .MuiChip-icon': { color: item.color }
                                        }}
                                    />
                                ))}
                            </Stack>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
