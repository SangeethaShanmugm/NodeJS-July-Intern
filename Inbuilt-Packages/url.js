var url = require("url");

var urlAddress =
  "https://www.youtube.com/results?search_query=reiki+for+positive+outcomes";

// https://www.youtube.com/results?search_query=reiki+for+positive+outcomes

var parseAddress = url.parse(urlAddress, true);
console.log(parseAddress);
// console.log(parseAddress.host);
// console.log(parseAddress.pathname);
// console.log(parseAddress.query.search_query);
