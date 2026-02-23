import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardActions, Button, Avatar, Chip, IconButton } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import TerminalIcon from '@mui/icons-material/Terminal';
import { motion } from 'framer-motion';

const certificates = [
    { title: "Full Stack", issuer: "Clarusway", date: "2025", pdf: "/certificates/CertificationFullStack.pdf", color: "#00d9ff" },
    { title: "Frontend", issuer: "Clarusway", date: "2025", pdf: "/certificates/CertificationFrontend.pdf", color: "#61dafb" },
    { title: "Backend", issuer: "Clarusway", date: "2025", pdf: "/certificates/CertificationBackend.pdf", color: "#10b981" },
    { title: "React.js", issuer: "Clarusway", date: "2025", pdf: "/certificates/CertificationReact.pdf", color: "#a855f7" },
    { title: "Modul 1", issuer: "TQ", date: "2024", pdf: "/certificates/TQ 1 Cakmak Zertifikat.pdf", color: "#ff9800" },
    { title: "Modul 2", issuer: "TQ", date: "2024", pdf: "/certificates/Zertifikat Cakmak__Modul2.pdf", color: "#f44336" },
];

const Certificates = () => {
    return (
        <Box id="certificates" sx={{ py: 12, bgcolor: '#111827', position: 'relative', overflow: 'hidden' }}>
            <Box
                sx={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.03,
                    backgroundImage: `linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px', zIndex: 0
                }}
            />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, md: 4 } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 6 }}>
                    <Chip
                        icon={<TerminalIcon sx={{ fontSize: 16 }} />}
                        label="03 — ZERTIFIKATE"
                        sx={{
                            mb: 2, bgcolor: 'rgba(168, 85, 247, 0.1)', color: '#a855f7',
                            fontSize: '0.85rem', fontWeight: 700, letterSpacing: 2,
                            border: '1px solid rgba(168, 85, 247, 0.3)', '& .MuiChip-icon': { color: '#a855f7' }
                        }}
                    />
                    <Typography variant="h2" align="center" sx={{ fontWeight: 800, color: 'white', fontFamily: 'Orbitron, sans-serif', fontSize: { xs: '2rem', md: '3rem' } }}>
                        Verified <Box component="span" sx={{ color: '#a855f7' }}>Skills</Box>
                    </Typography>
                </Box>

                {/* Horizontal Scroll / Flex Container */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2.5,
                        overflowX: 'auto',
                        pb: 4,
                        px: 1,
                        // Styling the scrollbar
                        '&::-webkit-scrollbar': { height: '6px' },
                        '&::-webkit-scrollbar-track': { background: 'rgba(255,255,255,0.05)', borderRadius: '10px' },
                        '&::-webkit-scrollbar-thumb': { background: 'rgba(168, 85, 247, 0.4)', borderRadius: '10px' },
                        '&::-webkit-scrollbar-thumb:hover': { background: 'rgba(168, 85, 247, 0.8)' }
                    }}
                >
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            style={{ flex: '0 0 auto', width: '200px' }} // Fixed compact width
                        >
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: 3,
                                    bgcolor: 'rgba(31, 41, 55, 0.4)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    borderTop: `2px solid ${cert.color}80`,
                                    backdropFilter: 'blur(10px)',
                                    transition: 'all 0.3s',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&:hover': {
                                        borderColor: `${cert.color}50`,
                                        boxShadow: `0 8px 20px rgba(0,0,0,0.5), 0 0 15px ${cert.color}30`,
                                        transform: 'translateY(-4px)'
                                    }
                                }}
                            >
                                <Box sx={{ position: 'absolute', top: -20, right: -20, width: 60, height: 60, background: `radial-gradient(circle, ${cert.color}40 0%, transparent 70%)`, filter: 'blur(10px)' }} />

                                <CardContent sx={{ textAlign: 'center', p: 2, pb: 1, flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Avatar
                                        sx={{
                                            width: 42,
                                            height: 42,
                                            bgcolor: 'rgba(15, 15, 26, 0.8)',
                                            color: cert.color,
                                            mb: 1.5,
                                            border: `1px solid ${cert.color}40`,
                                        }}
                                    >
                                        <SchoolIcon sx={{ fontSize: 22 }} />
                                    </Avatar>

                                    <Typography variant="subtitle1" fontWeight={800} sx={{ color: 'white', fontFamily: 'Orbitron, sans-serif', fontSize: '0.85rem', lineHeight: 1.2, mb: 1 }}>
                                        {cert.title}
                                    </Typography>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1.5 }}>
                                        <VerifiedIcon sx={{ fontSize: 14, color: cert.color }} />
                                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontSize: '0.7rem' }}>
                                            {cert.issuer}
                                        </Typography>
                                    </Box>

                                    <Chip
                                        label={cert.date}
                                        size="small"
                                        sx={{
                                            bgcolor: 'rgba(255,255,255,0.05)',
                                            color: 'rgba(255,255,255,0.5)',
                                            fontSize: '0.6rem',
                                            fontWeight: 700,
                                            height: 18,
                                            mt: 'auto'
                                        }}
                                    />
                                </CardContent>

                                <CardActions sx={{ justifyContent: 'center', p: 2, pt: 0 }}>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        href={cert.pdf}
                                        target="_blank"
                                        sx={{
                                            minWidth: 'auto',
                                            width: '100%',
                                            borderColor: `${cert.color}30`,
                                            color: cert.color,
                                            fontSize: '0.65rem',
                                            fontWeight: 800,
                                            py: 0.5,
                                            borderRadius: 1.5,
                                            '&:hover': {
                                                bgcolor: `${cert.color}15`,
                                                borderColor: cert.color,
                                            }
                                        }}
                                    >
                                        VIEW PDF
                                    </Button>
                                </CardActions>
                            </Card>
                        </motion.div>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Certificates;
