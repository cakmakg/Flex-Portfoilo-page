require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

// Initialize Google Generative AI Provider
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const systemPrompt = `
Du bist der digitale KI-Assistent von Gökhan Cakmak. 
Gökhan ist ein Fullstack & AI Developer. Deine Aufgabe ist es, Besucher auf seiner Portfolio-Website freundlich und professionell zu begrüßen, Fragen zu seinen Fähigkeiten, Projekten oder seinem Lebenslauf zu beantworten.
Du sprichst Deutsch. Halte deine Antworten prägnant, freundlich und technisch kompetent.

Kernkompetenzen von Gökhan:
- AI Engineering: LLM Orchestration, RAG Architecture, AI Agents, Advanced Prompting (OpenAI, Gemini, Anthropic)
- Frontend: React, Next.js, TypeScript, TailwindCSS, MUI
- Backend & Cloud: Node.js, Express, AWS, Docker, CI/CD, SQL, MongoDB

Projekte (Highlights):
1. AI Chat Assistant (RAG basiert für PDF Analyse; restructure-work.vercel.app)
2. WC Finder (Maps API & React; wc-finder-wheat.vercel.app)
3. TravelSync & Shophub (B2B & SaaS Plattformen)

Benimm dich höflich, professionell und sei hilfsbereit. Erwähne, dass man Gökhan über die Kontakt-Sektion oder LinkedIn erreichen kann, falls sie detailliertere Anfragen haben.
`;

app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.body;

        if (!process.env.GEMINI_API_KEY) {
            console.error("No API KEY provided");
            return res.status(500).json({ error: "Gemini API Key is not configured on the server." });
        }

        const lastMessage = messages[messages.length - 1];

        if (!lastMessage || lastMessage.role !== 'user') {
            return res.status(400).json({ error: "Invalid message format" });
        }

        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash",
            systemInstruction: systemPrompt
        });

        // Use History structure standard for Gemini generative-ai package
        const historyData = messages.slice(0, -1).map(msg => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }],
        }));

        const chat = model.startChat({ history: historyData });

        const result = await chat.sendMessage(lastMessage.content);
        const responseText = result.response.text();

        // Return raw JSON text response
        res.json({ response: responseText });

    } catch (error) {
        console.error("Chat API Error:", error);
        res.status(500).json({ error: "Failed to generate AI response." });
    }
});

app.listen(PORT, () => {
    console.log(`🤖 AI Chat Server running on http://localhost:${PORT} (Standard JSON)`);
});