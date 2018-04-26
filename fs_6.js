let fs = require('fs');

fs.rename('logs/abc.md', 'logs/abcc.txt',(err) => {
    err ? console.log(err):console.log('成功')
})