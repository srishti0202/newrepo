const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id : ${id}` );
});

customEmitter.on('response', () => {
    console.log('some other logic here');
});

customEmitter.emit('response', 'john', 34)


/*   ************Important************ */
// server has an event request and it extends the EventEmitter
// const http = require('http');
// const server = http.createServer();
// server.on('request', (req, res) => {
//     res.send('Welcome')
// });

// server.listen(5000);