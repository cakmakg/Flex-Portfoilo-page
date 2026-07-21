import React from 'react';
import { Box, Typography, CardContent, CardActions, Button, Avatar, Chip } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import { SectionShell } from './ui/SectionShell';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';
import { Reveal } from './ui/Reveal';
import { accents, alpha } from '../theme/tokens';

// Titel, Aussteller und Daten gemäß Lebenslauf; die FAW-Zuordnung wurde direkt
// aus den PDF-Urkunden verifiziert (Modul 1 = IT-Systeme, Modul 2 = IT-Netzwerke).
const certificates = [
    { title: 'Full-Stack Developer', issuer: 'Clarusway', date: 'Aug 2025', pdf: '/certificates/CertificationFullStack.pdf', color: '#00d9ff' },
    { title: 'Backend Developer', issuer: 'Clarusway', date: 'Mai 2025', pdf: '/certificates/CertificationBackend.pdf', color: '#10b981' },
    { title: 'React Developer', issuer: 'Clarusway', date: 'Jan 2025', pdf: '/certificates/CertificationReact.pdf', color: '#61dafb' },
    { title: 'Frontend Developer', issuer: 'Clarusway', date: 'Okt 2024', pdf: '/certificates/CertificationFrontend.pdf', color: '#a855f7' },
    { title: 'IT-Netzwerke', issuer: 'FAW Köln', date: 'Okt 2023', pdf: '/certificates/Zertifikat Cakmak__Modul2.pdf', color: '#ff9800' },
    { title: 'IT-Systeme', issuer: 'FAW Köln', date: 'Jun 2023', pdf: '/certificates/TQ 1 Cakmak Zertifikat.pdf', color: '#f44336' },
];

const CertCard = ({ cert }) => (
    <GlassCard accent={cert.color} corners={[]} sx={{ borderRadius: 3, overflow: 'visible' }}>
        <Box aria-hidden sx={{ position: 'absolute', top: -20, right: -20, width: 60, height: 60, background: `radial-gradient(circle, ${alpha(cert.color, 0.25)} 0%, transparent 70%)`, filter: 'blur(10px)' }} />

        <CardContent sx={{ textAlign: 'center', p: 2, pb: 1, flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ width: 42, height: 42, bgcolor: alpha('#0f0f1a', 0.8), color: cert.color, mb: 1.5, border: `1px solid ${alpha(cert.color, 0.25)}` }}>
                <SchoolIcon sx={{ fontSize: 22 }} />
            </Avatar>

            <Typography variant="subtitle1" sx={{ color: 'white', fontFamily: '"Orbitron", sans-serif', fontWeight: 800, fontSize: '0.85rem', lineHeight: 1.2, mb: 1 }}>
                {cert.title}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1.5 }}>
                <VerifiedIcon sx={{ fontSize: 14, color: cert.color }} />
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontSize: '0.7rem' }}>
                    {cert.issuer}
                </Typography>
            </Box>

            <Chip label={cert.date} size="small" sx={{ bgcolor: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)', fontSize: '0.6rem', fontWeight: 700, height: 18, mt: 'auto' }} />
        </CardContent>

        <CardActions sx={{ justifyContent: 'center', p: 2, pt: 0 }}>
            <Button
                variant="outlined"
                size="small"
                href={cert.pdf}
                target="_blank"
                sx={{ width: '100%', borderColor: alpha(cert.color, 0.35), color: cert.color, fontSize: '0.65rem', fontWeight: 800, py: 0.5, borderRadius: 1.5, '&:hover': { bgcolor: alpha(cert.color, 0.1), borderColor: cert.color } }}
            >
                VIEW PDF
            </Button>
        </CardActions>
    </GlassCard>
);

const Certificates = () => (
    <SectionShell id="certificates" surface="s2" bg="grid" accent={accents.purple} maxWidth="xl">
        <SectionHeading
            index="04"
            overline="ZERTIFIKATE"
            accent={accents.purple}
            title={<>Verified <Box component="span" sx={{ color: accents.purple }}>Skills</Box></>}
        />

        <Box
            sx={{
                display: 'flex',
                gap: 2.5,
                overflowX: 'auto',
                pb: 4,
                px: 1,
                '&::-webkit-scrollbar': { height: 6 },
                '&::-webkit-scrollbar-thumb': { background: alpha(accents.purple, 0.4), borderRadius: 10 },
            }}
        >
            {certificates.map((cert, index) => (
                <Reveal key={cert.title} delay={index * 0.08} style={{ flex: '0 0 auto', width: 200 }}>
                    <CertCard cert={cert} />
                </Reveal>
            ))}
        </Box>
    </SectionShell>
);

export default Certificates;
