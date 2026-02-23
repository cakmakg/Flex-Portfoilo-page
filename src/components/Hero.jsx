import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, Container, Stack, Chip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DownloadIcon from '@mui/icons-material/Download';
import TerminalIcon from '@mui/icons-material/Terminal';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PsychologyIcon from '@mui/icons-material/Psychology';

// Matrix Canvas Component
const MatrixBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        let columns = Math.floor(width / 20);
        const characters = "01アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン";
        const charArray = characters.split('');
        let drops = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(17, 24, 39, 0.05)'; // Slate 900 for a fresh, slightly lighter deep background
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#00d9ff'; // Cyan matrix color
            ctx.font = '15px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];

                // Head of the drop is brighter
                if (Math.random() > 0.95) {
                    ctx.fillStyle = '#fff';
                } else {
                    ctx.fillStyle = '#00d9ff';
                }

                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            columns = Math.floor(width / 20);
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = 1;
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.3,
                zIndex: 0,
            }}
        />
    );
};

// Typed Text Component
const TypewriterText = ({ text, delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                if (i <= text.length) {
                    setDisplayedText(text.slice(0, i));
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 50);
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timer);
    }, [text, delay]);

    return <span>{displayedText}</span>;
};

const Hero = () => {
    const [showRobot, setShowRobot] = useState(false);

    // Otomatik morph interval
    useEffect(() => {
        const interval = setInterval(() => {
            setShowRobot((prev) => !prev);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const leftTags = [
        "JavaScript / TS",
        "React.js / Next.js",
        "Node.js / Express",
        "AWS / AWS Lambda",
        "Docker & CI/CD"
    ];

    const rightTags = [
        "AI Engineering",
        "LLM Orchestration",
        "RAG Architecture",
        "AI Agents / Guardrails",
        "Advanced Prompting"
    ];

    return (
        <Box
            id="home"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#111827', // Slate-900 (Lighter, fresher dark tone)
                pt: { xs: 16, md: 20 }, // Increased top padding to push content down and avoid navbar overlap
                pb: 8
            }}
        >
            {/* Matrix Rain & Vignette */}
            <MatrixBackground />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at center, transparent 0%, #111827 80%)',
                    zIndex: 1,
                }}
            />

            {/* Scanlines HUD effect */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.04), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.04))',
                    backgroundSize: '100% 4px, 3px 100%',
                    zIndex: 2,
                    pointerEvents: 'none',
                    opacity: 0.3
                }}
            />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

                    {/* MASSIVE NAME TEXT AT THE TOP */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontFamily: 'Orbitron, sans-serif',
                                fontWeight: 800,
                                fontSize: { xs: '2rem', sm: '2.5rem', md: '4rem' },
                                lineHeight: { xs: 1.2, md: 1.1 },
                                mt: 0,
                                mb: 1,
                                background: 'linear-gradient(135deg, #00d9ff 0%, #a855f7 50%, #00d9ff 100%)',
                                backgroundSize: '200% auto',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                filter: 'drop-shadow(0px 10px 20px rgba(168, 85, 247, 0.2))',
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
                            variant="h2"
                            sx={{
                                fontFamily: 'Orbitron, sans-serif',
                                fontWeight: 600,
                                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                                mb: 6,
                                background: 'linear-gradient(135deg, #00d9ff 0%, #a855f7 50%, #00d9ff 100%)',
                                backgroundSize: '200% auto',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                animation: 'gradient 3s ease infinite',
                            }}
                        >
                            Fullstack & AI Developer
                        </Typography>
                    </motion.div>

                    {/* CENTERED PROFILE MORPHING */}
                    <Box sx={{ position: 'relative', mb: 6, display: 'flex', justifyContent: 'center' }}>

                        {/* Open to work Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            style={{ position: 'absolute', top: -30, zIndex: 20 }}
                        >
                            <Chip
                                icon={<WorkOutlineIcon sx={{ fontSize: 14 }} />}
                                label="OPEN TO WORK"
                                size="small"
                                sx={{
                                    bgcolor: 'rgba(0, 217, 255, 0.15)',
                                    color: '#00d9ff',
                                    border: '1px solid #00d9ff',
                                    fontWeight: 700,
                                    letterSpacing: 1,
                                    boxShadow: '0 0 15px rgba(0, 217, 255, 0.4)',
                                    '& .MuiChip-icon': { color: '#00d9ff' }
                                }}
                            />
                        </motion.div>

                        {/* Floating Tags - Left */}
                        <Box sx={{ position: 'absolute', left: { xs: -60, md: -180 }, top: '50%', transform: 'translateY(-50%)', display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 3 }}>
                            {leftTags.map((tag, i) => (
                                <motion.div
                                    key={`l-${i}`}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 + (i * 0.2) }}
                                    style={{
                                        animation: `float ${3 + i}s ease-in-out infinite alternate`,
                                    }}
                                >
                                    <Box sx={{
                                        px: 2, py: 1,
                                        bgcolor: 'rgba(0, 217, 255, 0.1)',
                                        border: '1px solid rgba(0, 217, 255, 0.3)',
                                        color: '#00d9ff',
                                        borderRadius: 1,
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        boxShadow: '0 0 15px rgba(0, 217, 255, 0.2)',
                                        backdropFilter: 'blur(4px)'
                                    }}>
                                        {tag}
                                    </Box>
                                </motion.div>
                            ))}
                        </Box>

                        {/* Floating Tags - Right */}
                        <Box sx={{ position: 'absolute', right: { xs: -60, md: -180 }, top: '50%', transform: 'translateY(-50%)', display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 3 }}>
                            {rightTags.map((tag, i) => (
                                <motion.div
                                    key={`r-${i}`}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.2 + (i * 0.2) }}
                                    style={{
                                        animation: `float ${3.5 + i}s ease-in-out infinite alternate-reverse`,
                                    }}
                                >
                                    <Box sx={{
                                        px: 2, py: 1,
                                        bgcolor: 'rgba(168, 85, 247, 0.1)',
                                        border: '1px solid rgba(168, 85, 247, 0.3)',
                                        color: '#a855f7',
                                        borderRadius: 1,
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)',
                                        backdropFilter: 'blur(4px)'
                                    }}>
                                        {tag}
                                    </Box>
                                </motion.div>
                            ))}
                        </Box>

                        {/* Profile Image Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <Box
                                onClick={() => setShowRobot(prev => !prev)}
                                sx={{
                                    width: { xs: 240, md: 320 },
                                    height: { xs: 240, md: 320 },
                                    position: 'relative',
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                    zIndex: 10,
                                    '@keyframes float': {
                                        '0%': { transform: 'translateY(0px)' },
                                        '100%': { transform: 'translateY(-15px)' }
                                    },
                                    animation: 'float 6s ease-in-out infinite alternate',
                                }}
                            >
                                {/* 3 Glow Rings */}
                                <Box sx={{
                                    position: 'absolute', top: '-10%', left: '-10%', right: '-10%', bottom: '-10%',
                                    borderRadius: '50%', border: '1px dashed rgba(0, 217, 255, 0.2)',
                                    animation: 'spin 20s linear infinite',
                                    '@keyframes spin': { '100%': { transform: 'rotate(360deg)' } }
                                }} />
                                <Box sx={{
                                    position: 'absolute', top: '-5%', left: '-5%', right: '-5%', bottom: '-5%',
                                    borderRadius: '50%', border: '2px solid',
                                    borderColor: showRobot ? 'rgba(168, 85, 247, 0.3)' : 'rgba(0, 217, 255, 0.3)',
                                    transition: 'border-color 1s',
                                    animation: 'spin 15s linear infinite reverse',
                                }} />
                                <Box sx={{
                                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                                    borderRadius: '50%', border: '4px solid',
                                    borderColor: showRobot ? '#a855f7' : '#00d9ff',
                                    boxShadow: showRobot ? '0 0 40px rgba(168, 85, 247, 0.6)' : '0 0 40px rgba(0, 217, 255, 0.5)',
                                    transition: 'all 1s ease',
                                    zIndex: 2,
                                }} />

                                {/* Image Elements */}
                                <Box sx={{
                                    position: 'absolute', top: 4, left: 4, right: 4, bottom: 4,
                                    borderRadius: '50%', overflow: 'hidden', zIndex: 1,
                                    bgcolor: '#1f2937' // slate-800
                                }}>
                                    <Box
                                        component="img"
                                        src="/profile.jpg"
                                        alt="Human"
                                        sx={{
                                            width: '100%', height: '100%', objectFit: 'cover',
                                            opacity: showRobot ? 0 : 1, transition: 'opacity 1s ease'
                                        }}
                                    />
                                    <Box
                                        component="img"
                                        src="/cyborg.png"
                                        alt="Cyborg"
                                        sx={{
                                            position: 'absolute', top: 0, left: 0,
                                            width: '100%', height: '100%', objectFit: 'cover',
                                            opacity: showRobot ? 1 : 0, transition: 'opacity 1s ease'
                                        }}
                                    />
                                </Box>
                            </Box>
                        </motion.div>
                    </Box>

                    {/* GLASSMORPHISM BIO BOX */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Box
                            sx={{
                                mt: 4, mb: 6,
                                maxWidth: '800px', // max-w-3xl
                                mx: 'auto',
                                p: { xs: 3, md: 4 },
                                bgcolor: 'rgba(31, 41, 55, 0.6)', // slate-800 with opacity for a lighter feel
                                backdropFilter: 'blur(16px)',
                                borderRadius: 4,
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderTop: '1px solid rgba(0, 217, 255, 0.3)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* HUD Top-Left decoration */}
                            <Box sx={{ position: 'absolute', top: 0, left: 0, width: 30, height: 30, borderTop: '2px solid #00d9ff', borderLeft: '2px solid #00d9ff' }} />
                            <Box sx={{ position: 'absolute', bottom: 0, right: 0, width: 30, height: 30, borderBottom: '2px solid #a855f7', borderRight: '2px solid #a855f7' }} />

                            <Typography sx={{ fontFamily: 'monospace', color: '#00d9ff', fontSize: '0.85rem', mb: 2, display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                                <TerminalIcon sx={{ fontSize: 16 }} /> SYSTEM SPEAKING...
                            </Typography>

                            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.8, fontWeight: 300 }}>
                                <TypewriterText
                                    text="Ich entwickle intelligente Webanwendungen mit modernen Full-Stack Technologien und Generative AI. Spezialisiert auf RAG-Architekturen, AI-Assistenten und Cloud-native Lösungen."
                                    delay={1000}
                                />
                                <span style={{ animation: 'blink 1s infinite' }}>&nbsp;█</span>
                            </Typography>
                        </Box>
                    </motion.div>

                    {/* ACTION BUTTONS */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        <Stack
                            direction="row"
                            spacing={{ xs: 2, md: 3 }}
                            useFlexGap
                            flexWrap="wrap"
                            justifyContent="center"
                            sx={{ '& .MuiButton-root': { px: 4, py: 1.5, fontSize: '0.9rem', letterSpacing: 1 } }}
                        >
                            <Button
                                variant="contained"
                                href="#projects"
                                sx={{
                                    bgcolor: '#00d9ff', color: '#000', fontWeight: 800,
                                    boxShadow: '0 0 20px rgba(0,217,255,0.4)',
                                    '&:hover': { bgcolor: '#fff', boxShadow: '0 0 30px rgba(0,217,255,0.8)' }
                                }}
                            >
                                PROJECTS
                            </Button>

                            <Button
                                variant="outlined"
                                href="/Lebenslauf.pdf"
                                startIcon={<DownloadIcon />}
                                sx={{
                                    borderColor: '#a855f7', color: '#a855f7', fontWeight: 600,
                                    '&:hover': { borderColor: '#fff', color: '#fff', bgcolor: 'rgba(168,85,247,0.2)' }
                                }}
                            >
                                RESUME
                            </Button>

                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Button href="https://github.com/cakmakg" target="_blank" sx={{ minWidth: 0, p: 1.5, color: '#fff', border: '1px solid rgba(255,255,255,0.2)', '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' } }}>
                                    <GitHubIcon />
                                </Button>
                                <Button href="https://www.linkedin.com/in/gökhan-cakmak/" target="_blank" sx={{ minWidth: 0, p: 1.5, color: '#0077b5', border: '1px solid rgba(0,119,181,0.3)', '&:hover': { borderColor: '#0077b5', bgcolor: 'rgba(0,119,181,0.1)' } }}>
                                    <LinkedInIcon />
                                </Button>
                                <Button href="mailto:gokhan.cakmak@web.de" sx={{ minWidth: 0, p: 1.5, color: '#ea4335', border: '1px solid rgba(234,67,53,0.3)', '&:hover': { borderColor: '#ea4335', bgcolor: 'rgba(234,67,53,0.1)' } }}>
                                    <EmailIcon />
                                </Button>
                            </Box>
                        </Stack>
                    </motion.div>

                </Box>
            </Container>

            {/* Global Styles for Keyframes */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
            `}} />
        </Box>
    );
};

export default Hero;
