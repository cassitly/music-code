
const run = require("./src/runner");
const { generateItems } = require("./src/generator/bin.pkg");
const { writeConfig, configure } = require('./src/settings');

async function defineApp() {
    generateItems();
    writeConfig();

    const sendPrompt = configure();
    // Add GROQ function logic
}