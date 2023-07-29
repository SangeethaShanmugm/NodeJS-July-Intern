//formatting
var util = require("util");

var textMessage = "Congratulations %s on their %dth birthday";

// %s => text/string
//%d => number
console.log(util.format(textMessage, "Jack", 25));
