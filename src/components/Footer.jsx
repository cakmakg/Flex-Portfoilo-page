import React from 'react';
import { Box, Typography, IconButton, Container, Stack } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PsychologyIcon from '@mui/icons-material/Psychology';

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
        { icon: <EmailIcon />, url: "mailto:contact@example.com", label: "Email" },
    ];

    return (
        <Box sx={{ bgcolor: '#0a0a14', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {/* Main Footer */}
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={3}
                >
                    {/* Logo & Name */}
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' }, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PsychologyIcon sx={{ color: '#00d9ff' }} />
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: 'Orbitron',
                                    fontWeight: 700,
                                    background: 'linear-gradient(135deg, #00d9ff, #a855f7)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Gökhan Cakmak
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                                Full-Stack & AI Developer
                            </Typography>
                        </Box>
                    </Box>

                    {/* Social Links */}
                    <Stack direction="row" spacing={1}>
                        {socialLinks.map((social, index) => (
                            <IconButton
                                key={index}
                                href={social.url}
                                target="_blank"
                                aria-label={social.label}
                                sx={{
                                    color: 'rgba(255,255,255,0.5)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    '&:hover': {
                                        borderColor: '#00d9ff',
                                        bgcolor: 'rgba(0, 217, 255, 0.1)',
                                        color: '#00d9ff',
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
                            bgcolor: '#a855f7',
                            color: 'white',
                            '&:hover': {
                                bgcolor: '#9333ea',
                            }
                        }}
                    >
                        <KeyboardArrowUpIcon />
                    </IconButton>
                </Stack>
            </Container>

            {/* Copyright Bar */}
            <Box sx={{ bgcolor: 'rgba(0,0,0,0.3)', py: 2 }}>
                <Container maxWidth="lg">
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)' }} align="center">
                        © {new Date().getFullYear()} Gökhan Cakmak. All rights reserved.
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
