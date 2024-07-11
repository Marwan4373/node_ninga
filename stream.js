const fs = require('fs');
const readStram = fs.createReadStream('./docs/doc.txt', {encoding : 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog.txt');
readStram.on('data', (chunk) => {
    console.log('=======new chunk======');
    console.log(chunk.toString());
    writeStream.write('\n NEW CHUNK \n')
    writeStream.write(chunk);
});
//function pipe make the code above
// readStram.pipe(writeStream);