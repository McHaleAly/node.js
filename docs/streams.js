const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8' });
const writeStream = fs.createwriteStream('./docs/blog4.txt');
/*
readStream.on('data', (chunk) => {
    console.log('-----NEW CHUNK-----');
    console.log(chunk);  //(chunk.toString());
    writeStream.write('\nNEWCHUNK\n');      //pass data through a stream
    writeStream.write(chunk);
});
*/

// listening for a data event from the read stream, that every time we get data through out the stream we can use call back to chunk

//piping must be from a readable to writable stream
readStream.pipe(writeStream);  //piping in to a writestream