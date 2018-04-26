const fs = require('fs');
//压缩
const zlib = require('zlib')
//读取一个文件里面的内容
let fileReadStream = fs.createReadStream('data.json')
//写入
let fileWriteStream = fs.createWriteStream('data.json.gz')
fileWriteStream.on('pipe', (source) => {
    console.log(source)
})
fileReadStream.pipe(zlib.createGzip())
    .pipe(fileWriteStream)

//let count = 0
/*fileReadStream.once('data', (chunk) => {
    console.log(chunk.toString())
})*/

// fileReadStream.on('data', (data) => {
//     console.log(`${ count++ } 接受到：${data.length}`)
//     fileWriteStream.write(data)
// })
//
// fileReadStream.on('end', () => {
//     console.log('结束')
// })
//
// fileReadStream.on('error', (err) => {
//     console.log(err);
//     console.log('错误');
// })
