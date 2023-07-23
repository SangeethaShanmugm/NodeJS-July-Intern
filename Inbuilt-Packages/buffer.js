// const buffer = require("buffer"); => global object

//create buffer

// var buff1 = new Buffer([1, 5, 10, 15]);

buf = Buffer.alloc(256);
var data = buf.write("Hello everyone");

console.log(data);

var buff1 = Buffer.from("1234567890"); //targetStart -> index
var buff2 = Buffer.from("HELLOO"); //sourceStart-> index

buff2.copy(buff1, 2, 2); //buffer.copy(buffer, targetStart, sourceStart)
console.log(buff1.toString());
console.log(buff2.toString());
console.log(Buffer.compare(buff1, buff2));
console.log(buff1.equals(buff2));
console.log(Buffer.concat([buff1, buff2]).toString());
