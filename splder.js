var http = require('http')
let https =  require('https')
let cheerio = require('cheerio')
let url = 'https://www.lagou.com/'
//爬取到html中指定内容
function filterMenu(html){
    let $ = cheerio.load(html)
    let menu = $('.menu_main')
    let menuData = [];
    menu.each((idnex, value) => {
        //h2头部
        let menuTitle = $(value).find('h2').text();
        //内容
        let menuLists = $(value).find('a')
        let menuList = []
        menuLists.each((index,value) => {
            menuList.push($(value).text())
        })
        menuData.push({
            menuTitle:menuTitle,
            menuList:menuList
        })
    })
    return menuData;
}
function printMenu(menu) {
    menu.forEach((value) => {
        console.log(value.menuTitle +'\n')
        value.menuList.forEach((value) => {
            console.log(value)
        })
    })
}
https.get(url, (response)=> {
    let html = ''
    response.on('data',(data) => {
        html += data;
    })

    response.on('end', () => {
        var result = filterMenu(html);
        printMenu(result);
    })

    response.on('error', (err) => {
        console.log(err)
    })
})