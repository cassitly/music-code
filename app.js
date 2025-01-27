
const run = require("./src/runner");

const { generateItems } = require("./src/generator/bin.pkg");
const { writeConfig, configure } = require('./src/settings');
const { existsSync } = require("fs");

generateItems();
writeConfig();

module.exports = async function defineApp() {
    const sendPrompt = configure();
    // Add GROQ function logic
    if (!existsSync("./packages/Groq-chat/src/")) return false;
    const getResponse = require("./packages/Groq-chat/src/aiService");
    const response = await getResponse(sendPrompt);

    // Execute the response
    await run(response);
    console.log("Raw Output: \n", response)
}