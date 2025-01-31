
const run = require("./src/runner");

const { generateItems } = require("./src/generator/bin.pkg");
const { writeConfig, configure } = require('./src/settings');
const { existsSync } = require("fs");

async function defineApp() {
    const sendPrompt = configure();
    // Add GROQ function logic
    if (!existsSync("./packages/api-plugin/src/")) return false;
    const getResponse = require("./packages/api-plugin/src/aiService");
    const response = await getResponse(sendPrompt);

    // Execute the response
    await run(response);
    console.log("Raw Output: \n", response)
}

module.exports = async function appReady() {
    generateItems();
    writeConfig();
    await defineApp();
}