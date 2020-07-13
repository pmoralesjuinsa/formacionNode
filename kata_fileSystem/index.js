const fs = require('fs');

fs.writeFile('data.json', 'hola palomo', function (error) {
    if(error) throw error;
    fs.readFile('data.json', 'utf-8', (error, data) => {
        if(error) {
            console.log(`Error ${error}`);
        } else {
            console.log(data);
        }
    })
})
