import React from 'react';
import { Box, Container, Typography, Chip, Avatar, Card } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import DataObjectIcon from '@mui/icons-material/DataObject';
import TerminalIcon from '@mui/icons-material/Terminal';
import CloudIcon from '@mui/icons-material/Cloud';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ApiIcon from '@mui/icons-material/Api';
import WebIcon from '@mui/icons-material/Web';
import LayersIcon from '@mui/icons-material/Layers';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import SecurityIcon from '@mui/icons-material/Security';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Frontend Web Dev",
        subtitle: "Core UI & Frameworks",
        icon: <CodeIcon />,
        color: '#00d9ff',
        skills: [
            { name: "TypeScript", icon: <JavascriptIcon sx={{ fontSize: 16 }} /> },
            { name: "React.js", icon: <WebIcon sx={{ fontSize: 16 }} /> },
            { name: "Redux", icon: <DataObjectIcon sx={{ fontSize: 16 }} /> },
            { name: "TailwindCSS", icon: <CssIcon sx={{ fontSize: 16 }} /> },
            { name: "Material-UI", icon: <LayersIcon sx={{ fontSize: 16 }} /> },
            { name: "SASS", icon: <CssIcon sx={{ fontSize: 16 }} /> },
        ]
    },
    {
        category: "Backend & Cloud",
        subtitle: "APIs & Databases",
        icon: <CloudIcon />,
        color: '#10b981',
        skills: [
            { name: "Node.js", icon: <TerminalIcon sx={{ fontSize: 16 }} /> },
            { name: "Next.js", icon: <WebIcon sx={{ fontSize: 16 }} /> },
            { name: "Express.js", icon: <TerminalIcon sx={{ fontSize: 16 }} /> },
            { name: "AWS Cloud", icon: <CloudIcon sx={{ fontSize: 16 }} /> },
            { name: "REST APIs", icon: <ApiIcon sx={{ fontSize: 16 }} /> },
            { name: "SQL / Mongo", icon: <StorageIcon sx={{ fontSize: 16 }} /> },
        ]
    },
    {
        category: "AI Engineering",
        subtitle: "GenAI & Arch",
        icon: <PsychologyIcon />,
        color: '#a855f7',
        skills: [
            { name: "LLM Orchestration", icon: <SmartToyIcon sx={{ fontSize: 16 }} /> },
            { name: "OpenAI / Anthropic", icon: <AutoAwesomeIcon sx={{ fontSize: 16 }} /> },
            { name: "RAG Architecture", icon: <AutoAwesomeIcon sx={{ fontSize: 16 }} /> },
            { name: "AI Agents", icon: <SmartToyIcon sx={{ fontSize: 16 }} /> },
            { name: "Vector DBs", icon: <StorageIcon sx={{ fontSize: 16 }} /> },
            { name: "Adv. Prompting", icon: <DataObjectIcon sx={{ fontSize: 16 }} /> },
        ]
    },
    {
        category: "DevOps & Security",
        subtitle: "Infra & Tools",
        icon: <SecurityIcon />,
        color: '#f59e0b',
        skills: [
            { name: "Docker", icon: <ViewInArIcon sx={{ fontSize: 16 }} /> },
            { name: "CI / CD", icon: <AltRouteIcon sx={{ fontSize: 16 }} /> },
            { name: "Auth & Sec", icon: <SecurityIcon sx={{ fontSize: 16 }} /> },
            { name: "Git / GitHub", icon: <TerminalIcon sx={{ fontSize: 16 }} /> },
            { name: "Agile / Scrum", icon: <LayersIcon sx={{ fontSize: 16 }} /> },
            { name: "Jira", icon: <LayersIcon sx={{ fontSize: 16 }} /> },
        ]
    }
];

const Skills = () => {
    return (
        <Box id="skills" sx={{ py: 12, bgcolor: '#111827', position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ position: 'absolute', top: '10%', left: '-10%', width: '40%', height: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: 0 }} />
            <Box sx={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40%', height: '50%', background: 'radial-gradient(circle, rgba(0,217,255,0.1) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: 0 }} />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 10 }}>
                    <Chip
                        icon={<AltRouteIcon sx={{ fontSize: 16, transform: 'rotate(90deg)' }} />}
                        label="02 — SYSTEM ARCHITEKTUR"
                        sx={{
                            mb: 2,
                            bgcolor: 'rgba(168, 85, 247, 0.1)',
                            color: '#a855f7',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            letterSpacing: 2,
                            border: '1px solid rgba(168, 85, 247, 0.3)',
                            '& .MuiChip-icon': { color: '#a855f7' }
                        }}
                    />
                    <Typography variant="h2" align="center" sx={{ fontWeight: 800, color: 'white', fontFamily: 'Orbitron, sans-serif', fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}>
                        Integrated <Box component="span" sx={{ color: '#a855f7' }}>Pipeline</Box>
                    </Typography>
                    <Typography variant="body1" align="center" sx={{ color: 'rgba(255,255,255,0.6)', maxWidth: 650 }}>
                        Nahtloser Datenfluss von der Benutzeroberfläche über das Backend und Security bis hin zur künstlichen Intelligenz (AI). Jede Schicht ist miteinander verbunden, um hochskalierbare Systeme zu bilden.
                    </Typography>
                </Box>

                {/* Pipeline Layout (Horizontal Scroll for 4 items) */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    alignItems: 'center',
                    justifyContent: { xs: 'center', lg: 'flex-start' },
                    position: 'relative',
                    gap: { xs: 2, lg: 0 },
                    overflowX: { lg: 'auto' },
                    pb: { lg: 4 },
                    px: { lg: 2 },
                    // Setting custom scrollbar for horizontal scrolling
                    '&::-webkit-scrollbar': { height: '8px' },
                    '&::-webkit-scrollbar-track': { background: 'rgba(255,255,255,0.05)', borderRadius: '10px' },
                    '&::-webkit-scrollbar-thumb': { background: 'rgba(168, 85, 247, 0.4)', borderRadius: '10px' },
                    '&::-webkit-scrollbar-thumb:hover': { background: 'rgba(168, 85, 247, 0.8)' }
                }}>

                    {/* Background Connecting Line (Desktop) */}
                    <Box sx={{
                        display: { xs: 'none', lg: 'block' },
                        position: 'absolute',
                        top: '120px',
                        left: '5%',
                        right: '5%',
                        height: 2,
                        bgcolor: 'rgba(255,255,255,0.05)',
                        zIndex: 0
                    }} />

                    {skillsData.map((category, index) => (
                        <React.Fragment key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                style={{ flex: '0 0 auto', width: '100%', maxWidth: '280px', zIndex: 1 }}
                            >
                                <Card
                                    sx={{
                                        position: 'relative',
                                        height: '100%',
                                        minHeight: 330,
                                        borderRadius: 3,
                                        bgcolor: 'rgba(31, 41, 55, 0.4)',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        borderTop: `2px solid ${category.color}60`,
                                        backdropFilter: 'blur(10px)',
                                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                        overflow: 'visible',
                                        '&:hover': {
                                            borderColor: `${category.color}40`,
                                            boxShadow: `0 10px 20px rgba(0,0,0,0.5), 0 0 15px ${category.color}20`,
                                            transform: 'translateY(-4px)'
                                        }
                                    }}
                                >
                                    <Box sx={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, background: `radial-gradient(circle, ${category.color}30 0%, transparent 70%)`, filter: 'blur(15px)', zIndex: 0 }} />

                                    <Box sx={{ textAlign: 'center', p: 3, position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                                        <Avatar
                                            sx={{
                                                width: 50,
                                                height: 50,
                                                bgcolor: 'rgba(15, 15, 26, 0.8)',
                                                color: category.color,
                                                mx: 'auto',
                                                mb: 1.5,
                                                border: `1px solid ${category.color}40`,
                                                boxShadow: `inset 0 0 8px ${category.color}20`,
                                                zIndex: 2
                                            }}
                                        >
                                            {React.cloneElement(category.icon, { sx: { fontSize: 26 } })}
                                        </Avatar>

                                        <Typography variant="h6" fontWeight={800} sx={{ color: 'white', fontFamily: 'Orbitron, sans-serif', fontSize: '0.95rem', letterSpacing: 0.5 }}>
                                            {category.category}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', display: 'block', mb: 3, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>
                                            {category.subtitle}
                                        </Typography>

                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mt: 'auto' }}>
                                            {category.skills.map((skill, i) => (
                                                <Chip
                                                    key={i}
                                                    icon={skill.icon}
                                                    label={skill.name}
                                                    sx={{
                                                        bgcolor: 'rgba(17, 24, 39, 0.8)',
                                                        color: 'rgba(255,255,255,0.8)',
                                                        fontWeight: 600,
                                                        fontSize: '0.62rem',
                                                        height: 24,
                                                        px: 0.5,
                                                        border: '1px solid',
                                                        borderColor: 'rgba(255,255,255,0.05)',
                                                        transition: 'all 0.2s',
                                                        '& .MuiChip-icon': {
                                                            color: category.color,
                                                            fontSize: 14,
                                                            marginLeft: '6px'
                                                        },
                                                        '&:hover': {
                                                            bgcolor: `${category.color}20`,
                                                            color: 'white',
                                                            borderColor: category.color,
                                                            boxShadow: `0 0 10px ${category.color}30`,
                                                            '& .MuiChip-icon': { color: 'white' },
                                                        }
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>
                                </Card>
                            </motion.div>

                            {/* Arrow / Connection */}
                            {index < skillsData.length - 1 && (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', lg: 'row' },
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: { xs: '100%', lg: '60px' },
                                        height: { xs: '60px', lg: '100%' },
                                        zIndex: 1,
                                        position: 'relative',
                                        flexShrink: 0
                                    }}
                                >
                                    {/* Desktop Arrow */}
                                    <Box sx={{ display: { xs: 'none', lg: 'flex' }, flexDirection: 'column', alignItems: 'center', transform: 'translateY(-40px)' }}>
                                        <CompareArrowsIcon sx={{ color: '#00d9ff', fontSize: 28, opacity: 0.5, filter: 'drop-shadow(0 0 5px rgba(0,217,255,0.5))' }} />
                                    </Box>

                                    {/* Mobile Arrow */}
                                    <Box sx={{ display: { xs: 'flex', lg: 'none' }, height: '100%', alignItems: 'center' }}>
                                        <CompareArrowsIcon sx={{ color: '#00d9ff', fontSize: 32, opacity: 0.5, transform: 'rotate(90deg)', filter: 'drop-shadow(0 0 5px rgba(0,217,255,0.5))' }} />
                                    </Box>
                                </Box>
                            )}
                        </React.Fragment>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Skills;
