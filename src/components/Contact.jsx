import React, { useRef, useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper, IconButton, Stack, Snackbar, Alert, CircularProgress } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

// =====================================================
// EmailJS Konfiguration:
// 1. https://www.emailjs.com/ hesap oluşturun (ücretsiz)
// 2. Email Service ekleyin (Gmail, Outlook vb.)
// 3. Email Template oluşturun (Aşağıdaki değişkenler: from_name, from_email, message)
// 4. Aşağıdaki değerleri kendi bilgilerinizle değiştirin:
// =====================================================
const EMAILJS_SERVICE_ID = 'service_xxxxxxx';   // EmailJS Service ID
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx'; // EmailJS Template ID
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxx';    // EmailJS Public Key

const inputStyles = {
    '& .MuiOutlinedInput-root': {
        color: 'white',
        '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
        '&:hover fieldset': { borderColor: '#00d9ff' },
        '&.Mui-focused fieldset': { borderColor: '#00d9ff' },
    },
    '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.5)' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#00d9ff' },
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
                setSnackbar({ open: true, message: 'Nachricht erfolgreich gesendet! ✅', severity: 'success' });
                formRef.current.reset();
            })
            .catch(() => {
                setSnackbar({ open: true, message: 'Fehler beim Senden. Bitte versuchen Sie es erneut.', severity: 'error' });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Box id="contact" sx={{ py: 10, bgcolor: '#0f0f1a', position: 'relative', overflow: 'hidden' }}>
            {/* Background Pattern */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.05,
                    backgroundImage: `
                        linear-gradient(rgba(0,217,255,0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,217,255,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            />

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
                        <SmartToyIcon sx={{ color: '#a855f7', fontSize: 32 }} />
                        <Typography variant="h2" align="center" sx={{ fontWeight: 700, color: 'white' }}>
                            Kontakt
                        </Typography>
                    </Box>
                    <Typography variant="body1" align="center" sx={{ mb: 6, color: 'rgba(255,255,255,0.6)' }}>
                        Lassen Sie uns über Ihr nächstes AI-Projekt sprechen
                    </Typography>

                    <Paper
                        elevation={0}
                        sx={{
                            p: 4,
                            borderRadius: 4,
                            bgcolor: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <Grid container spacing={4}>
                            {/* Contact Info */}
                            <Grid item xs={12} md={5}>
                                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'white' }}>
                                    Kontaktinformationen
                                </Typography>

                                <Stack spacing={2} sx={{ mb: 4 }}>
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
                                                color: 'rgba(255,255,255,0.7)',
                                                '&:hover': info.link ? { color: '#00d9ff' } : {}
                                            }}
                                        >
                                            <Box sx={{
                                                p: 1,
                                                borderRadius: 2,
                                                bgcolor: 'rgba(0, 217, 255, 0.1)',
                                                color: '#00d9ff',
                                                display: 'flex'
                                            }}>
                                                {info.icon}
                                            </Box>
                                            <Box>
                                                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                                                    {info.label}
                                                </Typography>
                                                <Typography variant="body2">
                                                    {info.value}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Stack>

                                <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.5)' }}>
                                    Folgen Sie mir
                                </Typography>
                                <Stack direction="row" spacing={1}>
                                    {socialLinks.map((social, i) => (
                                        <IconButton
                                            key={i}
                                            href={social.url}
                                            target="_blank"
                                            aria-label={`Social link ${i}`}
                                            sx={{
                                                color: 'rgba(255,255,255,0.6)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                '&:hover': {
                                                    color: '#00d9ff',
                                                    borderColor: '#00d9ff',
                                                    bgcolor: 'rgba(0, 217, 255, 0.1)'
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
                                    sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                                >
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        name="from_name"
                                        required
                                        variant="outlined"
                                        sx={inputStyles}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        name="from_email"
                                        type="email"
                                        required
                                        variant="outlined"
                                        sx={inputStyles}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Nachricht"
                                        name="message"
                                        multiline
                                        rows={4}
                                        required
                                        variant="outlined"
                                        sx={inputStyles}
                                    />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        disabled={loading}
                                        endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                                        sx={{
                                            mt: 1,
                                            bgcolor: '#a855f7',
                                            '&:hover': { bgcolor: '#9333ea' },
                                            '&.Mui-disabled': { bgcolor: 'rgba(168, 85, 247, 0.5)', color: 'rgba(255,255,255,0.5)' }
                                        }}
                                    >
                                        {loading ? 'Wird gesendet...' : 'Nachricht senden'}
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
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Contact;
