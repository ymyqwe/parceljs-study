// process.env.UV_THREADPOOL_SIZE = 64;
var fs = require('fs');
setInterval(() => {
  fs.readFile('aa.js', () => {});
}, 1000);
