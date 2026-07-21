import React from 'react';
import { Box, Typography, IconButton, Container, Stack } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import TerminalIcon from '@mui/icons-material/Terminal';
import { accents, surfaces, gradients, alpha } from '../theme/tokens';

const socialLinks = [
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/gökhan-cakmak/', label: 'LinkedIn' },
    { icon: <GitHubIcon />, url: 'https://github.com/cakmakg', label: 'GitHub' },
    { icon: <WhatsAppIcon />, url: 'https://wa.me/491639734475', label: 'WhatsApp' },
    { icon: <EmailIcon />, url: 'mailto:gokhan.cakmak@web.de', label: 'Email' },
];

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <Box component="footer" sx={{ bgcolor: surfaces.base, borderTop: `1px solid ${alpha(accents.cyan, 0.2)}`, position: 'relative' }}>
            <Box aria-hidden sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '30%', height: 2, bgcolor: accents.cyan, boxShadow: `0 0 15px ${accents.cyan}` }} />

            <Container maxWidth="lg" sx={{ py: 6, position: 'relative', zIndex: 1 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={4}>
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' }, display: 'flex', alignItems: 'center', gap: 2 }}>
                        <TerminalIcon sx={{ color: accents.purple, fontSize: 32 }} />
                        <Box>
                            <Typography variant="h6" sx={{ letterSpacing: 1, background: gradients.brandSoft, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                Gökhan Cakmak
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace' }}>
                                SYSTEM.TERMINATE(0); // FULL-STACK DEV · AI SYSTEMS BUILDER
                            </Typography>
                        </Box>
                    </Box>

                    <Stack direction="row" spacing={1.5}>
                        {socialLinks.map((social) => (
                            <IconButton
                                key={social.label}
                                href={social.url}
                                target="_blank"
                                aria-label={social.label}
                                sx={{ color: 'rgba(255,255,255,0.5)', bgcolor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s', '&:hover': { borderColor: accents.cyan, bgcolor: alpha(accents.cyan, 0.1), color: accents.cyan, transform: 'translateY(-3px)', boxShadow: `0 0 15px ${alpha(accents.cyan, 0.3)}` } }}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Stack>

                    <IconButton
                        onClick={scrollToTop}
                        aria-label="Nach oben scrollen"
                        sx={{ bgcolor: alpha(accents.purple, 0.1), color: accents.purple, border: `1px solid ${alpha(accents.purple, 0.3)}`, transition: 'all 0.3s', '&:hover': { bgcolor: accents.purple, color: 'white', boxShadow: `0 0 20px ${alpha(accents.purple, 0.4)}`, transform: 'translateY(-3px)' } }}
                    >
                        <KeyboardArrowUpIcon />
                    </IconButton>
                </Stack>
            </Container>

            <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.05)', py: 2 }}>
                <Container maxWidth="lg">
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', fontSize: '0.75rem' }} align="center">
                        © {new Date().getFullYear()} Gökhan Cakmak. [ INITIALIZED CORRECTLY ] All rights reserved.
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
