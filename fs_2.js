const fs = require('fs')
//创建文件夹
fs.mkdir('logs', (err) => {
    err?console.log(err):console.log('成功');
})