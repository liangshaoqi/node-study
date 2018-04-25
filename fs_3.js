const fs = require('fs')
//创建文件
fs.writeFile('message.txt', '我是梁绍奇', 'utf8', (err) => {
    if(err) throw err
    console.log('文件创建成功')
})