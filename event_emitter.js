const EventEmitter = require('events')

class Player extends EventEmitter{

}

let myPlay = new Player()
//触发某个事件
myPlay.on('play', (name = '没有电影') => {
    console.log(`今天的电影${name}`)
    console.log(this)
    let c = 3;
})

myPlay.emit('play','火影忍者')
myPlay.emit('play','海贼王')
myPlay.emit('play','秦时明月')
//myPlay.emit('play')
