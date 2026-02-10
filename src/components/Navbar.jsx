import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container, Drawer, List, ListItem, ListItemText, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PsychologyIcon from '@mui/icons-material/Psychology';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Über mich', href: '#about' },
    { label: 'Zertifikate', href: '#certificates' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projekte', href: '#projects' },
    { label: 'Kontakt', href: '#contact' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    bgcolor: trigger ? 'rgba(15, 15, 26, 0.95)' : 'transparent',
                    backdropFilter: trigger ? 'blur(10px)' : 'none',
                    borderBottom: trigger ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    transition: 'all 0.3s ease'
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar sx={{ justifyContent: 'space-between', px: 0 }}>
                        {/* Logo */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <PsychologyIcon sx={{ color: '#00d9ff', fontSize: 28 }} />
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
                                GC
                            </Typography>
                        </Box>

                        {/* Desktop Navigation */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.label}
                                    href={item.href}
                                    sx={{
                                        color: 'rgba(255,255,255,0.8)',
                                        fontWeight: 500,
                                        '&:hover': {
                                            color: '#00d9ff',
                                            bgcolor: 'rgba(0, 217, 255, 0.1)'
                                        }
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>

                        {/* Mobile Menu Button */}
                        <IconButton
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: 'none' }, color: 'white' }}
                        >
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
                    sx: {
                        width: 280,
                        bgcolor: '#0f0f1a',
                        borderLeft: '1px solid rgba(255,255,255,0.1)'
                    }
                }}
            >
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
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
                                color: 'rgba(255,255,255,0.8)',
                                '&:hover': {
                                    bgcolor: 'rgba(0, 217, 255, 0.1)',
                                    color: '#00d9ff'
                                }
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
