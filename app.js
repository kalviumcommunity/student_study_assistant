require("dotenv").config();
const {GoogleGenerativeAI} = require("@google/generative-ai");
// const runSystemUser = require("./prompts/systemUser.js");
// const runZeroShot = require("./prompts/zeroShot.js");
// const runOneShot = require("./prompts/oneShot.js");
// const runMultiShot = require("./prompts/multiShot.js");
const runDynamic = require("./prompts/dynamic.js");



const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// runSystemUser(genAI);
// runZeroShot(genAI);
// runOneShot(genAI);
// runMultiShot(genAI);
runDynamic(genAI, "Math", "Pythagorean Theorem")