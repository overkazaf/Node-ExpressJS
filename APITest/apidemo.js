var log = console.log;

// __dirname
log(__dirname);

// __filename
log(__filename);


// time
console.time('100-elements');
for (var i = 0; i < 100000000; i++) {
  ;
}
console.timeEnd('100-elements');


var str = "hello world";
var bf = new Buffer(str);
log(Buffer.byteLength(bf));