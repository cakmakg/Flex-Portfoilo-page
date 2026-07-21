import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Fab, Tooltip } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import StopIcon from '@mui/icons-material/Stop';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import { motion, AnimatePresence } from 'framer-motion';

// Special tailored German script for 100% WOW effect!
const voiceScript = `Herzlich willkommen auf meinem Portfolio. Ich bin Gökhan Cakmak – Full-Stack Developer und AI Systems Builder.

Ich baue Full-Stack-Anwendungen mit React, Node.js und TypeScript und entwerfe darauf aufbauend KI-Systeme, die eigenständig arbeiten. Mein Schwerpunkt liegt auf Multi-Agent-Architekturen, ereignisgesteuerten LLM-Workflows und Multi-Tenant-SaaS-Plattformen für Geschäftsprozesse.

KI nutze ich dabei nicht nur als Anwender. Ich baue deterministische State Machines mit LangGraph, verteile Aufgaben je nach Anforderung auf Claude, Gemini oder OpenAI und verbinde die Agenten über n8n und Webhooks mit Gmail, Slack und Social-Media-Kanälen.

Damit die Ergebnisse verlässlich bleiben, arbeite ich mit RAG über MongoDB Atlas Vector Search, mit Critic-Agents für die automatische Qualitätsprüfung und mit Human-in-the-Loop-Freigaben an kritischen Stellen. Auch die Kosten behalte ich im Blick: Der Token-Verbrauch wird pro Mandant erfasst und über Stripe abgerechnet.

Mein größtes Projekt, AI Orchestra, verbindet zehn spezialisierte Agenten zu einem einzigen System. Schau dich gerne um und entdecke meine aktuellen Projekte!`;

// Einmal vorberechnet, damit das Rendern rein bleibt (react-hooks/purity): kein Math.random() im Render.
const EQUALIZER_BARS = [1, 2, 3, 4, 5].map((i) => ({
    id: i,
    duration: 0.8 + Math.random() * 0.4,
    delay: i * 0.1,
}));

const CustomAIAssistant = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const synthRef = useRef(window.speechSynthesis);
    const utteranceRef = useRef(null);

    // Initialize Speech Synthesis
    useEffect(() => {
        // Ref-Wert lokal festhalten, damit das Cleanup dieselbe Instanz nutzt (exhaustive-deps).
        const synth = synthRef.current;

        // We just ensure synthesis is ready. Voices might load async.
        const loadVoices = () => synth.getVoices();

        if (synth.onvoiceschanged !== undefined) {
            synth.onvoiceschanged = loadVoices;
        }
        loadVoices();

        return () => {
            synth.cancel();
        };
    }, []);

    const toggleSpeech = () => {
        if (isPlaying) {
            synthRef.current.cancel();
            setIsPlaying(false);
        } else {
            // Reset to prevent overlap
            synthRef.current.cancel();

            const utterance = new SpeechSynthesisUtterance(voiceScript);
            utterance.lang = 'de-DE';

            // Attempt to fetch a nice German voice
            const voices = synthRef.current.getVoices();
            const germanVoice = voices.find(v => v.lang === 'de-DE' &&
                (v.name.includes('Google') || v.name.includes('Premium') || v.name.includes('Natural')))
                || voices.find(v => v.lang.startsWith('de'));

            if (germanVoice) {
                utterance.voice = germanVoice;
            }

            utterance.rate = 1.0;
            utterance.pitch = 1.0;

            utterance.onend = () => setIsPlaying(false);
            utterance.onerror = (e) => {
                console.error("Speech synthesis error", e);
                setIsPlaying(false);
            };

            utteranceRef.current = utterance;
            synthRef.current.speak(utterance);
            setIsPlaying(true);
        }
    };

    return (
        <Box sx={{ position: 'fixed', bottom: 30, right: 30, zIndex: 9999, display: 'flex', alignItems: 'center', gap: 2 }}>
            <AnimatePresence>
                {isPlaying && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Box
                            sx={{
                                bgcolor: 'rgba(17, 24, 39, 0.85)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(0, 217, 255, 0.3)',
                                borderRadius: '30px',
                                px: 3,
                                py: 1.5,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)'
                            }}
                        >
                            <GraphicEqIcon sx={{ color: '#00d9ff', fontSize: 18 }} />
                            <Typography variant="caption" sx={{ color: '#00d9ff', fontFamily: 'Orbitron, sans-serif', fontWeight: 600, letterSpacing: 1 }}>
                                ASSISTANT SPEAKING
                            </Typography>

                            {/* Equalizer Animation Effect */}
                            <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center', height: 16 }}>
                                {EQUALIZER_BARS.map((bar) => (
                                    <motion.div
                                        key={bar.id}
                                        animate={{ height: ['20%', '100%', '20%'] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: bar.duration,
                                            delay: bar.delay
                                        }}
                                        style={{ width: 3, backgroundColor: '#00d9ff', borderRadius: 2 }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Tooltip title={isPlaying ? "Audio anhalten" : "Audio-Profil anhören"} placement="left">
                    <Fab
                        onClick={toggleSpeech}
                        color="primary"
                        aria-label="voice-assistant"
                        sx={{
                            bgcolor: isPlaying ? 'rgba(239, 68, 68, 0.1)' : '#111827',
                            color: isPlaying ? '#ef4444' : '#00d9ff',
                            border: `2px solid ${isPlaying ? '#ef4444' : '#00d9ff'}`,
                            boxShadow: isPlaying ? '0 0 20px rgba(239, 68, 68, 0.4)' : '0 0 20px rgba(0, 217, 255, 0.4)',
                            '&:hover': {
                                bgcolor: isPlaying ? 'rgba(239, 68, 68, 0.2)' : '#1f2937',
                                boxShadow: isPlaying ? '0 0 30px rgba(239, 68, 68, 0.6)' : '0 0 30px rgba(0, 217, 255, 0.6)'
                            },
                            width: 60,
                            height: 60
                        }}
                    >
                        {isPlaying ? (
                            <StopIcon sx={{ fontSize: 28 }} />
                        ) : (
                            <VolumeUpIcon sx={{ fontSize: 28 }} />
                        )}
                    </Fab>
                </Tooltip>
            </motion.div>
        </Box>
    );
};

export default CustomAIAssistant;
