/** Main Executor Function */
const centralExecutor = async (ast) => {
    const context = {
        lyrics: null
    };

    /** Process each node in the AST */
    for (const node of ast) {
        try {
            await processNode(node, basePath, context);            
        } catch (error) {
            addOutput(`Error processing node of type ${node.type}: ${error}`);
        }
    }

    /** Handle post-processing for collected functions and IfStatements */
    postProcessAST(ast, context);
};
