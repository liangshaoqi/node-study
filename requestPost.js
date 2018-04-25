/**
 *  post模拟提交表单,批量添加数据（注水）,token和cookie要每次都替换
* */
const https = require('http')
const queryString  = require('querystring')

//要提交的数据
let postData = queryString.stringify({
    'question[title]': '11111111',
    'question[content]': '<p>111111</p>',
    'question[courseId]': '227',
    'question[lessonId]': '1739',
    '_csrf_token': '636608d03f305bdad6ae3068ffa9ec8883e102ba'
})

//头部文件
let options = {
    hostname:'www.codingke.com',
    port:80,
    method:'post',
    path:'/ajax/create/course/question',
    headers:{
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'UM_distinctid=162f16444ae379-0eb5214c0a2bea-3a614f0b-1fa400-162f16444af12ab; 53revisit=1524468303096; 53gid2=10669150669005; PHPSESSID=49sgci8s6p4e24jk5920n8t815; Hm_lvt_7d5fe787f1dd300413ad4b53656dc0b1=1524468303,1524649225; visitor_type=old; 53gid0=10669150669005; 53gid1=10669150669005; 53kf_72165667_keyword=https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DovkSsNqJStyZvpyx0UEsxQb2Yg_jgpLCip3lNTc7v3zqrxSsjZINGYj-cZ0BdAii%26wd%3D%26eqid%3Dc68f45a600024600000000055ae04d04; kf_72165667_keyword_ok=1; 53kf_72165667_land_page=https%253A%252F%252Fwww.codingke.com%252F; kf_72165667_land_page_ok=1; 53uvid=1; onliner_zdfq72165667=0; CNZZDATA1256018185=37613769-1524464897-http%253A%252F%252Fwww.codingke.com%252F%7C1524648482; Invite_code=329912; Hm_lpvt_7d5fe787f1dd300413ad4b53656dc0b1=1524649242',
        'Host': 'www.codingke.com',
        'Origin': 'http://www.codingke.com',
        'Referer': 'http://www.codingke.com/v/1739-lesson',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
        'X-CSRF-Token': '3bd4e31d0ee7d102b9991e1a99dde1f5fa872d6e',
        'X-Requested-With': 'XMLHttpRequest'
    }
}

let responseData = ''
let  request = https.request(options,(response) => {
    console.log('Status:'+ response.statusCode)
    console.log('header:'+ JSON.stringify(response.header))
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
        console.log(chunk);
    })
    response.on('end', () => {
        console.log('技术问答提交完毕！')
    })
})

request.on('error', (err) => {
    console.log(err)
})
//发送请求主题的数据块,即数据
request.write(postData)
request.end();