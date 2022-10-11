const { readFile } = require('fs');

console.log("Started a new task");

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err); 
            return;
        }

        console.log(result);
        console.log('completed first task');
    
    });

console.log('starting next task');

console.log('first');
setTimeout(()=> {
    console.log('second');
},1000);

console.log('third');

setInterval(()=> {
    console.log('hello world');
}, 2000);

console.log("I will run first");

