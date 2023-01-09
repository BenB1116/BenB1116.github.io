
var greets = ["how's it going?", "what's new?", "how do?", "what's cooking?"
    ,"howzit?", "aloha", "holla", "what's poppin'?", "what's the haps?"];

var ran = Math.floor(greets.length * Math.random());

document.write(`<h1>${greets[ran].toUpperCase()}</h1>`);

