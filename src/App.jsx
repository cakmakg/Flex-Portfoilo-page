import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomAIAssistant from './components/AIAssistant';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </Box>
        <CustomAIAssistant />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
