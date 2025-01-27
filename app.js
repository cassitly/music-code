
const run = require("./src/runner");

const { generateItems } = require("./src/generator/bin.pkg");
const { writeConfig, configure } = require('./src/settings');
const getResponse = require("./packages/Groq-chat/src/aiService");

module.exports = async function defineApp() {
    generateItems();
    writeConfig();

    const sendPrompt = configure();
    // Add GROQ function logic
    const response = await getResponse(sendPrompt);

    // Execute the response
    await run(response);
    console.log("Raw Output: \n", response)
}