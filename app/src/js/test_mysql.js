let test_mysql = require('mysql');  //导入mysql包
let url = require('url')            //导入url包，这个为了方便解析传过来的url
const http = require('http')        //导入http包，为了nodejs开启服务端
const server = http.createServer((req, res) => {   //创建服务端
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By", "3.2.1");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    //设置返回格式 JSON, 解决跨域问题
    res.setHeader("Content-Type", "application/json");
//上面这些是为了解决跨域问题，否则dapp项目的8080端口无法访问这个服务端的8000端口
}).listen(8000)  //监听8000端口

//创建mysql连接，记得改成自己的数据库配置，而且记得自己在mysql提前创建了这个数据库（music）
let connection = test_mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'music'
});
'use strict';
connection.connect();
//举几个get和post请求例子
server.on('request', (req, res) => {         //服务端一直监听其他客户端发送过来的请求
    console.log(req.url)
    // 浏览器输入的 url 为 http://localhost:8000/hello?username=sense&sex=male#hello，
    // 则 req.url 为 /hello?username=sense&sex=male，
    // 浏览器输入的 url 中的 hash（如上的 #hello）无法传递到后端
    const url1 = req.url.split('?')[0] //将发送过来的url取/后？前的就是请求路径，？后的都是参数
    //spilt方法把req请求的url地址按？分开，第0个就是？前的请求路径.如果没有？参数，那整个都是请求路径
    const method = req.method //req.method就是“post”，“get”那些请求类型
    console.log(method)
    if (url1 === '/test' && method === 'POST') {
        console.log("/test--post")
    // request请求命中路由,即是post请求，而且路径是/test,例如http://127.0.0.1:8000/test
        let bodyStr = ''  //用来存储post请求里面数据，也就是客户端传过来的数据，即你dapp项目往这传的数据
        let first = 0
        let last = ''
        let txt = ''
        let img = ''
        let mp3 = ''
        req.on('data', (chunk) => { //这个不熟悉，好像是获取post请求里面传过来的数据
            bodyStr += chunk
        })
        req.on('end', () => {    //就像三次握手协议一样得发送一个响应，不然客户端会一直等待响应，等到天荒地老
            if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
            //if (req.headers['content-type'] === 'application/json') { //如果发送过来的request请求是json类型
                let bodyData = new URLSearchParams(bodyStr) //把bodyStr即存储post请求传过来的数据的这种字符串类型处理后，就可以用下标.来引用数据了，比如下面的body.first，获取first参数的值。
                console.log(bodyData)
                let body = {};
                bodyData.forEach((value, key) => {
                    body[key] = value;
                })
                first = parseInt(body.first)
                last = body.last
                txt= body.txt
                img= body.img
                mp3= body.mp3
                //编写自己的sql语句
                let sql = "insert into fl(first,last,txt,img,mp3) values(" + first + ",'" + last + "','" + txt +"','" + img +"','" + mp3 +"');"
                console.log(sql)
                connection.query(sql, (err, result) => { //执行sql语句
                    if (err) {  //错误就会控制台打印错误报错
                        console.log(err);
                        return "error"
                    }
                    // 6 处理结果
                    else { //因为是post请求，不需要返回响应数据，控制台随便打印一个ok就行
                        console.log("ok")
                        return "ok"
                    }
                })
            }
        })
        res.end('success') //别忘了一定要最好end一个字符串，不然客户端真的会一直等到天荒地老
    } else if (url1 === '/searchfirst' && method === 'GET') { // 客户端发过来get请求
        let temp = ""
        let first = url.parse(req.url, true).query.first //操作大同小异
        let sql = "select * from fl where first=" + first + ";" //设置sql语句
        res.writeHead(200, { //200是响应码，200-299都会被识别为正常的响应
            'Content-Type': 'application/json',   //返回json格式就这样
        });
        connection.query(sql, (err, result) => { //执行sql语句
            console.log("进入执行sql")
            if (err) {
                console.log(err);
                return "error"
            }
            let cmp=result[0]
            const data = {
                first: cmp.first,
                last: cmp.last,
                txt: cmp.txt,
                img: cmp.img,
                mp3: cmp.mp3,
            }
            const jsonData = JSON.stringify(data);
            res.write(jsonData);
            res.end()
        }) //下面的都是例子，大同小异
    }else if (url1 === '/searchBySongName' && method === 'GET') { // request请求命中路由2
        let temp = ""
        let song_name = url.parse(req.url, true).query.song_name
        let sql = "select * from song where song_name='" + song_name + "';"
        res.writeHead(200, {
            'Content-Type': 'text/plain',   //这种是返回纯文本的格式
        });
        connection.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                return "error"
            }
            for (let i = 0; i < result.length; i++) { //因为是get请求，客户端想从这个服务端获取数据
                let cmp = result[i] //result是从数据库查询到的一个特殊类型的数组,我是直接遍历这个数组把所有数据拼接成一个字符串返回的
                temp += "歌名：" + cmp.song_name + "; 歌手名：" + cmp.singer + "; 版权号：" + cmp.copyright + "; 歌曲时长：" + cmp.duration + "秒; 歌曲价格：" + cmp.song_price + "*1e10 Wei; 上传时间：" + cmp.time + ';\n';
            }
            res.write(temp) //遍历完结果数组后，用write方法将信息传递给客户端
            res.end()
        })
    } else if (url1 === '/upload' && method === 'POST') { // request请求命中路由1
        let bodyStr = ''
        req.on('data', (chunk) => {
            bodyStr += chunk
        })
        req.on('end', () => {
            if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
                let bodyData = new URLSearchParams(bodyStr) //把bodyStr即存储post请求传过来的数据的这种字符串类型处理后，就可以用下标.来引用数据了，比如下面的body.first，获取first参数的值。
                console.log(bodyData)
                let body = {};
                bodyData.forEach((value, key) => {
                    body[key] = value;
                })
                let duration = parseInt(body.duration)
                let song_price = parseInt(body.song_price)
                let song_name = body.song_name
                let singer = body.singer
                let lyric = body.lyric
                let copyright = body.copyright
                let receiver = body.receiver
                let song_address = body.song_address
                let time = body.time
                let sql = "insert into song(song_name,singer,lyric,copyright,duration,receiver,song_price,song_address,time) values('" + song_name + "','" + singer + "','" + lyric + "','" + copyright + "'," + duration + ",'" + receiver + "'," + song_price + ",'" + song_address + "','" + time + "');"
                connection.query(sql, (err, result) => {
                    if (err) {
                        console.log(err);
                        return "error"
                    }
                    // 6 处理结果
                    else {
                        console.log("ok")
                        return "ok"
                    }
                })
            }
        })
        res.end('success')
    }
})