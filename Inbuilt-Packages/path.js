const path = require("path");

const testFilePath = "https://github.com/SangeethaShanmugm?tab=repositories";
const obj = {
  dir: "https://github.com",
  base: "SangeethaShanmugm?tab=repositories",
};
console.log(path.dirname(testFilePath));
console.log(path.basename(testFilePath));
console.log(path.extname(testFilePath));
console.log(path.isAbsolute(testFilePath));
console.log(path.parse(testFilePath));
console.log(path.format(obj)); //pass object
console.log(path.relative("A:\Desktop files\E-batch\NodeJS-July\backup", "A:\Desktop files\E-batch\NodeJS-July\json"));
