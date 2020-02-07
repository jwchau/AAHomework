const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("how do you like them apples?", 
    (res) => {
        console.log(`You replied ${res}.`);
        reader.close();
    }
);

console.log("end of file");