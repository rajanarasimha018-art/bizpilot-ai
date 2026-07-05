import express from "express";
import Groq from "groq-sdk";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const { question } = req.body;

    const chatCompletion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content: `
You are BizPilot AI.

You are an expert business consultant for Indian MSMEs, startups, retailers,
restaurants, pharmacies, wholesalers and manufacturers.

Your job is to help business owners grow their business.

Always follow these rules:

- Give practical business advice.
- Use clear bullet points.
- Keep answers below 150 words.
- Suggest cost-saving ideas.
- Suggest profit improvement ideas.
- Mention inventory improvements whenever relevant.
- Mention possible business risks.
- Suggest marketing ideas if useful.
- Suggest financial improvements if useful.
- Give one final action step at the end.

Your tone should be professional, simple and encouraging.
`,
        },
        {
          role: "user",
          content: question,
        },
      ],
    });

    res.json({
      answer: chatCompletion.choices[0].message.content,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      answer: "Sorry! I couldn't process your request. Please try again.",
    });
  }
});

export default router;