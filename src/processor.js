/** Function to process individual AST nodes */
const processNode = async (node, basePath, context) => {
    switch (node.type) {
        /** Function handling */
        case "Style":
            context.functions[node.name] = { body: [], executed: false };
            context.currentFunction = node.name;
            break;

        /** Generic handling */
        case "Generic":
            console.log("Output Content by the AI was given an generic item: \n", node)
            break;

        default:
            console.log(`Unknown node type: ${node.type}`);
            break;
    }
};

/** Post-process the AST */
function postProcess = (ast, context) => {
    const { variables, functions, loops, forLoops } = context;

    ast.forEach((node) => {
        if (node.type === "Lyrics") {
            // Add logic
        }
    });
};

module.exports = { postProcess, processNode };
