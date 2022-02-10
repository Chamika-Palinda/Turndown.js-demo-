const TurndownService = require('turndown');
var fs = require('fs');

// create an instance of Turndown service
const turndownService = new TurndownService();
let filename = "readme.html"

fs.readFile(process.cwd() + '/' + filename, function (err, data) {
    if (err) {
        throw err;
    }
    let text = data.toString();

    const markdown = turndownService.turndown(text);

    let filePath = process.cwd() + "/readme.md";
    fs.writeFile(filePath, markdown, { flag: "wx" }, function (err) {
        if (err) {
            console.log("File '" + filePath + "' already exists. Aborted!");
        } else {
            console.log("Done, saved to " + filePath);
        }
    });
});

