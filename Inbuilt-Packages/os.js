const os = require("os");

console.log("Free Memory", os.freemem() / 1024 / 1024 / 1024);
console.log("Total Memory", os.totalmem() / 1024 / 1024 / 1024);

// 1kb => 1024 bytes => 1mb => 1024 kb => 1gb => 1024 mb

console.log("OS Version", os.version());
console.log("cpus", os.cpus());
console.log("platform", os.platform());
console.log("Arch", os.arch());
console.log("Uptime", os.uptime());
console.log("UserInfo", os.userInfo());
