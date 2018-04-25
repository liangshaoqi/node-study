let fs = require('fs');

fs.readdir('logs',(err, files) => {
    if(err){
        cosnole.log(err)
    }else{
        console.log(files)
    }
})