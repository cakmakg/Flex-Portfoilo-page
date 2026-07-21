import React from 'react';
import { Box, Typography, Grid, CardMedia, CardContent, CardActions, Button, Chip, Stack } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SecurityIcon from '@mui/icons-material/Security';
import CampaignIcon from '@mui/icons-material/Campaign';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { SectionShell } from './ui/SectionShell';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';
import { Reveal } from './ui/Reveal';
import { accents, alpha } from '../theme/tokens';

// Flagship-Projekte aus dem aktuellen Lebenslauf.
// `github`/`link` sind absichtlich leer, solange keine verifizierte URL vorliegt —
// die Karte blendet den jeweiligen Button dann aus, statt einen toten Link zu zeigen.
const flagshipProjects = [
    {
        title: 'AI Orchestra',
        subtitle: 'Multi-Tenant Autonomous Agent Swarm',
        icon: <SmartToyIcon />,
        accent: accents.purple,
        stack: ['LangGraph', 'Claude 3.5', 'Gemini', 'Atlas Vector Search', 'n8n', 'Express.js', 'Stripe', 'React'],
        description: 'Hub-and-Spoke-System mit zehn spezialisierten KI-Agenten (CEO, CTO, Writer, Analyst, CMO u. a.) auf Basis von LangGraph-State-Machines. Eine 3072-dimensionale RAG-Vektordatenbank über MongoDB Atlas Search hält die Antworten faktentreu, n8n verbindet Gmail, Slack, YouTube und Discord in Echtzeit. Multi-Tenant-Architektur mit Human-in-the-Loop-Freigabe und CFO-Modul: Token-Kosten pro Mandant, Abrechnung über Stripe.',
        github: '',
        link: '',
    },
    {
        title: 'Autonomous SecOps Agent',
        subtitle: 'KI-Cyber-Security-Command-Center',
        icon: <SecurityIcon />,
        accent: accents.cyan,
        stack: ['LangGraph', 'AWS SageMaker (RCF)', 'AWS WAF', 'MCP-Server', 'Next.js 14', 'React Flow', 'AES-256-GCM'],
        description: 'LangGraph-Pipeline vom ThreatAnalyzer über InputGuardrail und HITL-Gate bis zu AutoMitigator, IncidentWriter und QA-Critic. AWS SageMaker (Random Cut Forest) bewertet Anomalien in Security-Logs, AWS WAF sperrt auffällige IPs automatisch — mit 15-minütigem Freigabefenster. Threat-Enrichment über VirusTotal, AbuseIPDB und Shodan; dazu Multi-Tenant-RBAC, AES-256-GCM-verschlüsselte Tenant-Secrets und ein Audit-Log.',
        github: '',
        link: '',
    },
    {
        title: 'werbung-otomation',
        subtitle: 'Multi-Tenant AI-Werbe-Pipeline',
        icon: <CampaignIcon />,
        accent: accents.warn,
        stack: ['Anthropic Managed Agents', 'FastAPI', 'fal.ai', 'Veo 3', 'Kling v3', 'YAML Policy Engine', 'React'],
        description: 'Pipeline aus acht Anthropic-Managed-Agents: Classifier, Scraper, Analyzer, Ad-Copy, Compliance, Creative und Orchestrator. Bild- und Videogenerierung über fal.ai (Veo 3, Kling v3, Nano Banana 2), gesteuert von einer YAML-Policy-Engine mit Tenant-Overrides. Ein Mandant entspricht einem Konfigurationsordner — B2B-SaaS-ready. Aktive Sektoren: Immobilien und Tourismus.',
        github: '',
        link: '',
    },
    {
        title: 'Otonom-Travelagency',
        subtitle: 'Vollautonome KI-Reiseagentur',
        icon: <FlightTakeoffIcon />,
        accent: accents.success,
        stack: ['LangGraph', 'Amadeus API', 'Hotelbeds', 'ChromaDB', 'Stripe', 'Twilio', 'TypeScript', 'FastAPI', 'Next.js'],
        description: 'LangGraph-Pipeline mit acht Knoten und HITL-Approval-Gate vor kritischen Buchungen. Echte API-Integrationen: Amadeus (Flüge), Hotelbeds (Hotels), Stripe (Payment) und Twilio (WhatsApp). ChromaDB-RAG für Destinationsdaten; GDPR-konforme PII-Maskierung von E-Mail, IBAN, Kreditkarte und Pass vor jedem LLM-Aufruf. Monorepo aus TypeScript-Gateway, Python-FastAPI-Agent-Service und Next.js-Frontend.',
        github: '',
        link: '',
    },
];

// Weitere Projekte mit lauffähiger Demo und öffentlichem Repository.
const secondaryProjects = [
    {
        title: 'AI Chat Assistant',
        description: 'RAG-basierter Chatbot für die Analyse von PDF-Dokumenten.',
        image: '/AI.png',
        link: 'https://restructure-work.vercel.app/',
        github: 'https://github.com/cakmakg/restructure-work',
        stack: ['RAG', 'LangChain', 'OpenAI'],
        accent: accents.purple,
    },
    {
        title: 'Shophub',
        description: 'Multi-Tenant SaaS-E-Commerce-Plattform mit branchenspezifischen Blueprints.',
        image: '/wcfinder (2).png',
        link: 'https://shop-app-ten-beige.vercel.app/',
        github: 'https://github.com/cakmakg/ShopApp',
        stack: ['Next.js', 'TypeScript', 'Tailwind'],
        accent: accents.cyan,
    },
    {
        title: 'TravelSync',
        description: 'B2B-Plattform für Reisebüros und Hotels.',
        image: '/travelsync.png',
        link: 'https://travelsync-backend.vercel.app/login',
        github: 'https://github.com/cakmakg/travelsync-backend',
        stack: ['React', 'Node.js', 'MongoDB'],
        accent: accents.cyan,
    },
    {
        title: 'WC Finder',
        description: 'Öffentliche Toiletten in der Nähe finden.',
        image: '/wcfinder.png',
        link: 'https://wc-finder-wheat.vercel.app/',
        github: 'https://github.com/cakmakg/WCFinder',
        stack: ['React', 'Maps API', 'Node.js'],
        accent: accents.success,
    },
];

const StackChips = ({ stack, accent, max }) => (
    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
        {(max ? stack.slice(0, max) : stack).map((tag) => (
            <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: 0.5,
                    height: 22,
                    bgcolor: alpha('#111827', 0.8),
                    color: 'rgba(255,255,255,0.75)',
                    border: `1px solid ${alpha(accent, 0.2)}`,
                }}
            />
        ))}
    </Stack>
);

// Aktionsleiste: rendert einen Button nur, wenn die zugehörige URL wirklich existiert.
const ProjectActions = ({ link, github, accent, isAI }) => {
    if (!link && !github) return null;

    return (
        <CardActions sx={{ p: 3, pt: 2, gap: 2, mt: 'auto' }}>
            {link && (
                <Button
                    variant="contained"
                    size="small"
                    fullWidth
                    endIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
                    href={link}
                    target="_blank"
                    rel="noopener"
                    sx={{ fontSize: '0.8rem', fontWeight: 800, py: 1, bgcolor: accent, color: isAI ? 'white' : 'black', boxShadow: `0 0 16px ${alpha(accent, 0.3)}`, '&:hover': { bgcolor: accent, filter: 'brightness(1.12)', boxShadow: `0 0 24px ${alpha(accent, 0.5)}` } }}
                >
                    LIVE DEMO
                </Button>
            )}
            {github && (
                <Button variant="ghost" size="small" fullWidth startIcon={<GitHubIcon sx={{ fontSize: 16 }} />} href={github} target="_blank" rel="noopener" sx={{ fontSize: '0.8rem', fontWeight: 800, py: 1 }}>
                    SOURCE
                </Button>
            )}
        </CardActions>
    );
};

const FlagshipCard = ({ project }) => (
    <GlassCard accent={project.accent} corners={['tl', 'br']} sx={{ borderRadius: 4 }}>
        {/* Kopfbereich ohne Screenshot: Accent-Verlauf + Icon + Untertitel */}
        <Box
            sx={{
                position: 'relative',
                p: 3,
                pb: 2.5,
                background: `linear-gradient(135deg, ${alpha(project.accent, 0.18)} 0%, transparent 70%)`,
                borderBottom: `1px solid ${alpha(project.accent, 0.15)}`,
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                <Box sx={{ display: 'flex', p: 1.25, borderRadius: 2, color: project.accent, bgcolor: alpha(project.accent, 0.12), border: `1px solid ${alpha(project.accent, 0.3)}` }}>
                    {project.icon}
                </Box>
                <Box>
                    <Typography variant="h6" sx={{ color: 'white', fontSize: '1.15rem', lineHeight: 1.2 }}>
                        {project.title}
                    </Typography>
                    <Typography sx={{ fontFamily: 'Victor Mono, monospace', fontSize: '0.72rem', letterSpacing: 1, color: project.accent, textTransform: 'uppercase' }}>
                        {project.subtitle}
                    </Typography>
                </Box>
            </Box>
            <StackChips stack={project.stack} accent={project.accent} />
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                {project.description}
            </Typography>
        </CardContent>

        <ProjectActions link={project.link} github={project.github} accent={project.accent} isAI />
    </GlassCard>
);

const SecondaryCard = ({ project }) => (
    <GlassCard accent={project.accent} corners={['tl']} sx={{ borderRadius: 4, '&:hover .project-image': { transform: 'scale(1.06)' } }}>
        <Box sx={{ height: 170, overflow: 'hidden', position: 'relative' }}>
            <Box aria-hidden sx={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(11,15,25,0) 40%, rgba(11,15,25,0.6) 100%)' }} />
            <CardMedia component="img" image={project.image} alt={project.title} className="project-image" sx={{ height: '100%', width: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 3, pb: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" sx={{ color: 'white', fontSize: '1.05rem', mb: 1, lineHeight: 1.3 }}>
                {project.title}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, flexGrow: 1, color: 'text.secondary' }}>
                {project.description}
            </Typography>
            <StackChips stack={project.stack} accent={project.accent} max={3} />
        </CardContent>

        <ProjectActions link={project.link} github={project.github} accent={project.accent} />
    </GlassCard>
);

const BlockLabel = ({ children, accent }) => (
    <Typography
        sx={{
            fontFamily: 'Victor Mono, monospace',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: 2,
            color: accent,
            textTransform: 'uppercase',
            mb: 3,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            '&::after': { content: '""', flex: 1, height: '1px', background: `linear-gradient(90deg, ${alpha(accent, 0.4)}, transparent)` },
        }}
    >
        {children}
    </Typography>
);

const Projects = () => (
    <SectionShell id="projects" surface="s3">
        <SectionHeading
            index="03"
            overline="PROJECTS"
            title={<>System <Box component="span" sx={{ color: accents.cyan }}>Builds</Box></>}
            subtitle="Eigene KI-Systeme und Full-Stack-Anwendungen — von der Multi-Agent-Architektur bis zur Plattform."
        />

        <BlockLabel accent={accents.purple}>Flagship — KI-Systeme</BlockLabel>
        <Grid container spacing={4} sx={{ mb: 10 }}>
            {flagshipProjects.map((project, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={project.title} sx={{ display: 'flex' }}>
                    <Reveal delay={index * 0.1} style={{ display: 'flex', width: '100%' }}>
                        <FlagshipCard project={project} />
                    </Reveal>
                </Grid>
            ))}
        </Grid>

        <BlockLabel accent={accents.cyan}>Weitere Projekte</BlockLabel>
        <Grid container spacing={4}>
            {secondaryProjects.map((project, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={project.title} sx={{ display: 'flex' }}>
                    <Reveal delay={index * 0.08} style={{ display: 'flex', width: '100%' }}>
                        <SecondaryCard project={project} />
                    </Reveal>
                </Grid>
            ))}
        </Grid>
    </SectionShell>
);

export default Projects;
