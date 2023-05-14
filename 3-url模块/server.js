const http = require('http')
const url = require('url') // 处理url模块

const server = http.createServer()

server.on('request', (req, res) => {
    const reqUrl = req.url
    // url.parse 参数1：需解析url  参数2：是否将query参数转为对象
    const urlObj = url.parse(reqUrl)
    console.log('解析url生成的对象', url.parse(reqUrl, true))
    console.log('上述对象生成url', url.format({
        protocol: 'https:',
        slashes: true,
        auth: null,
        host: 'www.baidu.com:443',
        port: '443',
        hostname: 'www.baidu.com',
        hash: '#tag=110',
        search: '?id=8&name=mouse',
        query: {id: '8', name: 'mouse'},
        pathname: '/ad/index.html',
        path: '/ad/index.html?id=8&name=mouse'
    }))
    console.log('拼接url1', url.resolve('/111/', '222'))
    console.log('拼接url2', url.resolve('/111', '222'))
    console.log('拼接url3', url.resolve('/111/', '/222'))
    res.writeHead(200, {"Content-type": "text/html;charset=utf-8"})
    res.end('我是end返回的')
})

server.listen(8066, () => {
    console.log('server start at http://localhost:8066')
})
