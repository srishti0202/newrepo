// streams extend the eventemitter class
//streams are used to read or write very big data sequentially
//readable, writeable, duplex, transform

const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt',
 { highWaterMark: 90000 ,
  encoding : 'utf8'});

stream.on('data', (chunk) => {
    console.log(chunk);
});

stream.on('error', (err) => {
    console.log(err);
});

//reading in chunks - 64kb 64kb and remainder in this case as the file is 169kb
//by default, the size of the buffer will be 64kb
