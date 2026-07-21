import React, { useRef, useState } from 'react';
import { Box, Typography, Grid, TextField, Button, IconButton, Stack, Snackbar, Alert, CircularProgress } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import { SectionShell } from './ui/SectionShell';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';
import { Reveal } from './ui/Reveal';
import { accents, alpha } from '../theme/tokens';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const contactInfo = [
    { icon: <EmailIcon />, label: 'Email', value: 'gokhan.cakmak@web.de', link: 'mailto:gokhan.cakmak@web.de' },
    { icon: <PhoneIcon />, label: 'Telefon', value: '+49 163 9734475', link: 'tel:+491639734475' },
    { icon: <LocationOnIcon />, label: 'Standort', value: '53121 Bonn, Deutschland', link: null },
];

const socialLinks = [
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/gökhan-cakmak/', color: '#0077b5' },
    { icon: <GitHubIcon />, url: 'https://github.com/cakmakg', color: '#ffffff' },
    { icon: <WhatsAppIcon />, url: 'https://wa.me/491639734475', color: '#25d366' },
];

const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS-Zugangsdaten kommen aus den VITE_-Umgebungsvariablen; ohne sie kann nichts gesendet werden.
        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
            setSnackbar({ open: true, message: 'E-Mail-Dienst ist nicht konfiguriert.', severity: 'error' });
            return;
        }

        setLoading(true);

        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
            .then(() => {
                setSnackbar({ open: true, message: 'System message transmitted successfully. ✅', severity: 'success' });
                formRef.current.reset();
            })
            .catch(() => {
                setSnackbar({ open: true, message: 'Transmission failed. Ensure network connection.', severity: 'error' });
            })
            .finally(() => setLoading(false));
    };

    return (
        <SectionShell id="contact" surface="s3" bg="glow" maxWidth="md">
            <SectionHeading
                index="05"
                overline="KONTAKT"
                title={<>Init <Box component="span" sx={{ color: accents.cyan }}>Connection</Box></>}
                subtitle="Bereit für das nächste Level? Hinterlassen Sie eine Nachricht."
            />

            <Reveal delay={0.15}>
                <GlassCard accent={accents.cyan} corners={['tr', 'bl']} interactive={false} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4 }}>
                    <Grid container spacing={6}>
                        {/* Kontaktinfo */}
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Typography variant="h5" sx={{ mb: 4, color: 'white' }}>System_Info</Typography>

                            <Stack spacing={3} sx={{ mb: 5 }}>
                                {contactInfo.map((info) => (
                                    <Box
                                        key={info.label}
                                        component={info.link ? 'a' : 'div'}
                                        href={info.link || undefined}
                                        sx={{ display: 'flex', alignItems: 'center', gap: 2, textDecoration: 'none', color: 'text.secondary', transition: 'all 0.2s', '&:hover': info.link ? { color: accents.cyan, transform: 'translateX(4px)' } : {} }}
                                    >
                                        <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: alpha(accents.cyan, 0.1), color: accents.cyan, display: 'flex', border: `1px solid ${alpha(accents.cyan, 0.2)}` }}>
                                            {info.icon}
                                        </Box>
                                        <Box>
                                            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: 1, display: 'block' }}>
                                                {info.label.toUpperCase()}
                                            </Typography>
                                            <Typography variant="body1" sx={{ fontWeight: 500 }}>{info.value}</Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Stack>

                            <Typography variant="caption" sx={{ mb: 2, color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: 1, display: 'block' }}>
                                NETZWERK_LINKS
                            </Typography>
                            <Stack direction="row" spacing={1.5}>
                                {socialLinks.map((social) => (
                                    <IconButton
                                        key={social.url}
                                        href={social.url}
                                        target="_blank"
                                        aria-label={`Social link ${social.url}`}
                                        sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s', '&:hover': { bgcolor: social.color, color: social.color === '#ffffff' ? '#000' : 'white', borderColor: social.color, boxShadow: `0 0 15px ${alpha(social.color, 0.4)}`, transform: 'translateY(-3px)' } }}
                                    >
                                        {social.icon}
                                    </IconButton>
                                ))}
                            </Stack>
                        </Grid>

                        {/* Formular */}
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Box component="form" ref={formRef} onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                <TextField fullWidth label="Name / Alias" name="from_name" required />
                                <TextField fullWidth label="Email Address" name="from_email" type="email" required />
                                <TextField fullWidth label="Secure Message" name="message" multiline rows={5} required />
                                <Button
                                    type="submit"
                                    variant="neon"
                                    size="large"
                                    disabled={loading}
                                    endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon sx={{ fontSize: 18 }} />}
                                    sx={{ mt: 2, py: 1.5, '&.Mui-disabled': { bgcolor: alpha(accents.cyan, 0.3), color: 'rgba(255,255,255,0.5)' } }}
                                >
                                    {loading ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </GlassCard>
            </Reveal>

            <Snackbar open={snackbar.open} autoHideDuration={5000} onClose={() => setSnackbar({ ...snackbar, open: false })} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} variant="filled" sx={{ fontWeight: 600 }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </SectionShell>
    );
};

export default Contact;
