import React from 'react';
import { Box, Typography, IconButton, Container, Stack } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import TerminalIcon from '@mui/icons-material/Terminal';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const socialLinks = [
        { icon: <LinkedInIcon />, url: "https://www.linkedin.com/in/gökhan-cakmak/", label: "LinkedIn" },
        { icon: <GitHubIcon />, url: "https://github.com/cakmakg", label: "GitHub" },
        { icon: <WhatsAppIcon />, url: "https://wa.me/491639734475", label: "WhatsApp" },
        { icon: <EmailIcon />, url: "mailto:gokhan.cakmak@web.de", label: "Email" },
    ];

    return (
        <Box sx={{ bgcolor: '#0b0f19', borderTop: '1px solid rgba(0, 217, 255, 0.2)', position: 'relative' }}>
            {/* Subtle Top Glow */}
            <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '30%', height: 2, bgcolor: '#00d9ff', boxShadow: '0 0 15px #00d9ff' }} />

            {/* Main Footer */}
            <Container maxWidth="lg" sx={{ py: 6, position: 'relative', zIndex: 1 }}>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={4}
                >
                    {/* Logo & Name */}
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' }, display: 'flex', alignItems: 'center', gap: 2 }}>
                        <TerminalIcon sx={{ color: '#a855f7', fontSize: 32 }} />
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: 'Orbitron, sans-serif',
                                    fontWeight: 800,
                                    letterSpacing: 1,
                                    background: 'linear-gradient(135deg, #00d9ff, #a855f7)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Gökhan Cakmak
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace' }}>
                                SYSTEM.TERMINATE(0); // FULLSTACK AI DEV
                            </Typography>
                        </Box>
                    </Box>

                    {/* Social Links */}
                    <Stack direction="row" spacing={1.5}>
                        {socialLinks.map((social, index) => (
                            <IconButton
                                key={index}
                                href={social.url}
                                target="_blank"
                                aria-label={social.label}
                                sx={{
                                    color: 'rgba(255,255,255,0.5)',
                                    bgcolor: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        borderColor: '#00d9ff',
                                        bgcolor: 'rgba(0, 217, 255, 0.1)',
                                        color: '#00d9ff',
                                        transform: 'translateY(-3px)',
                                        boxShadow: '0 0 15px rgba(0, 217, 255, 0.3)'
                                    }
                                }}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Stack>

                    {/* Scroll to Top */}
                    <IconButton
                        onClick={scrollToTop}
                        sx={{
                            bgcolor: 'rgba(168, 85, 247, 0.1)',
                            color: '#a855f7',
                            border: '1px solid rgba(168, 85, 247, 0.3)',
                            transition: 'all 0.3s',
                            '&:hover': {
                                bgcolor: '#a855f7',
                                color: 'white',
                                boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
                                transform: 'translateY(-3px)'
                            }
                        }}
                    >
                        <KeyboardArrowUpIcon />
                    </IconButton>
                </Stack>
            </Container>

            {/* Copyright Bar */}
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
