const runZeroShot = async (genAI) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const zeroShotPrompt = "Explain the process of photosynthesis in simple words suitable for a high school student.";

  console.log("ℹ️  Running Zero-Shot Prompt...");

  const result = await model.generateContent(zeroShotPrompt);

  console.log("✅ Zero-Shot Prompt Output:\n" + result.response.text());
}

module.exports = runZeroShot;