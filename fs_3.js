const fs = require('fs')
//创建文件
fs.writeFile('logs/log.log', '我是log文件的+++', 'utf8', (err) => {
    if(err) throw err
    console.log('文件创建成功')
})
fs.appendFile('logs/log.log', '我是追加的内容', 'utf8', (err) => {
    if(err) throw err
    console.log('文件创建成功')
})