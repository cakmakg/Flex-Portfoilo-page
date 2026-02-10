import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Avatar, Chip } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { motion } from 'framer-motion';

// =====================================================
// SERTİFİKALARINIZI BURAYA EKLEYİN
// =====================================================
const certificates = [
    {
        title: "Full Stack Web Development",
        issuer: "Clarusway",
        date: "2024",
        pdf: "/certificates/fullstack-certificate.pdf",
        color: "#00d9ff"
    },
    {
        title: "React.js Certificate",
        issuer: "Clarusway",
        date: "2024",
        pdf: "/certificates/react-certificate.pdf",
        color: "#61dafb"
    },
    {
        title: "Node.js Certificate",
        issuer: "Clarusway",
        date: "2024",
        pdf: "/certificates/nodejs-certificate.pdf",
        color: "#339933"
    },
    {
        title: "JavaScript Certificate",
        issuer: "Clarusway",
        date: "2024",
        pdf: "/certificates/javascript-certificate.pdf",
        color: "#f7df1e"
    },
    {
        title: "Python Certificate",
        issuer: "Clarusway",
        date: "2024",
        pdf: "/certificates/python-certificate.pdf",
        color: "#3776ab"
    },
    {
        title: "Docker Certificate",
        issuer: "Clarusway",
        date: "2024",
        pdf: "/certificates/docker-certificate.pdf",
        color: "#2496ed"
    },
];

const Certificates = () => {
    return (
        <Box id="certificates" sx={{ py: 8, bgcolor: '#16213e', position: 'relative', overflow: 'hidden' }}>
            {/* Background Pattern */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.03,
                    backgroundImage: `
                        radial-gradient(circle at 20% 50%, #a855f7 0%, transparent 25%),
                        radial-gradient(circle at 80% 50%, #00d9ff 0%, transparent 25%)
                    `,
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
                    <AutoAwesomeIcon sx={{ color: '#a855f7', fontSize: 32 }} />
                    <Typography variant="h2" align="center" sx={{ fontWeight: 700, color: 'white' }}>
                        Zertifikate
                    </Typography>
                </Box>
                <Typography variant="body1" align="center" sx={{ mb: 5, maxWidth: 600, mx: 'auto', color: 'rgba(255,255,255,0.6)' }}>
                    Professionelle Zertifizierungen und abgeschlossene Kurse
                </Typography>

                <Grid container spacing={3} justifyContent="center">
                    {certificates.map((cert, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        borderRadius: 3,
                                        bgcolor: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        backdropFilter: 'blur(10px)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: cert.color,
                                            boxShadow: `0 0 30px ${cert.color}30`,
                                            transform: 'translateY(-4px)',
                                        }
                                    }}
                                >
                                    <CardContent sx={{ textAlign: 'center', pt: 4 }}>
                                        <Avatar
                                            sx={{
                                                width: 64,
                                                height: 64,
                                                bgcolor: `${cert.color}20`,
                                                color: cert.color,
                                                mx: 'auto',
                                                mb: 2
                                            }}
                                        >
                                            <SchoolIcon sx={{ fontSize: 32 }} />
                                        </Avatar>

                                        <Typography variant="h6" fontWeight={600} sx={{ mb: 1, color: 'white' }}>
                                            {cert.title}
                                        </Typography>

                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, mb: 1 }}>
                                            <VerifiedIcon sx={{ fontSize: 16, color: cert.color }} />
                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                                                {cert.issuer}
                                            </Typography>
                                        </Box>

                                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
                                            {cert.date}
                                        </Typography>
                                    </CardContent>

                                    <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            startIcon={<PictureAsPdfIcon />}
                                            href={cert.pdf}
                                            target="_blank"
                                            sx={{
                                                borderColor: cert.color,
                                                color: cert.color,
                                                '&:hover': {
                                                    bgcolor: cert.color,
                                                    color: 'white',
                                                    borderColor: cert.color,
                                                }
                                            }}
                                        >
                                            View PDF
                                        </Button>
                                    </CardActions>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Certificates;
