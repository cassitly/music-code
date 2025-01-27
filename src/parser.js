/** CENTRALIZED PARSER */
module.exports = function centralParse(lines) {
    return lines
        .filter(line => line.trim() && !line.startsWith("#")) // Ignore empty lines and comments
        .map(line => {
            
            if (line.startsWith("@style")) {
                return { type: "Style", style: line.match(/@style (.+)/)?.[1] };
            } else

            if (line.startsWith("@title")) {
                return { type: "Title", title: line.match(/@title (.+)/)?.[1] }
            } else

            if (line.startsWith("@lyrics")) {
                // Add Logic for lyrics
                return { type: "Lyrics", parameters: line.match(/@lyrics (.+)/)?.[1] }
            } else

            if (line.startsWith("@thumbnail")) {
                return { type: "Thumbnail", prompt: line.match(/@thumbnail (.+)/)?.[1] }
            } else

            if (line.startsWith("@desc")) {
                // Also use as an style prompt.
                return { type: "Description", message: line.match(/@desc (.+)/)?.[1] }
            }

            /** GENERIC STATEMENTS */
            else {
                return { type: "Generic", content: line };
            }
        });
};
