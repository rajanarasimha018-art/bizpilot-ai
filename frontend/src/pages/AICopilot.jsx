import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import SuggestionCards from "../components/SuggestionCards";
import BusinessInsightCard from "../components/BusinessInsightCard";

import { generateBusinessInsights } from "../services/groq";

export default function AICopilot() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "ai",
      message:
        "👋 Welcome to BizPilot AI.\n\nI can help you improve profits, reduce expenses, analyze inventory and generate business insights.",
    },
  ]);

  const askAI = async () => {
  if (!question.trim()) return;

  const userQuestion = question;

  setMessages((prev) => [
    ...prev,
    {
      type: "user",
      message: userQuestion,
    },
  ]);

  setQuestion("");

  const answer = await generateBusinessInsights(userQuestion);

  setMessages((prev) => [
    ...prev,
    {
      type: "ai",
      message: answer,
    },
  ]);
};
return (
<div className="min-h-screen bg-slate-950 text-white">

<Sidebar
isMobileOpen={isSidebarOpen}
onClose={() => setIsSidebarOpen(false)}
/>

<div className="lg:ml-64">

<TopNavbar
onMenuClick={() => setIsSidebarOpen(true)}
/>

<main className="p-8 space-y-8">
<div>

<h1 className="text-4xl font-bold">
🤖 AI Business Copilot
</h1>

<p className="text-slate-400 mt-2">
Your intelligent AI business consultant.
</p>

</div>
<div className="grid md:grid-cols-4 gap-5">

<BusinessInsightCard
title="Business Score"
value="92"
color="text-green-400"
/>

<BusinessInsightCard
title="Profit Potential"
value="+18%"
color="text-indigo-400"
/>

<BusinessInsightCard
title="Inventory Risk"
value="Low"
color="text-yellow-400"
/>

<BusinessInsightCard
title="Growth"
value="+12%"
color="text-purple-400"
/>

</div>
<div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-[500px] overflow-y-auto">

{messages.map((msg, index)=>(

<ChatMessage
key={index}
type={msg.type}
message={msg.message}
/>

))}

</div>
<SuggestionCards
onSelect={(text)=>setQuestion(text)}
/>
<ChatInput

question={question}

setQuestion={setQuestion}

askAI={askAI}

/>
 </main>

  </div>

  </div>


);
}