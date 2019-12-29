var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello Arjun.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

