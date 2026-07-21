import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, Container, Stack, Chip } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import TerminalIcon from '@mui/icons-material/Terminal';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { accents, surfaces, gradients, matrix, alpha } from '../theme/tokens';

const MATRIX_CHARS =
    '01アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン'.split('');

// Matrix yağmuru: setInterval yerine rAF + zaman adımı; sekme gizliyken çizmez;
// prefers-reduced-motion'da tek statik kare çizip durur (hareket yok).
const MatrixBackground = () => {
    const canvasRef = useRef(null);
    const reduce = useReducedMotion();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return undefined;
        const ctx = canvas.getContext('2d');

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        const CELL = 22; // Spaltenbreite und Zeilenhöhe des Rasters
        let columns = Math.floor(width / CELL);
        let drops = Array.from({ length: columns }, () => 1);
        let rafId;
        let last = 0;
        const STEP = 48; // ms başına bir kare

        const draw = () => {
            // Halbtransparente Schicht über dem Vorbild erzeugt die Schweife.
            ctx.fillStyle = matrix.fade;
            ctx.fillRect(0, 0, width, height);
            ctx.font = '17px "Victor Mono", ui-monospace, monospace';
            ctx.textBaseline = 'top';

            for (let i = 0; i < drops.length; i++) {
                const text = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
                const isHead = Math.random() > 0.86;

                if (isHead) {
                    // Heller Kopf mit Glow — macht den Regen deutlich sichtbar.
                    ctx.shadowColor = accents.cyan;
                    ctx.shadowBlur = 14;
                    ctx.fillStyle = matrix.head;
                } else {
                    ctx.shadowBlur = 0;
                    ctx.fillStyle = matrix.trail;
                }

                ctx.fillText(text, i * CELL, drops[i] * CELL);
                if (drops[i] * CELL > height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
            ctx.shadowBlur = 0;
        };

        const loop = (t) => {
            rafId = requestAnimationFrame(loop);
            if (t - last < STEP || document.hidden) return;
            last = t;
            draw();
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            columns = Math.floor(width / CELL);
            drops = Array.from({ length: columns }, () => 1);
        };

        if (reduce) {
            ctx.fillStyle = surfaces.hero;
            ctx.fillRect(0, 0, width, height);
            draw();
        } else {
            rafId = requestAnimationFrame(loop);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener('resize', handleResize);
        };
    }, [reduce]);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.85, zIndex: 0 }}
        />
    );
};

// Daktilo efekti; reduced-motion'da metni anında tam gösterir.
// Gösterilen metni sayaçtan türetiyoruz; setState yalnızca interval callback'inde
// çağrılır (effect gövdesinde senkron setState yok → set-state-in-effect kuralı).
const TypewriterText = ({ text, delay = 0 }) => {
    const reduce = useReducedMotion();
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (reduce) return undefined;
        let i = 0;
        let interval;
        const timer = setTimeout(() => {
            interval = setInterval(() => {
                i += 1;
                setCount(i);
                if (i >= text.length) clearInterval(interval);
            }, 45);
        }, delay);
        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [text.length, delay, reduce]);

    return <span>{reduce ? text : text.slice(0, count)}</span>;
};

const leftTags = ['TypeScript · React', 'Next.js 14', 'Node.js · FastAPI', 'MongoDB · Vector Search', 'Docker · CI/CD'];
const rightTags = ['LangGraph State Machines', 'Multi-Agent (10+)', 'RAG · Atlas Vector Search', 'HITL · Critic-Agents', 'MCP · n8n'];

const gradientText = {
    background: gradients.brand,
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'heroGradient 4s ease infinite',
    '@keyframes heroGradient': {
        '0%': { backgroundPosition: '0% center' },
        '50%': { backgroundPosition: '100% center' },
        '100%': { backgroundPosition: '0% center' },
    },
};

const FloatingTag = ({ label, color, side, index }) => (
    <motion.div
        initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 + index * 0.2 }}
        style={{ animation: `heroFloat ${3 + index}s ease-in-out infinite alternate${side === 'right' ? '-reverse' : ''}` }}
    >
        {/* Dunkles Glaspanel statt nur Accent-Tint: hebt sich klar vom hellen
            Matrix-Regen dahinter ab (Blur + Schlagschatten trennen die Ebenen). */}
        <Box
            sx={{
                px: 2.5,
                py: 1.25,
                bgcolor: alpha(surfaces.base, 0.62),
                border: `1px solid ${alpha(color, 0.55)}`,
                color,
                borderRadius: 2,
                fontSize: '0.92rem',
                fontWeight: 600,
                letterSpacing: 0.3,
                textShadow: `0 0 12px ${alpha(color, 0.45)}`,
                boxShadow: `0 0 18px ${alpha(color, 0.22)}, 0 10px 24px rgba(0,0,0,0.45)`,
                backdropFilter: 'blur(10px)',
                whiteSpace: 'nowrap',
            }}
        >
            {label}
        </Box>
    </motion.div>
);

const Hero = () => {
    const [showRobot, setShowRobot] = useState(false);
    const reduce = useReducedMotion();

    // Otomatik insan↔cyborg geçişi (reduced-motion'da kapalı).
    useEffect(() => {
        if (reduce) return undefined;
        const interval = setInterval(() => setShowRobot((prev) => !prev), 4000);
        return () => clearInterval(interval);
    }, [reduce]);

    return (
        <Box
            id="home"
            component="section"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: surfaces.hero,
                pt: { xs: 16, md: 20 },
                pb: 8,
            }}
        >
            <MatrixBackground />

            {/* Vignette: Mitte bleibt frei, nur die Ränder werden abgedunkelt —
                sonst überdeckt sie den Matrix-Regen. */}
            <Box
                aria-hidden
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(ellipse at center, transparent 0%, transparent 55%, ${alpha(surfaces.base, 0.5)} 100%)`,
                    zIndex: 1,
                    pointerEvents: 'none',
                }}
            />

            {/* Scanlines (dezent) */}
            <Box
                aria-hidden
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.06) 50%)',
                    backgroundSize: '100% 4px',
                    zIndex: 2,
                    pointerEvents: 'none',
                    opacity: 0.1,
                }}
            />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    {/* İsim + rol */}
                    <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
                        <Typography variant="h1" sx={{ mb: 1, filter: `drop-shadow(0 10px 20px ${alpha(accents.purple, 0.2)})`, ...gradientText }}>
                            Gökhan Cakmak
                        </Typography>
                        <Typography variant="h2" sx={{ mb: 6, fontSize: { xs: '1.15rem', sm: '1.5rem', md: '2.1rem' }, ...gradientText }}>
                            Full-Stack Developer · AI Systems Builder
                        </Typography>
                    </motion.div>

                    {/* Morph portre */}
                    <Box sx={{ position: 'relative', mb: 6, display: 'flex', justifyContent: 'center' }}>
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} style={{ position: 'absolute', top: -30, zIndex: 20 }}>
                            <Chip
                                icon={<WorkOutlineIcon sx={{ fontSize: 14 }} />}
                                label="OPEN TO WORK"
                                size="small"
                                sx={{ bgcolor: alpha(surfaces.base, 0.7), backdropFilter: 'blur(8px)', color: accents.cyan, border: `1px solid ${accents.cyan}`, fontWeight: 700, letterSpacing: 1, boxShadow: `0 0 18px ${alpha(accents.cyan, 0.45)}, 0 6px 16px rgba(0,0,0,0.4)`, '& .MuiChip-icon': { color: accents.cyan } }}
                            />
                        </motion.div>

                        {/* Floating tags — sol */}
                        <Box sx={{ position: 'absolute', left: { xs: -40, md: -250, lg: -350 }, top: '50%', transform: 'translateY(-50%)', display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 3 }}>
                            {leftTags.map((tag, i) => (
                                <FloatingTag key={tag} label={tag} color={accents.cyan} side="left" index={i} />
                            ))}
                        </Box>

                        {/* Floating tags — sağ */}
                        <Box sx={{ position: 'absolute', right: { xs: -40, md: -250, lg: -350 }, top: '50%', transform: 'translateY(-50%)', display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 3 }}>
                            {rightTags.map((tag, i) => (
                                <FloatingTag key={tag} label={tag} color={accents.purple} side="right" index={i} />
                            ))}
                        </Box>

                        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: 'easeOut' }}>
                            <Box
                                onClick={() => setShowRobot((prev) => !prev)}
                                role="button"
                                aria-label="Profilbild umschalten"
                                sx={{
                                    width: { xs: 240, md: 360, lg: 400 },
                                    height: { xs: 240, md: 360, lg: 400 },
                                    position: 'relative',
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                    zIndex: 10,
                                    '@keyframes heroFloatPortrait': { '0%': { transform: 'translateY(0px)' }, '100%': { transform: 'translateY(-15px)' } },
                                    animation: 'heroFloatPortrait 6s ease-in-out infinite alternate',
                                }}
                            >
                                {/* Dış dönen halka (dashed) */}
                                <Box aria-hidden sx={{ position: 'absolute', top: '-8%', left: '-8%', right: '-8%', bottom: '-8%', borderRadius: '50%', border: `1px dashed ${alpha(accents.cyan, 0.2)}`, '@keyframes heroSpin': { '100%': { transform: 'rotate(360deg)' } }, animation: 'heroSpin 24s linear infinite' }} />
                                {/* İç accent halka + glow */}
                                <Box aria-hidden sx={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '4px solid', borderColor: showRobot ? accents.purple : accents.cyan, boxShadow: showRobot ? `0 0 40px ${alpha(accents.purple, 0.55)}` : `0 0 40px ${alpha(accents.cyan, 0.5)}`, transition: 'all 1s ease', zIndex: 2 }} />

                                {/* Görseller */}
                                <Box sx={{ position: 'absolute', inset: 4, borderRadius: '50%', overflow: 'hidden', zIndex: 1, bgcolor: '#1f2937' }}>
                                    <Box component="img" src="/profile.jpg" alt="Gökhan Cakmak" sx={{ width: '100%', height: '100%', objectFit: 'cover', opacity: showRobot ? 0 : 1, transition: 'opacity 1s ease' }} />
                                    <Box component="img" src="/cyborg.png" alt="" aria-hidden sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: showRobot ? 1 : 0, transition: 'opacity 1s ease' }} />
                                </Box>
                            </Box>
                        </motion.div>
                    </Box>

                    {/* Bio kutusu */}
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} style={{ width: '100%' }}>
                        <Box
                            sx={{
                                mt: 6,
                                mb: 6,
                                maxWidth: 1100,
                                mx: 'auto',
                                p: { xs: 3, md: 5 },
                                bgcolor: alpha(surfaces.base, 0.6),
                                backdropFilter: 'blur(18px)',
                                borderRadius: 4,
                                border: '1px solid rgba(255,255,255,0.10)',
                                borderTop: `2px solid ${alpha(accents.cyan, 0.45)}`,
                                boxShadow: '0 24px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            <Box aria-hidden sx={{ position: 'absolute', top: 0, left: 0, width: 30, height: 30, borderTop: `2px solid ${accents.cyan}`, borderLeft: `2px solid ${accents.cyan}` }} />
                            <Box aria-hidden sx={{ position: 'absolute', bottom: 0, right: 0, width: 30, height: 30, borderBottom: `2px solid ${accents.purple}`, borderRight: `2px solid ${accents.purple}` }} />

                            <Typography sx={{ fontFamily: 'Victor Mono, monospace', color: accents.cyan, fontSize: '1rem', mb: 3, display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                                <TerminalIcon sx={{ fontSize: 20 }} /> SYSTEM SPEAKING...
                            </Typography>

                            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: { xs: '1.15rem', md: '1.5rem' }, lineHeight: 1.8, fontWeight: 300, textAlign: 'center' }}>
                                <TypewriterText
                                    text="Ich baue Full-Stack-Anwendungen mit React, Node.js und TypeScript und entwerfe darauf aufbauend KI-Systeme, die eigenständig arbeiten. Schwerpunkt: Multi-Agent-Architekturen, ereignisgesteuerte LLM-Workflows und Multi-Tenant-SaaS-Plattformen."
                                    delay={1000}
                                />
                                <Box component="span" sx={{ animation: 'heroBlink 1s step-end infinite', '@keyframes heroBlink': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0 } } }}>
                                    &nbsp;█
                                </Box>
                            </Typography>
                        </Box>
                    </motion.div>

                    {/* Aksiyon butonları */}
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }}>
                        <Stack direction="row" spacing={{ xs: 2, md: 3 }} useFlexGap flexWrap="wrap" justifyContent="center">
                            <Button variant="neon" href="#projects" sx={{ px: 4, py: 1.5, letterSpacing: 1 }}>
                                PROJECTS
                            </Button>
                            <Button variant="ghost" href="/cv-gokhan-cakmak.pdf" target="_blank" rel="noopener" startIcon={<DownloadIcon />} sx={{ px: 4, py: 1.5, letterSpacing: 1, borderColor: alpha(accents.purple, 0.5), color: accents.purple, '&:hover': { borderColor: '#fff', color: '#fff', bgcolor: alpha(accents.purple, 0.15) } }}>
                                RESUME
                            </Button>

                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Button href="https://github.com/cakmakg" target="_blank" aria-label="GitHub" sx={{ minWidth: 0, p: 1.5, color: '#fff', border: '1px solid rgba(255,255,255,0.2)', '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' } }}>
                                    <GitHubIcon />
                                </Button>
                                <Button href="https://www.linkedin.com/in/gökhan-cakmak/" target="_blank" aria-label="LinkedIn" sx={{ minWidth: 0, p: 1.5, color: '#0077b5', border: '1px solid rgba(0,119,181,0.3)', '&:hover': { borderColor: '#0077b5', bgcolor: 'rgba(0,119,181,0.1)' } }}>
                                    <LinkedInIcon />
                                </Button>
                                <Button href="mailto:gokhan.cakmak@web.de" aria-label="E-Mail" sx={{ minWidth: 0, p: 1.5, color: '#ea4335', border: '1px solid rgba(234,67,53,0.3)', '&:hover': { borderColor: '#ea4335', bgcolor: 'rgba(234,67,53,0.1)' } }}>
                                    <EmailIcon />
                                </Button>
                            </Box>
                        </Stack>
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
