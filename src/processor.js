const { saveGeneration } = require("./generator/bin.pkg");

/** Function to process individual AST nodes */
function processNode(node, context) {
    switch (node.type) {
        /** Music handling */
        case "Style":
            context.style = node.style;
            context.ready.style = true;
            break;
        
        case "Title":
            context.title = node.title;
            context.ready.title = true;
            break;
        
        case "Lyrics":
            if (node.parameters === ":start") {
                context.lyrics.current = true;
                context.lyrics.params = node.parameters;
            }

            if (node.parameters === ":end") {
                context.lyrics.current = false;
                context.lyrics.params = node.parameters;
            }
            break;

        /** Upload handling */
        case "Thumbnail":
            context.thumbnail.prompt = node.prompt;
            context.ready.thumbnail = true;
            break;

        case "Description":
            context.desc.message = node.message;
            context.ready.desc = true;
            break;

        /** Generic handling */
        case "Generic":
            if (context.lyrics.current === true) {
                context.lyrics.contents.push(node.content);
                return false;
            };
            console.log("Output Content by the AI was given an generic item: \n", node);
            break;

        default:
            console.log(`Unknown node type: ${node.type}`);
            break;
    }
};

/** Post-process the AST */
function postProcess(ast, context) {
    const { lyrics, ready } = context;

    ast.forEach((node) => {
        if (node.type === "Lyrics") {
            if(!Array.isArray(lyrics.contents)) console.error("No Arrary was passed on Lyrics Contents: \n", lyrics.contents);
            ready.lyrics = true;

            saveGeneration(node.type, context, node);
        } else
        // Other Generations
        if (node.type !== "Generic") {
            saveGeneration(node.type, context, node);
        }
        // Unknown Generations
        else {
            if (node.type === "Generic") return false;
            console.log("Unknown node type given by the AI:", node.type);
        }
    });
};

module.exports = { postProcess, processNode };
