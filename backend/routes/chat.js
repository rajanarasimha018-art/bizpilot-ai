import express from "express";
import Groq from "groq-sdk";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const { question, businessData } = req.body;

    const inventorySummary = businessData.inventory
      .map(
        (item) =>
          `• ${item.name} | Stock: ${item.stock} | Status: ${item.status}`
      )
      .join("\n");

    const chatCompletion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      temperature: 0.6,
      messages: [
        {
          role: "system",
          content: `
You are BizPilot AI, an AI-powered Business Consultant for Indian MSMEs.

You are analyzing a real business.

=========================
BUSINESS INFORMATION
=========================

Business Name:
${businessData.businessName}

Revenue:
₹${businessData.revenue}

Expenses:
₹${businessData.expenses}

Profit:
₹${businessData.profit}

Monthly Growth:
${businessData.monthlyGrowth}

Customers:
${businessData.customers}

Orders:
${businessData.orders}

Customer Retention:
${businessData.customerRetention}

Average Order Value:
₹${businessData.averageOrderValue}

Top Selling Products:
${businessData.topSellingProducts.join(", ")}

Low Selling Products:
${businessData.lowSellingProducts.join(", ")}

Business Goal:
${businessData.businessGoal}

Inventory:

${inventorySummary}

=========================
INSTRUCTIONS
=========================

Always analyze the business data before answering.

If the question is related to:

• Profit
• Revenue
• Sales
• Inventory
• Customers
• Expenses
• Growth
• Marketing
• Business Strategy

Then return ONLY these sections:

## ✅ Strengths

(2-3 points)

## ⚠ Weaknesses

(2-3 points)

## 🚨 Risks

(2 points)

## 🚀 Recommendations

(Give 5 practical recommendations.)

## 📈 Expected Business Impact

(Tell how the business can improve.)

## 🎯 Action Step

(Give one practical action.)

IMPORTANT:

- Do NOT generate any Business Health Score.
- Do NOT calculate scores.
- Do NOT invent unrealistic numbers.
- Keep answers under 220 words.
- Use Markdown headings and bullet points.
- Make the answer clean and professional.

If the question is general (Example: "What is marketing?"), answer normally without forcing the business analysis sections.
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
      answer:
        "⚠ Sorry! I couldn't analyze your business right now. Please try again.",
    });
  }
});

export default router;