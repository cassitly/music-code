const run = require("@source/runner");

const { generateItems } = require("@source/generator/bin.pkg");
const { writeConfig, configure } = require('@source/settings');
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

async function appReady() {
    generateItems();
    writeConfig();
}

module.exports = { appReady, defineApp }
