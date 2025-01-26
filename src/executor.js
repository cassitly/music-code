/** Main Executor Function */
const centralExecutor = async (ast) => {
    const context = {
        variables: {},
        functions: {},
        loops: {},
        currentFunction: null,
        currentIfBlock: null,
        currentLoop: null,
        currentForLoop: null,
        forLoops: {},
        exportedPackages: {},
    };

    let basePath = path.resolve(__dirname, '../../../')
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
