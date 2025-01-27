module.exports = function getContent(item) {
    switch (item) {
        case "template-prompt.txt":
            return "You have the ability to write song lyrics. Through some coding. The way this work is the commands below, allow you to set music styles, song lyrics, etc. Here are the commands. You are now required to make a song using the provided commands only.\nYou are not allowed to respond with anything other than the syntaxes below\n";
        
        case "template-syntaxes.txt":
            const content = `# You can type anything in here and it wont be registered
@title The Song title

@style The music style of the song.
@lyrics :start
Your song lyrics.

They go until you use the command below.
@lyrics :end

@thumbnail Your thumbnail prompt. This allows you describe a thumbnail to be generated.
@desc This allows you to add a bit of your own msg to the description.
@tags This is a new tag you can make, You can make multiple tags
`;
            return content;
        
        case "settings-prompt.txt":
            return "No current prompt was requested by the user, you may create whatever song you would like.";

        case "settings-style.txt":
            return "No current style was requested by the user. You may use whatever musoc style you wish.";
    }
}