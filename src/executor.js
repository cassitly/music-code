const { processNode, postProcessAST } = require("./processor.js")

/** Main Executor Function */
module.exports = async function centralExecutor(ast) {
    const context = {
        lyrics: null,
        style: null,
        title: null,
        desc: null,
        thumbnail: null
    };

    /** Process each node in the AST */
    for (const node of ast) {
        try {
            await processNode(node, context);            
        } catch (error) {
            addOutput(`Error processing node of type ${node.type}: ${error}`);
        }
    }

    /** Handle post-processing for collected functions and IfStatements */
    postProcessAST(ast, context);
};
