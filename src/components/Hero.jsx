import React from 'react';
import { Box, Typography, Button, Container, Grid, useTheme, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';

const Hero = () => {
    const theme = useTheme();

    const techStack = [
        { label: "React", icon: <CodeIcon sx={{ fontSize: 14 }} /> },
        { label: "Node.js", icon: <CodeIcon sx={{ fontSize: 14 }} /> },
        { label: "AI/ML", icon: <PsychologyIcon sx={{ fontSize: 14 }} /> },
        { label: "RAG", icon: <AutoAwesomeIcon sx={{ fontSize: 14 }} /> },
        { label: "AWS", icon: <CloudIcon sx={{ fontSize: 14 }} /> },
    ];

    return (
        <Box
            id="home"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: `linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)`,
                pt: 8
            }}
        >
            {/* AI Neural Network Background Pattern */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.1,
                    background: `
                        radial-gradient(circle at 20% 80%, #00d9ff 0%, transparent 25%),
                        radial-gradient(circle at 80% 20%, #a855f7 0%, transparent 25%),
                        radial-gradient(circle at 40% 40%, #00d9ff 0%, transparent 20%),
                        radial-gradient(circle at 60% 60%, #a855f7 0%, transparent 20%)
                    `,
                }}
            />

            {/* Animated Grid Lines */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.05,
                    backgroundImage: `
                        linear-gradient(rgba(0,217,255,0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,217,255,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={7}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* AI Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Chip
                                    icon={<SmartToyIcon />}
                                    label="AI-Powered Developer"
                                    sx={{
                                        mb: 2,
                                        bgcolor: 'rgba(168, 85, 247, 0.2)',
                                        color: '#a855f7',
                                        border: '1px solid rgba(168, 85, 247, 0.5)',
                                        fontWeight: 600,
                                        '& .MuiChip-icon': { color: '#a855f7' }
                                    }}
                                />
                            </motion.div>

                            <Typography variant="h5" sx={{ fontWeight: 300, color: 'rgba(255,255,255,0.7)', mb: 1 }}>
                                Hallo, ich bin
                            </Typography>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontFamily: 'Orbitron',
                                    fontWeight: 700,
                                    mb: 2,
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    background: 'linear-gradient(135deg, #00d9ff 0%, #a855f7 50%, #00d9ff 100%)',
                                    backgroundSize: '200% auto',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    animation: 'gradient 3s ease infinite',
                                    '@keyframes gradient': {
                                        '0%': { backgroundPosition: '0% center' },
                                        '50%': { backgroundPosition: '100% center' },
                                        '100%': { backgroundPosition: '0% center' },
                                    }
                                }}
                            >
                                Gökhan Cakmak
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    mb: 2,
                                    fontWeight: 500,
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1
                                }}
                            >
                                <PsychologyIcon sx={{ color: '#00d9ff' }} />
                                Full-Stack & AI Developer
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 3,
                                    maxWidth: '550px',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                    color: 'rgba(255,255,255,0.7)'
                                }}
                            >
                                Ich entwickle intelligente Webanwendungen mit modernen Full-Stack Technologien
                                und Generative AI. Spezialisiert auf RAG-Architekturen, AI-Assistenten und
                                Cloud-native Lösungen.
                            </Typography>

                            {/* Tech Stack */}
                            <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
                                {techStack.map((tech, i) => (
                                    <Chip
                                        key={i}
                                        icon={tech.icon}
                                        label={tech.label}
                                        size="small"
                                        sx={{
                                            bgcolor: 'rgba(0, 217, 255, 0.1)',
                                            color: '#00d9ff',
                                            border: '1px solid rgba(0, 217, 255, 0.3)',
                                            '& .MuiChip-icon': { color: '#00d9ff' }
                                        }}
                                    />
                                ))}
                            </Stack>

                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    startIcon={<EmailIcon />}
                                    href="#contact"
                                    sx={{
                                        bgcolor: '#a855f7',
                                        '&:hover': { bgcolor: '#9333ea' }
                                    }}
                                >
                                    Kontakt
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    startIcon={<DownloadIcon />}
                                    href="/assets/Lebenslauf.pdf"
                                    sx={{
                                        borderColor: '#00d9ff',
                                        color: '#00d9ff',
                                        '&:hover': {
                                            bgcolor: 'rgba(0, 217, 255, 0.1)',
                                            borderColor: '#00d9ff'
                                        }
                                    }}
                                >
                                    Lebenslauf
                                </Button>
                            </Box>
                        </motion.div>
                    </Grid>

                    {/* AI Visual Element */}
                    <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: { xs: 280, md: 350 },
                                    height: { xs: 280, md: 350 },
                                }}
                            >
                                {/* Glowing Ring */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                        border: '2px solid',
                                        borderColor: 'rgba(0, 217, 255, 0.3)',
                                        animation: 'pulse 2s ease-in-out infinite',
                                        '@keyframes pulse': {
                                            '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
                                            '50%': { transform: 'translate(-50%, -50%) scale(1.1)', opacity: 0.5 },
                                        }
                                    }}
                                />

                                {/* Second Ring */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '120%',
                                        height: '120%',
                                        borderRadius: '50%',
                                        border: '1px solid',
                                        borderColor: 'rgba(168, 85, 247, 0.2)',
                                        animation: 'pulse 2s ease-in-out infinite 0.5s',
                                    }}
                                />

                                {/* AI Brain Icon Center */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '70%',
                                        height: '70%',
                                        borderRadius: '50%',
                                        bgcolor: 'rgba(0, 217, 255, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(0, 217, 255, 0.3)',
                                    }}
                                >
                                    <PsychologyIcon
                                        sx={{
                                            fontSize: { xs: 80, md: 120 },
                                            color: '#00d9ff',
                                            filter: 'drop-shadow(0 0 20px rgba(0, 217, 255, 0.5))'
                                        }}
                                    />
                                </Box>

                                {/* Floating Particles */}
                                {[...Array(6)].map((_, i) => (
                                    <Box
                                        key={i}
                                        sx={{
                                            position: 'absolute',
                                            width: 8,
                                            height: 8,
                                            borderRadius: '50%',
                                            bgcolor: i % 2 === 0 ? '#00d9ff' : '#a855f7',
                                            top: `${20 + Math.random() * 60}%`,
                                            left: `${20 + Math.random() * 60}%`,
                                            animation: `float${i} 3s ease-in-out infinite`,
                                            [`@keyframes float${i}`]: {
                                                '0%, 100%': { transform: 'translateY(0) translateX(0)' },
                                                '50%': { transform: `translateY(${-10 - i * 5}px) translateX(${5 + i * 3}px)` },
                                            }
                                        }}
                                    />
                                ))}
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;
