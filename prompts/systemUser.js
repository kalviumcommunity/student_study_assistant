const runSystemUser = async (genAI) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  console.log("ℹ️  Running System + User Prompt...");

  const combinedPrompt = `
You are an expert study assistant helping students generate notes, solve problems, and summarize lessons.
Task: Summarize today’s physics lesson in 5 bullet points using simple language.
`;

  const result = await model.generateContent(combinedPrompt);
  console.log("✅ System + User Prompt Output:\n" + result.response.text());
};

module.exports =  runSystemUser;

