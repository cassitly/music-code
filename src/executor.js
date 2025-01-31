const { processNode, postProcess } = require("./processor.js")

/** Main Executor Function */
module.exports = async function centralExecutor(ast) {
    const context = {
        lyrics: {
            current: null,
            params: null,
            contents: []
        },
        style: null,
        title: null,
        tags: null,
        speech: null,
        desc: {
            processed: false,
            message: null
        },
        thumbnail: {
            prompt: null,
            generated: false
        },
        ready: {
            style: null,
            title: null,
            desc: null,
            thumbnail: null,
            lyrics: null,
            tags: null
        }
    };

    /** Process each node in the AST */
    for (const node of ast) {
        try {
            await processNode(node, context);            
        } catch (error) {
            console.error(`Error processing node of type ${node.type}: ${error}`);
        }
    }

    /** Handle post-processing for collected functions and IfStatements */
    postProcess(ast, context);
};
