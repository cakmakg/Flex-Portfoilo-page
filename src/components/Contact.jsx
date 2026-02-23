import React, { useRef, useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper, IconButton, Stack, Snackbar, Alert, CircularProgress, Chip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import TerminalIcon from '@mui/icons-material/Terminal';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const EMAILJS_SERVICE_ID = 'service_xxxxxxx';
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx';
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxx';

const inputStyles = {
    '& .MuiOutlinedInput-root': {
        color: 'white',
        bgcolor: 'rgba(15, 15, 26, 0.4)',
        borderRadius: 2,
        transition: 'all 0.3s ease',
        '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
        '&:hover fieldset': { borderColor: 'rgba(0, 217, 255, 0.5)' },
        '&.Mui-focused fieldset': { borderColor: '#00d9ff', borderWidth: '2px' },
        '&.Mui-focused': { boxShadow: '0 0 15px rgba(0, 217, 255, 0.1)' }
    },
    '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.5)' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#00d9ff', fontWeight: 600 },
};

const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

    const contactInfo = [
        { icon: <EmailIcon />, label: "Email", value: "gokhan.cakmak@web.de", link: "mailto:gokhan.cakmak@web.de" },
        { icon: <LocationOnIcon />, label: "Location", value: "Bonn", link: null },
    ];

    const socialLinks = [
        { icon: <LinkedInIcon />, url: "https://www.linkedin.com/in/gökhan-cakmak/", color: "#0077b5" },
        { icon: <GitHubIcon />, url: "https://github.com/cakmakg", color: "#333" },
        { icon: <WhatsAppIcon />, url: "https://wa.me/491639734475", color: "#25d366" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            formRef.current,
            EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setSnackbar({ open: true, message: 'System message transmitted successfully. ✅', severity: 'success' });
                formRef.current.reset();
            })
            .catch(() => {
                setSnackbar({ open: true, message: 'Transmission failed. Ensure network connection.', severity: 'error' });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Box id="contact" sx={{ py: 12, bgcolor: '#111827', position: 'relative', overflow: 'hidden' }}>
            {/* Background Pattern */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.1,
                    backgroundImage: `
                        radial-gradient(circle at 10% 90%, rgba(0,217,255,0.3) 0%, transparent 40%),
                        radial-gradient(circle at 90% 10%, rgba(168,85,247,0.3) 0%, transparent 40%)
                    `,
                }}
            />

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 8 }}>
                        <Chip
                            icon={<TerminalIcon sx={{ fontSize: 16 }} />}
                            label="05 — KONTAKT"
                            sx={{
                                mb: 2,
                                bgcolor: 'rgba(0, 217, 255, 0.1)',
                                color: '#00d9ff',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                letterSpacing: 2,
                                border: '1px solid rgba(0, 217, 255, 0.3)',
                                '& .MuiChip-icon': { color: '#00d9ff' }
                            }}
                        />
                        <Typography
                            variant="h2"
                            align="center"
                            sx={{
                                fontWeight: 800,
                                color: 'white',
                                fontFamily: 'Orbitron, sans-serif',
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                mb: 2
                            }}
                        >
                            Init <Box component="span" sx={{ color: '#00d9ff' }}>Connection</Box>
                        </Typography>
                        <Typography variant="body1" align="center" sx={{ color: 'rgba(255,255,255,0.6)', maxWidth: 600 }}>
                            Bereit für das nächste Level? Hinterlassen Sie eine Nachricht.
                        </Typography>
                    </Box>

                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 3, md: 5 },
                            borderRadius: 4,
                            bgcolor: 'rgba(31, 41, 55, 0.5)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            borderTop: '2px solid rgba(0, 217, 255, 0.5)',
                            backdropFilter: 'blur(16px)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                            position: 'relative'
                        }}
                    >
                        {/* Corner HUD markers */}
                        <Box sx={{ position: 'absolute', top: 0, right: 0, width: 30, height: 30, borderTop: '2px solid rgba(0,217,255,0.3)', borderRight: '2px solid rgba(0,217,255,0.3)' }} />
                        <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: 30, height: 30, borderBottom: '2px solid rgba(168,85,247,0.3)', borderLeft: '2px solid rgba(168,85,247,0.3)' }} />

                        <Grid container spacing={6}>
                            {/* Contact Info */}
                            <Grid item xs={12} md={5}>
                                <Typography variant="h5" sx={{ mb: 4, fontWeight: 700, color: 'white', fontFamily: 'Orbitron, sans-serif' }}>
                                    System_Info
                                </Typography>

                                <Stack spacing={3} sx={{ mb: 5 }}>
                                    {contactInfo.map((info, i) => (
                                        <Box
                                            key={i}
                                            component={info.link ? 'a' : 'div'}
                                            href={info.link}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 2,
                                                textDecoration: 'none',
                                                color: 'rgba(255,255,255,0.8)',
                                                transition: 'all 0.2s',
                                                '&:hover': info.link ? { color: '#00d9ff', transform: 'translateX(4px)' } : {}
                                            }}
                                        >
                                            <Box sx={{
                                                p: 1.5,
                                                borderRadius: 2,
                                                bgcolor: 'rgba(0, 217, 255, 0.1)',
                                                color: '#00d9ff',
                                                display: 'flex',
                                                border: '1px solid rgba(0,217,255,0.2)'
                                            }}>
                                                {info.icon}
                                            </Box>
                                            <Box>
                                                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: 1, display: 'block' }}>
                                                    {info.label.toUpperCase()}
                                                </Typography>
                                                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                                    {info.value}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Stack>

                                <Typography variant="caption" sx={{ mb: 2, color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: 1, display: 'block' }}>
                                    NETZWERK_LINKS
                                </Typography>
                                <Stack direction="row" spacing={1.5}>
                                    {socialLinks.map((social, i) => (
                                        <IconButton
                                            key={i}
                                            href={social.url}
                                            target="_blank"
                                            aria-label={`Social link ${i}`}
                                            sx={{
                                                color: 'white',
                                                bgcolor: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                transition: 'all 0.3s',
                                                '&:hover': {
                                                    bgcolor: social.color,
                                                    color: 'white',
                                                    borderColor: social.color,
                                                    boxShadow: `0 0 15px ${social.color}60`,
                                                    transform: 'translateY(-3px)'
                                                }
                                            }}
                                        >
                                            {social.icon}
                                        </IconButton>
                                    ))}
                                </Stack>
                            </Grid>

                            {/* Contact Form */}
                            <Grid item xs={12} md={7}>
                                <Box
                                    component="form"
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                    sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
                                >
                                    <TextField
                                        fullWidth
                                        label="Name / Alias"
                                        name="from_name"
                                        required
                                        variant="outlined"
                                        sx={inputStyles}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Email Address"
                                        name="from_email"
                                        type="email"
                                        required
                                        variant="outlined"
                                        sx={inputStyles}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Secure Message"
                                        name="message"
                                        multiline
                                        rows={5}
                                        required
                                        variant="outlined"
                                        sx={inputStyles}
                                    />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        disabled={loading}
                                        endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon sx={{ fontSize: 18 }} />}
                                        sx={{
                                            mt: 2,
                                            py: 1.5,
                                            bgcolor: '#00d9ff',
                                            color: '#05050a',
                                            fontWeight: 800,
                                            letterSpacing: 1,
                                            borderRadius: 2,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                bgcolor: '#00b8d9',
                                                boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)'
                                            },
                                            '&.Mui-disabled': {
                                                bgcolor: 'rgba(0, 217, 255, 0.3)',
                                                color: 'rgba(255,255,255,0.5)'
                                            }
                                        }}
                                    >
                                        {loading ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </motion.div>
            </Container>

            {/* Success/Error Snackbar */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={5000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                    severity={snackbar.severity}
                    variant="filled"
                    sx={{
                        bgcolor: snackbar.severity === 'success' ? 'rgba(16, 185, 129, 0.9)' : 'rgba(239, 68, 68, 0.9)',
                        color: 'white',
                        fontWeight: 600,
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Contact;
