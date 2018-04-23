const fs = require('fs')

fs.stat('fs_1.js', (err,stats) => {
    if(err){
        console.log(err)
    }else{
        console.log(stats)
        console.log(`文件：${stats.isFile()}`)
        console.log(`目录：${stats.isDirectory()}`)
    }
})