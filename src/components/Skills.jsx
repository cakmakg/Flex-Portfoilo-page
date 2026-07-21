import React from 'react';
import { Box, Typography, Chip, Avatar } from '@mui/material';
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
import { SectionShell } from './ui/SectionShell';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';
import { Reveal } from './ui/Reveal';
import { accents, alpha } from '../theme/tokens';

const iconSx = { fontSize: 16 };

// Gruppen und Inhalte gespiegelt aus dem aktuellen Lebenslauf
// (Abschnitt "Technische Kenntnisse & Sprachen").
const skillsData = [
    {
        category: 'AI & Agentic Systems',
        subtitle: 'Orchestrierung',
        icon: <PsychologyIcon />,
        color: accents.purple,
        skills: [
            { name: 'LangGraph', icon: <AltRouteIcon sx={iconSx} /> },
            { name: 'Multi-Agent (10+)', icon: <SmartToyIcon sx={iconSx} /> },
            { name: 'Managed Agents', icon: <SmartToyIcon sx={iconSx} /> },
            { name: 'RAG', icon: <AutoAwesomeIcon sx={iconSx} /> },
            { name: 'HITL', icon: <SecurityIcon sx={iconSx} /> },
            { name: 'Critic-Agents', icon: <AutoAwesomeIcon sx={iconSx} /> },
            { name: 'MCP', icon: <ApiIcon sx={iconSx} /> },
        ],
    },
    {
        category: 'LLM · Cloud & ML',
        subtitle: 'Modelle & Infrastruktur',
        icon: <CloudIcon />,
        color: accents.warn,
        skills: [
            { name: 'Claude (opus-4)', icon: <AutoAwesomeIcon sx={iconSx} /> },
            { name: 'Gemini', icon: <AutoAwesomeIcon sx={iconSx} /> },
            { name: 'OpenAI GPT', icon: <SmartToyIcon sx={iconSx} /> },
            { name: 'Model Routing', icon: <AltRouteIcon sx={iconSx} /> },
            { name: 'AWS Bedrock', icon: <CloudIcon sx={iconSx} /> },
            { name: 'SageMaker RCF', icon: <CloudIcon sx={iconSx} /> },
            { name: 'AWS WAF', icon: <SecurityIcon sx={iconSx} /> },
            { name: 'fal.ai', icon: <AutoAwesomeIcon sx={iconSx} /> },
        ],
    },
    {
        category: 'Backend & Daten',
        subtitle: 'APIs & Datenbanken',
        icon: <StorageIcon />,
        color: accents.success,
        skills: [
            { name: 'Node.js', icon: <TerminalIcon sx={iconSx} /> },
            { name: 'Express.js', icon: <TerminalIcon sx={iconSx} /> },
            { name: 'FastAPI (Python)', icon: <ApiIcon sx={iconSx} /> },
            { name: 'TypeScript', icon: <JavascriptIcon sx={iconSx} /> },
            { name: 'REST & WebSocket', icon: <ApiIcon sx={iconSx} /> },
            { name: 'MongoDB', icon: <StorageIcon sx={iconSx} /> },
            { name: 'Atlas Vector Search', icon: <StorageIcon sx={iconSx} /> },
            { name: 'ChromaDB', icon: <StorageIcon sx={iconSx} /> },
            { name: 'SQL', icon: <StorageIcon sx={iconSx} /> },
        ],
    },
    {
        category: 'Frontend',
        subtitle: 'UI & Frameworks',
        icon: <CodeIcon />,
        color: accents.cyan,
        skills: [
            { name: 'React.js', icon: <WebIcon sx={iconSx} /> },
            { name: 'Next.js 14', icon: <WebIcon sx={iconSx} /> },
            { name: 'TypeScript', icon: <JavascriptIcon sx={iconSx} /> },
            { name: 'Redux / Zustand', icon: <DataObjectIcon sx={iconSx} /> },
            { name: 'React Flow', icon: <LayersIcon sx={iconSx} /> },
            { name: 'TailwindCSS', icon: <CssIcon sx={iconSx} /> },
            { name: 'Material-UI', icon: <LayersIcon sx={iconSx} /> },
        ],
    },
    {
        category: 'Security & DevOps',
        subtitle: 'Betrieb & Sicherheit',
        icon: <SecurityIcon />,
        color: accents.purple,
        skills: [
            { name: 'AES-256-GCM', icon: <SecurityIcon sx={iconSx} /> },
            { name: 'GDPR PII-Masking', icon: <SecurityIcon sx={iconSx} /> },
            { name: 'Multi-Tenant RBAC', icon: <SecurityIcon sx={iconSx} /> },
            { name: 'JWT / OAuth', icon: <SecurityIcon sx={iconSx} /> },
            { name: 'Docker', icon: <ViewInArIcon sx={iconSx} /> },
            { name: 'CI / CD', icon: <AltRouteIcon sx={iconSx} /> },
            { name: 'Playwright', icon: <TerminalIcon sx={iconSx} /> },
            { name: 'Git / GitHub', icon: <TerminalIcon sx={iconSx} /> },
        ],
    },
];

const SkillCard = ({ category }) => (
    <GlassCard accent={category.color} corners={['tl']} sx={{ minHeight: 340, borderRadius: 3, overflow: 'visible' }}>
        <Box aria-hidden sx={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, background: `radial-gradient(circle, ${alpha(category.color, 0.2)} 0%, transparent 70%)`, filter: 'blur(15px)', zIndex: 0 }} />

        <Box sx={{ textAlign: 'center', p: 3, position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Avatar
                sx={{
                    width: 50,
                    height: 50,
                    bgcolor: alpha('#0f0f1a', 0.8),
                    color: category.color,
                    mx: 'auto',
                    mb: 1.5,
                    border: `1px solid ${alpha(category.color, 0.25)}`,
                    boxShadow: `inset 0 0 8px ${alpha(category.color, 0.12)}`,
                }}
            >
                {React.cloneElement(category.icon, { sx: { fontSize: 26 } })}
            </Avatar>

            <Typography variant="h6" sx={{ color: 'white', fontSize: '0.95rem', letterSpacing: 0.5 }}>
                {category.category}
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', display: 'block', mb: 3, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>
                {category.subtitle}
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mt: 'auto' }}>
                {category.skills.map((skill) => (
                    <Chip
                        key={skill.name}
                        icon={skill.icon}
                        label={skill.name}
                        sx={{
                            bgcolor: alpha('#111827', 0.8),
                            color: 'rgba(255,255,255,0.8)',
                            fontWeight: 600,
                            fontSize: '0.62rem',
                            height: 24,
                            px: 0.5,
                            border: '1px solid rgba(255,255,255,0.06)',
                            transition: 'all 0.2s',
                            '& .MuiChip-icon': { color: category.color, fontSize: 14, marginLeft: '6px' },
                            '&:hover': {
                                bgcolor: alpha(category.color, 0.12),
                                color: 'white',
                                borderColor: category.color,
                                boxShadow: `0 0 10px ${alpha(category.color, 0.2)}`,
                                '& .MuiChip-icon': { color: 'white' },
                            },
                        }}
                    />
                ))}
            </Box>
        </Box>
    </GlassCard>
);

const Skills = () => (
    <SectionShell id="skills" surface="s2" bg="glow" maxWidth="xl">
        <SectionHeading
            index="02"
            overline="SYSTEM ARCHITEKTUR"
            accent={accents.purple}
            icon={<AltRouteIcon sx={{ fontSize: 16, transform: 'rotate(90deg)' }} />}
            title={<>Integrated <Box component="span" sx={{ color: accents.purple }}>Pipeline</Box></>}
            subtitle="Von der Benutzeroberfläche über Backend und Datenhaltung bis zu agentischen KI-Systemen — jede Schicht greift in die nächste."
        />

        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                alignItems: 'center',
                justifyContent: { xs: 'center', lg: 'flex-start' },
                position: 'relative',
                gap: { xs: 2, lg: 0 },
                overflowX: { lg: 'auto' },
                pb: { lg: 4 },
                px: { lg: 2 },
            }}
        >
            <Box aria-hidden sx={{ display: { xs: 'none', lg: 'block' }, position: 'absolute', top: 120, left: '5%', right: '5%', height: 2, bgcolor: 'rgba(255,255,255,0.05)', zIndex: 0 }} />

            {skillsData.map((category, index) => (
                <React.Fragment key={category.category}>
                    <Reveal delay={index * 0.1} style={{ flex: '0 0 auto', width: '100%', maxWidth: 280, zIndex: 1 }}>
                        <SkillCard category={category} />
                    </Reveal>

                    {index < skillsData.length - 1 && (
                        <Box
                            aria-hidden
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: { xs: '100%', lg: 60 },
                                height: { xs: 60, lg: '100%' },
                                zIndex: 1,
                                flexShrink: 0,
                            }}
                        >
                            <CompareArrowsIcon
                                sx={{
                                    color: accents.cyan,
                                    fontSize: { xs: 32, lg: 28 },
                                    opacity: 0.5,
                                    transform: { xs: 'rotate(90deg)', lg: 'translateY(-40px)' },
                                    filter: `drop-shadow(0 0 5px ${alpha(accents.cyan, 0.5)})`,
                                }}
                            />
                        </Box>
                    )}
                </React.Fragment>
            ))}
        </Box>
    </SectionShell>
);

export default Skills;
