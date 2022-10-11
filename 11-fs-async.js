const {readFile, writeFile} = require('fs');

//callback hell
console.log('start');
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return; 
        }

        const second = result;
        
        writeFile(
            './content/result-async.txt',
            `The result is : ${first + ". " + second}`,
            (err, result) => {
                if(err){
                    console.log(err);
                    return;
                }
    console.log('done with the task');
            }
        )
    });
});

console.log('start with the next task');