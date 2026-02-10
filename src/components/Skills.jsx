import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip, Avatar } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import DataObjectIcon from '@mui/icons-material/DataObject';
import TerminalIcon from '@mui/icons-material/Terminal';
import CloudIcon from '@mui/icons-material/Cloud';
import GitHubIcon from '@mui/icons-material/GitHub';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ApiIcon from '@mui/icons-material/Api';
import WebIcon from '@mui/icons-material/Web';
import LayersIcon from '@mui/icons-material/Layers';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "AI & Machine Learning",
        icon: <PsychologyIcon />,
        color: '#a855f7',
        skills: [
            { name: "RAG Architecture", icon: <AutoAwesomeIcon sx={{ fontSize: 16 }} /> },
            { name: "LangChain", icon: <SmartToyIcon sx={{ fontSize: 16 }} /> },
            { name: "OpenAI API", icon: <SmartToyIcon sx={{ fontSize: 16 }} /> },
            { name: "Gemini API", icon: <AutoAwesomeIcon sx={{ fontSize: 16 }} /> },
            { name: "Vector DB", icon: <StorageIcon sx={{ fontSize: 16 }} /> },
            { name: "Embeddings", icon: <DataObjectIcon sx={{ fontSize: 16 }} /> },
        ]
    },
    {
        category: "Frontend",
        icon: <CodeIcon />,
        color: '#00d9ff',
        skills: [
            { name: "React.js", icon: <WebIcon sx={{ fontSize: 16 }} /> },
            { name: "Next.js", icon: <WebIcon sx={{ fontSize: 16 }} /> },
            { name: "TypeScript", icon: <JavascriptIcon sx={{ fontSize: 16 }} /> },
            { name: "Tailwind", icon: <CssIcon sx={{ fontSize: 16 }} /> },
            { name: "Material UI", icon: <LayersIcon sx={{ fontSize: 16 }} /> },
            { name: "Redux", icon: <DataObjectIcon sx={{ fontSize: 16 }} /> },
        ]
    },
    {
        category: "Backend & Cloud",
        icon: <CloudIcon />,
        color: '#10b981',
        skills: [
            { name: "Node.js", icon: <TerminalIcon sx={{ fontSize: 16 }} /> },
            { name: "Python", icon: <CodeIcon sx={{ fontSize: 16 }} /> },
            { name: "AWS", icon: <CloudIcon sx={{ fontSize: 16 }} /> },
            { name: "Docker", icon: <ViewInArIcon sx={{ fontSize: 16 }} /> },
            { name: "PostgreSQL", icon: <StorageIcon sx={{ fontSize: 16 }} /> },
            { name: "REST APIs", icon: <ApiIcon sx={{ fontSize: 16 }} /> },
        ]
    }
];

const Skills = () => {
    return (
        <Box id="skills" sx={{ py: 10, bgcolor: '#0f0f1a', position: 'relative', overflow: 'hidden' }}>
            {/* AI Background Pattern */}
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
                    backgroundSize: '40px 40px',
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Typography
                    variant="h2"
                    align="center"
                    sx={{
                        mb: 2,
                        fontWeight: 700,
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2
                    }}
                >
                    <PsychologyIcon sx={{ fontSize: 40, color: '#a855f7' }} />
                    Tech Stack
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 600, mx: 'auto', color: 'rgba(255,255,255,0.6)' }}>
                    Moderne Technologien für AI-gestützte Webanwendungen
                </Typography>

                <Grid container spacing={4}>
                    {skillsData.map((category, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                style={{ height: '100%' }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        height: '100%',
                                        borderRadius: 3,
                                        bgcolor: 'rgba(255,255,255,0.03)',
                                        border: '1px solid',
                                        borderColor: 'rgba(255,255,255,0.1)',
                                        backdropFilter: 'blur(10px)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: category.color,
                                            boxShadow: `0 0 30px ${category.color}20`,
                                        }
                                    }}
                                >
                                    {/* Header */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                        <Avatar
                                            sx={{
                                                width: 48,
                                                height: 48,
                                                bgcolor: `${category.color}20`,
                                                color: category.color,
                                            }}
                                        >
                                            {category.icon}
                                        </Avatar>
                                        <Typography variant="h6" fontWeight={600} sx={{ color: 'white' }}>
                                            {category.category}
                                        </Typography>
                                    </Box>

                                    {/* Skills Chips with Icons */}
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {category.skills.map((skill, i) => (
                                            <Chip
                                                key={i}
                                                icon={skill.icon}
                                                label={skill.name}
                                                sx={{
                                                    bgcolor: `${category.color}15`,
                                                    color: category.color,
                                                    fontWeight: 500,
                                                    border: '1px solid',
                                                    borderColor: `${category.color}30`,
                                                    '& .MuiChip-icon': {
                                                        color: category.color,
                                                    },
                                                    '&:hover': {
                                                        bgcolor: category.color,
                                                        color: 'white',
                                                        '& .MuiChip-icon': {
                                                            color: 'white',
                                                        },
                                                    }
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Skills;
