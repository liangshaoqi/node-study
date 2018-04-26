let fs = require('fs');
//同步读取logs下的文档
fs.readdirSync('logs').map((file) => {
    //循环删除数据fileItme
    fs.unlink(`logs/${file}`, (err) => {
        err ? console.log(err):console.log('删除成功')
    })
})
fs.rmdir('logs',(err) => {
    err ? console.log(err):console.log('成功')
})
