const centralParse = require("./parser.js");
const centralExecutor = require("./executor.js");

// Main Compiler Function
async function action(lines) {
    const main = centralParse(lines);
    await centralExecutor(main);

    // Output for Debugging
    // console.log(main)
};

module.exports = async function run(content) {
    // Parse the output from the AI
    const lines = content.split("\n").map(line => line.trim());

    action(lines);
};
