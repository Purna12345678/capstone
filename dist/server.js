import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const genAI = new GoogleGenerativeAI('AIzaSyAd9MCma8T1KGdXCEh6V4shZDq-w1kkKkU');
app.post('/chat', async (req, res) => {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const result = await model.generateContent(req.body.message);
        res.json({ response: result.response.text() });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch response from Gemini' });
    }
});
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
//# sourceMappingURL=server.js.map