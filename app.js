require("dotenv").config();
const {GoogleGenerativeAI} = require("@google/generative-ai");
// const runSystemUser = require("./prompts/systemUser.js");
const runZeroShot = require("./prompts/zeroShot.js");


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// runSystemUser(genAI);
runZeroShot(genAI);