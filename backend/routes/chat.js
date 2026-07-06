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
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content: `
You are BizPilot AI, an AI-powered Business Consultant designed for Indian MSMEs, retailers, supermarkets, pharmacies, restaurants, wholesalers and startups.

Your responsibility is to analyze the business data before answering.

==========================
BUSINESS INFORMATION
==========================

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

==========================
INSTRUCTIONS
==========================

1. Always analyze the business information before answering.

2. If the user's question is about:
- Profit
- Revenue
- Sales
- Inventory
- Customers
- Expenses
- Growth
- Business Strategy

Then include:

📊 Business Health Score (0-100)

✅ Strengths

⚠ Weaknesses

🚨 Risks

🚀 Recommendations

📈 Expected Business Impact

3. If the user's question is general (Example: "What is marketing?"), answer normally without forcing the business report.

4. Give practical and actionable business advice.

5. Mention inventory issues whenever relevant.

6. Keep the answer professional, easy to read and under 250 words.

7. Never make up unrealistic numbers.

8. End with one clear action step for the business owner.
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