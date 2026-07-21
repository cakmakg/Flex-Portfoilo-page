import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container, Drawer, List, ListItem, ListItemText, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { accents, surfaces, gradients, alpha } from '../theme/tokens';

// Sıra, App.jsx'teki bölüm akışı ve section id'leriyle birebir eşleşir.
const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Über mich', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projekte', href: '#projects' },
    { label: 'Zertifikate', href: '#certificates' },
    { label: 'Kontakt', href: '#contact' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

    const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    bgcolor: trigger ? alpha(surfaces.s1, 0.85) : 'transparent',
                    backdropFilter: trigger ? 'blur(12px)' : 'none',
                    borderBottom: trigger ? `1px solid ${alpha(accents.cyan, 0.15)}` : '1px solid transparent',
                    transition: 'all 0.3s ease',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar sx={{ justifyContent: 'space-between', px: 0 }}>
                        {/* Logo */}
                        <Box component="a" href="#home" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none' }}>
                            <PsychologyIcon sx={{ color: accents.cyan, fontSize: 28 }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 800,
                                    letterSpacing: 1,
                                    background: gradients.brandSoft,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                GC
                            </Typography>
                        </Box>

                        {/* Desktop Navigation */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.label}
                                    href={item.href}
                                    sx={{
                                        color: 'text.secondary',
                                        fontWeight: 500,
                                        px: 2,
                                        '&:hover': { color: accents.cyan, bgcolor: alpha(accents.cyan, 0.1) },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>

                        {/* Mobile Menu Button */}
                        <IconButton onClick={handleDrawerToggle} sx={{ display: { md: 'none' }, color: 'white' }} aria-label="Menü öffnen">
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                    sx: { width: 280, bgcolor: surfaces.s1, borderLeft: `1px solid ${alpha(accents.cyan, 0.15)}` },
                }}
            >
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }} aria-label="Menü schließen">
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List>
                    {navItems.map((item) => (
                        <ListItem
                            key={item.label}
                            component="a"
                            href={item.href}
                            onClick={handleDrawerToggle}
                            sx={{
                                color: 'text.secondary',
                                '&:hover': { bgcolor: alpha(accents.cyan, 0.1), color: accents.cyan },
                            }}
                        >
                            <ListItemText primary={item.label} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
