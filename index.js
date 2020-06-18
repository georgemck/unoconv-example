const fs = require('fs'), path = require('path'), unoconv = require('unoconv2');
unoconv.convert('hello.docx', 'pdf', function (err, buffer) {
  fs.writeFileSync(path.resolve('', 'world.pdf'), buffer);
}); 
