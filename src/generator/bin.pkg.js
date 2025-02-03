const { existsSync, mkdirSync, writeFileSync, appendFileSync } = require("fs");
const path = require("path")

const assets = path.join(__dirname, "../../assets");
const bin = path.join(__dirname, "../../bin");
const packages = path.join(__dirname, "../../packages");

function saveGeneration(item, context, raw) {
    const { ready, lyrics, title, style, thumbnail, desc, tags } = context;
    const save = path.join(bin, "/", title);
    if (!existsSync(save)) mkdirSync(save);

    switch (item) {
        case "Lyrics":
            if (!ready.lyrics) console.error("Lyrics Generation not ready: \n", lyrics);
            const combined = lyrics.contents.join("\n");
            writeFileSync(save + "/Lyrics.txt", combined, "utf-8")
            break;

        case "Style":
            if (!ready.style) console.error("Style Generation not ready: \n", style);
            writeFileSync(save + "/Style.txt", style, "utf-8");
            break;

        case "Thumbnail":
            if (!ready.thumbnail) console.error("Thumbnail Generation not ready: \n", thumbnail.prompt);
            if (!thumbnail.generated) {
                // TODO: Add thumbnail Generation.
                console.log("Image Generation not implemented yet.");
                writeFileSync(save + "/Thumbnail.txt", thumbnail.prompt, 'utf-8');
            }
            break;

        case "Description":
            if (!existsSync(save + "/process")) mkdirSync(save + "/process");
            if (!ready.desc) console.error("Description Saving not ready: \n", desc.message);
            if (!desc.processed) {
                if (existsSync(save + "/Desc.txt")) {
                    console.log("Description Approved.");
                    return false;
                }
                writeFileSync(save + "/process/Desc.txt", desc.message, "utf-8");
            }
            break;

        case "Title":
            if (!ready.title) console.error("Title Generation not ready: \n", title);
            writeFileSync(save + "/Title.txt", title, "utf-8");
            break;

        case "Tags":
            if (!ready.tags) console.error("Tag Generation not ready: \n", tags);
            writeFileSync(save + "/Tag.txt", tags, "utf-8");
            break;

        case "Raw":
            appendFileSync(save + "/Raw_Output.txt", raw, 'utf-8');
            break;

        default:
            console.log(`Unkown Generation Type: ${item}`);
            break;
    }
}

function generateItems() {
    if (existsSync(packages)) return false;
    if (existsSync(bin)) return false;
    if (existsSync(assets)) return false;
    
    mkdirSync(packages);
    mkdirSync(bin);
    mkdirSync(assets);
}

module.exports = { generateItems, saveGeneration, assets }

// Write Downloader for github repository: Animation-Creator
