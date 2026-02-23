import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Chip, Stack, Tabs, Tab } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import TerminalIcon from '@mui/icons-material/Terminal';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        title: "AI Chat Assistant",
        description: "RAG-basierter Chatbot für PDF-Dokumentenanalyse.",
        image: "/AI.png",
        link: "https://restructure-work.vercel.app/",
        github: "https://github.com/cakmakg/restructure-work",
        tags: ["RAG", "LangChain", "OpenAI"],
        category: "ai",
        isAI: true
    },
    {
        title: "WC Finder",
        description: "Öffentliche Toiletten in der Nähe finden.",
        image: "/wcfinder.png",
        link: "https://wc-finder-wheat.vercel.app/",
        github: "https://github.com/cakmakg/WCFinder",
        tags: ["React", "Maps API", "Node.js"],
        category: "fullstack",
        isAI: false
    },
    {
        title: "TravelSync",
        description: "B2B-Plattform für Reisebüros und Hotels.",
        image: "/travelsync.png",
        link: "https://travelsync-backend.vercel.app/login",
        github: "https://github.com/cakmakg/travelsync-backend",
        tags: ["React", "Node.js", "MongoDB"],
        category: "fullstack",
        isAI: false
    },
    {
        title: "Stock App",
        description: "Lagerbestandsverwaltung mit Dashboard.",
        image: "/Screenshot 2026-02-10 131842.png",
        link: "https://fs-stock-app-1.vercel.app/",
        github: "https://github.com/cakmakg",
        tags: ["React", "Redux"],
        category: "frontend",
        isAI: false
    },
    {
        title: "Travel Agency",
        description: "Reisebüro-Website mit Buchungsfunktion.",
        image: "/travelagenvy.png",
        link: "https://travel-agency-eight-gamma.vercel.app/",
        github: "https://github.com/cakmakg/TravelAgency",
        tags: ["React", "Tailwind"],
        category: "frontend",
        isAI: false
    },
    {
        title: "Event Platform",
        description: "Veranstaltungsplattform mit Nutzerregistrierung.",
        image: "/eventapp.png",
        link: "https://zusammenfun.onrender.com/",
        github: "https://github.com/cakmakg",
        tags: ["MERN Stack"],
        category: "fullstack",
        isAI: false
    },
    {
        title: "The Pulse Global",
        description: "OSINT platform.",
        image: "/NEWOSINT.png",
        link: "https://newosint.vercel.app/",
        github: "https://github.com/cakmakg/NEWOSINT",
        tags: ["AI"],
        category: "fullstack",
        isAI: false
    },
    {
        title: "Shophub",
        description: "Multi-Tenant SaaS E-Commerce-Plattform mit branchenspezifischen Blueprints.",
        image: "/wcfinder (2).png",
        link: "https://shop-app-ten-beige.vercel.app/",
        github: "https://github.com/cakmakg/ShopApp",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        category: "fullstack",
        isAI: false
    }
];

const categories = [
    { label: "ALL", value: "all" },
    { label: "AI & ML", value: "ai" },
    { label: "FRONTEND", value: "frontend" },
    { label: "BACKEND", value: "backend" },
    { label: "FULLSTACK", value: "fullstack" },
];

const ProjectCard = ({ project }) => (
    <Card
        sx={{
            width: '100%',
            height: '100%',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 4,
            overflow: 'hidden',
            bgcolor: 'rgba(31, 41, 55, 0.4)', // slate-800 translucent
            border: '1px solid',
            borderColor: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            position: 'relative',
            '&:hover': {
                transform: 'translateY(-8px)',
                bgcolor: 'rgba(31, 41, 55, 0.7)',
                boxShadow: project.isAI ? '0 15px 30px rgba(168, 85, 247, 0.2)' : '0 15px 30px rgba(0, 217, 255, 0.15)',
                borderColor: project.isAI ? 'rgba(168, 85, 247, 0.4)' : 'rgba(0, 217, 255, 0.4)',
                '& .project-image': {
                    transform: 'scale(1.05)'
                }
            }
        }}
    >
        {/* Decorative corner borders */}
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: 20, height: 20, borderTop: '2px solid', borderLeft: '2px solid', borderColor: project.isAI ? '#a855f7' : '#00d9ff', zIndex: 10, opacity: 0.5 }} />

        {/* AI Badge */}
        {project.isAI && (
            <Box
                sx={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    zIndex: 2,
                    bgcolor: 'rgba(168, 85, 247, 0.8)',
                    backdropFilter: 'blur(4px)',
                    color: 'white',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: 1,
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 0 15px rgba(168, 85, 247, 0.5)'
                }}
            >
                <SmartToyIcon sx={{ fontSize: 14 }} />
                AI POWERED
            </Box>
        )}

        {/* Image */}
        <Box sx={{ height: 160, overflow: 'hidden', position: 'relative' }}>
            {/* Dark overlay so it blends better */}
            <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(17,24,39,0.2)', zIndex: 1, pointerEvents: 'none' }} />

            <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                className="project-image"
                sx={{ height: '100%', width: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
            />
            <Chip
                label={project.category.toUpperCase()}
                size="small"
                sx={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    bgcolor: 'rgba(0, 217, 255, 0.8)',
                    backdropFilter: 'blur(4px)',
                    color: 'black',
                    fontWeight: 800,
                    fontSize: '0.65rem',
                    letterSpacing: 1,
                    height: 22,
                    zIndex: 2,
                    border: '1px solid rgba(255,255,255,0.2)'
                }}
            />
        </Box>

        {/* Content */}
        <CardContent sx={{ flexGrow: 1, p: 3, pb: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography
                variant="h6"
                sx={{
                    color: 'white',
                    fontFamily: 'Orbitron, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    mb: 1,
                    lineHeight: 1.3,
                    minHeight: '2.6rem', // 2 lines
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                }}
            >
                {project.title}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    mb: 2,
                    flexGrow: 1,
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.5,
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical'
                }}
            >
                {project.description}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 'auto', gap: 1 }}>
                {project.tags.slice(0, 3).map((tag, i) => (
                    <Chip
                        key={i}
                        label={tag}
                        size="small"
                        sx={{
                            fontSize: '0.65rem',
                            fontWeight: 600,
                            letterSpacing: 0.5,
                            height: 22,
                            bgcolor: 'rgba(17, 24, 39, 0.8)',
                            color: 'rgba(255,255,255,0.7)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    />
                ))}
            </Stack>
        </CardContent>

        {/* Actions */}
        <CardActions sx={{ p: 3, pt: 2, gap: 2, mt: 'auto' }}>
            <Button
                variant="contained"
                size="small"
                fullWidth
                endIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
                href={project.link}
                target="_blank"
                sx={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    py: 1,
                    bgcolor: project.isAI ? '#a855f7' : '#00d9ff',
                    color: project.isAI ? 'white' : 'black',
                    '&:hover': {
                        bgcolor: project.isAI ? '#9333ea' : '#00b8d9',
                        boxShadow: project.isAI ? '0 0 20px rgba(168,85,247,0.4)' : '0 0 20px rgba(0,217,255,0.4)'
                    }
                }}
            >
                LIVE DEMO
            </Button>
            <Button
                variant="outlined"
                size="small"
                fullWidth
                startIcon={<GitHubIcon sx={{ fontSize: 16 }} />}
                href={project.github}
                target="_blank"
                sx={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    py: 1,
                    borderColor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    '&:hover': {
                        borderColor: '#fff',
                        bgcolor: 'rgba(255,255,255,0.1)'
                    }
                }}
            >
                SOURCE
            </Button>
        </CardActions>
    </Card>
);

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <Box id="projects" sx={{ py: 12, bgcolor: '#172033', position: 'relative' }}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 6 }}>
                    <Chip
                        icon={<TerminalIcon sx={{ fontSize: 16 }} />}
                        label="04 — PROJECTS"
                        sx={{
                            mb: 2,
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
                        align="center"
                        sx={{
                            fontWeight: 800,
                            color: 'white',
                            fontFamily: 'Orbitron, sans-serif',
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            mb: 2
                        }}
                    >
                        System <Box component="span" sx={{ color: '#00d9ff' }}>Builds</Box>
                    </Typography>
                    <Typography variant="body1" align="center" sx={{ color: 'rgba(255,255,255,0.6)', maxWidth: 600 }}>
                        Eine Auswahl meiner neuesten Entwicklungen & Architekturen.
                    </Typography>
                </Box>

                {/* Filter Tabs - Pill Style */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
                    <Tabs
                        value={activeCategory}
                        onChange={(e, v) => setActiveCategory(v)}
                        variant="scrollable"
                        scrollButtons="auto"
                        TabIndicatorProps={{ style: { display: 'none' } }} // Hide default underline
                        sx={{
                            p: 0.5,
                            bgcolor: 'rgba(17, 24, 39, 0.6)',
                            borderRadius: 10,
                            border: '1px solid rgba(255,255,255,0.1)',
                            '& .MuiTab-root': {
                                textTransform: 'none',
                                fontWeight: 600,
                                fontSize: '0.8rem',
                                letterSpacing: 1,
                                minHeight: 36,
                                py: 0.5,
                                px: 3,
                                mx: 0.5,
                                my: 0.5,
                                borderRadius: 8,
                                color: 'rgba(255,255,255,0.6)',
                                transition: 'all 0.3s',
                                '&.Mui-selected': {
                                    color: '#111827',
                                    bgcolor: '#00d9ff',
                                    boxShadow: '0 0 15px rgba(0,217,255,0.4)'
                                },
                                '&:hover:not(.Mui-selected)': {
                                    bgcolor: 'rgba(255,255,255,0.05)',
                                    color: 'white'
                                }
                            },
                        }}
                    >
                        {categories.map(cat => (
                            <Tab key={cat.value} label={cat.label} value={cat.value} disableRipple />
                        ))}
                    </Tabs>
                </Box>

                {/* Project Grid */}
                <Grid container spacing={4}>
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <Grid item xs={12} sm={6} md={4} key={project.title} sx={{ display: 'flex', flexDirection: 'column' }}>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, width: '100%' }}
                                >
                                    <ProjectCard project={project} />
                                </motion.div>
                            </Grid>
                        ))}
                    </AnimatePresence>
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
