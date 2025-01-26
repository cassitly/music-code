/** CENTRALIZED PARSER */
module.exports = async function centralParse(lines) {
    return lines
        .filter(line => line.trim() && !line.startsWith("#") && !line.startsWith(undefined)) // Ignore empty lines and comments
        .map(line => {
            
            if (line.startsWith("@style")) {
                return { type: "Style", style: line.match };
            } else
            

            /** END STATEMENTS */
            if (line.startsWith("@end")) {
                return { type: "EndStatement" };
            } else

            /** LOOP STATEMENTS */
            if (line.startsWith("@while")) {
                return { type: "WhileLoop", condition: line.match(/@while \[(.+?)\]:/)?.[1], body: [], index: line.match(/@while \[(.+?)\]:/)?.index };
            } else

            if (line.startsWith("@for")) {
                return { type: "ForLoop", variable: line.match(/@for \[(.+?)\]/)?.[1], arguments: line.match(/@for \[(.+?)\] (.+)/)?.[2], range: line.match(/@for \[(.+?)\] (.+) \[(.+?)\]:/)?.[3], body: [], index: line.match(/@for \[(.+?)\] (.+) \[(.+?)\]:/)?.index };
            } else

            /** OUTPUT STATEMENTS */
            if (line.startsWith("@output")) {
                return { type: "OutputStatement", value: line.match(/@output (.+)/)?.[1], line: line.match(/@output (.+)/)?.[0] };
            }
            
            /** VARIABLE STATEMENTS */
            if (line.startsWith("@var")) {
                return { type: "Variable", name: line.match(/@var \[(.+?)\]:/)?.[1], param: line.match(/@var \[(.+?)\]: \((.+?)\)/)?.[2], value: line.match(/@var \[(.+?)\]: \((.+?)\)(.+)/)?.[3] };
            } else

            if (line.startsWith("@input")) {
                return { type: "InputStatement", prompt: line.match(/@input \[(.+)\]:/)?.[1], variable: line.match(/@input \[(.+)\]: (.+)/)?.[2] };
            }

            /** GENERIC STATEMENTS */
            else {
                return { type: "Generic", content: line };
            }
        });
};
