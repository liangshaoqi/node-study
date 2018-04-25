let fs = require('fs')

fs.readFile('logs/log.log','utf8', (err, data) => {
    if(err) {
        console.log(err)
    }else{
        console.log(data);
    }
})