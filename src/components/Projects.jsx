import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Chip, Stack, Tabs, Tab } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CodeIcon from '@mui/icons-material/Code';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        title: "AI Chat Assistant",
        description: "RAG-basierter Chatbot für PDF-Dokumentenanalyse.",
        image: "/projects1.jpg",
        link: "#",
        github: "https://github.com/cakmakg",
        tags: ["RAG", "LangChain", "OpenAI"],
        category: "ai",
        isAI: true
    },
    {
        title: "Personnel API",
        description: "Backend service for managing personnel data.",
        image: "/projects1.jpg",
        link: "https://two0-personnelapi.onrender.com",
        github: "https://github.com/cakmakg",
        tags: ["Node.js", "Express"],
        category: "backend",
        isAI: false
    },
    {
        title: "Todo App",
        description: "Task management with authentication.",
        image: "/projects2.jpg",
        link: "https://fs-todo-app-client-beta.vercel.app/",
        github: "https://github.com/cakmakg",
        tags: ["React", "Node.js"],
        category: "fullstack",
        isAI: false
    },
    {
        title: "Stock App",
        description: "Inventory tracking system.",
        image: "/projects3.jpg",
        link: "https://fs-stock-app-1.vercel.app/",
        github: "https://github.com/cakmakg",
        tags: ["React", "Redux"],
        category: "frontend",
        isAI: false
    },
    {
        title: "Shopping Cart",
        description: "E-commerce cart functionality.",
        image: "/projects1.jpg",
        link: "https://shopping-card-omega-five.vercel.app/",
        github: "https://github.com/cakmakg",
        tags: ["React", "Context"],
        category: "frontend",
        isAI: false
    },
    {
        title: "Event Platform",
        description: "Event management platform.",
        image: "/projects3.jpg",
        link: "https://zusammenfun.onrender.com/",
        github: "https://github.com/cakmakg",
        tags: ["MERN Stack"],
        category: "fullstack",
        isAI: false
    }
];

const categories = [
    { label: "Alle", value: "all" },
    { label: "AI/ML", value: "ai" },
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Full Stack", value: "fullstack" },
];

const CARD_HEIGHT = 340;

const ProjectCard = ({ project }) => (
    <Card
        sx={{
            width: '100%',
            height: CARD_HEIGHT,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 2,
            overflow: 'hidden',
            bgcolor: 'rgba(255,255,255,0.03)',
            border: '1px solid',
            borderColor: project.isAI ? 'rgba(168, 85, 247, 0.3)' : 'rgba(255,255,255,0.1)',
            transition: 'all 0.3s ease',
            position: 'relative',
            '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: project.isAI ? '0 0 30px rgba(168, 85, 247, 0.2)' : '0 8px 24px rgba(0,0,0,0.2)',
                borderColor: project.isAI ? '#a855f7' : '#00d9ff',
            }
        }}
    >
        {/* AI Badge */}
        {project.isAI && (
            <Box
                sx={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    zIndex: 2,
                    bgcolor: '#a855f7',
                    color: 'white',
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    fontSize: '0.7rem',
                    fontWeight: 600,
                }}
            >
                <SmartToyIcon sx={{ fontSize: 14 }} />
                AI
            </Box>
        )}

        {/* Image */}
        <Box sx={{ height: 140, overflow: 'hidden', position: 'relative' }}>
            <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
            <Chip
                label={project.category}
                size="small"
                sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    bgcolor: '#00d9ff',
                    color: 'white',
                    fontSize: '0.65rem',
                    height: 22,
                    textTransform: 'capitalize',
                }}
            />
        </Box>

        {/* Content */}
        <CardContent sx={{ height: 120, p: 2, pb: 1 }}>
            <Typography variant="subtitle1" fontWeight={600} noWrap sx={{ color: 'white' }}>
                {project.title}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    my: 1,
                    height: 40,
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    color: 'rgba(255,255,255,0.6)'
                }}
            >
                {project.description}
            </Typography>
            <Stack direction="row" spacing={0.5}>
                {project.tags.slice(0, 2).map((tag, i) => (
                    <Chip
                        key={i}
                        label={tag}
                        size="small"
                        sx={{
                            fontSize: '0.65rem',
                            height: 20,
                            bgcolor: 'rgba(0, 217, 255, 0.1)',
                            color: '#00d9ff',
                            border: '1px solid rgba(0, 217, 255, 0.3)'
                        }}
                    />
                ))}
            </Stack>
        </CardContent>

        {/* Actions */}
        <CardActions sx={{ height: 60, p: 2, pt: 0, gap: 1, mt: 'auto' }}>
            <Button
                variant="contained"
                size="small"
                fullWidth
                endIcon={<LaunchIcon sx={{ fontSize: 14 }} />}
                href={project.link}
                target="_blank"
                sx={{
                    fontSize: '0.75rem',
                    py: 0.75,
                    bgcolor: project.isAI ? '#a855f7' : '#00d9ff',
                    '&:hover': {
                        bgcolor: project.isAI ? '#9333ea' : '#00b8d9'
                    }
                }}
            >
                Demo
            </Button>
            <Button
                variant="outlined"
                size="small"
                fullWidth
                startIcon={<GitHubIcon sx={{ fontSize: 14 }} />}
                href={project.github}
                target="_blank"
                sx={{
                    fontSize: '0.75rem',
                    py: 0.75,
                    borderColor: 'rgba(255,255,255,0.3)',
                    color: 'rgba(255,255,255,0.8)',
                    '&:hover': {
                        borderColor: '#00d9ff',
                        color: '#00d9ff',
                        bgcolor: 'rgba(0, 217, 255, 0.1)'
                    }
                }}
            >
                Code
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
        <Box id="projects" sx={{ py: 8, bgcolor: '#1a1a2e' }}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 1 }}>
                    <CodeIcon sx={{ color: '#00d9ff', fontSize: 32 }} />
                    <Typography variant="h2" align="center" sx={{ fontWeight: 700, color: 'white' }}>
                        Projekte
                    </Typography>
                </Box>
                <Typography variant="body2" align="center" sx={{ mb: 4, color: 'rgba(255,255,255,0.6)' }}>
                    Eine Auswahl meiner neuesten Arbeiten
                </Typography>

                {/* Filter Tabs */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                    <Tabs
                        value={activeCategory}
                        onChange={(e, v) => setActiveCategory(v)}
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{
                            '& .MuiTabs-indicator': { bgcolor: '#00d9ff' },
                            '& .MuiTab-root': {
                                textTransform: 'none',
                                fontWeight: 500,
                                minWidth: 80,
                                fontSize: '0.875rem',
                                color: 'rgba(255,255,255,0.6)',
                                '&.Mui-selected': { color: '#00d9ff' }
                            },
                        }}
                    >
                        {categories.map(cat => (
                            <Tab key={cat.value} label={cat.label} value={cat.value} />
                        ))}
                    </Tabs>
                </Box>

                {/* Project Grid */}
                <Grid container spacing={3}>
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <Grid item xs={12} sm={6} md={4} key={project.title}>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.25 }}
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
