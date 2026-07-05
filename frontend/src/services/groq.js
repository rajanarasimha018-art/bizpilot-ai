const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function generateBusinessInsights(question) {
  try {
    const response = await fetch(`${API_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch AI response");
    }

    const data = await response.json();

    return data.answer;
  } catch (error) {
    console.error(error);

    return "⚠ Unable to connect to AI server. Please try again.";
  }
}