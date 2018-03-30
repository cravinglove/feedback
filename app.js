// 依赖项声明
// 视图相关放到views

var http = require('http')
var fs = require('fs')

// 只开放访问/ index.html
// 以及/public 的public目录下的文件内容

http
  .createServer(function (req, res) {
    var url = req.url;

    if (url === '/') {
      fs.readFile('./views/index.html', function (err, data) {
        if (err) {
          return res.end('404 Not Found.');
        }
        res.end(data);
      })
    } else if (url === '/post') {
      fs.readFile('./views/post.html', function (err, data) {
        if (err) {
          return res.end('404 Not Found');
        }
        res.end(data);
      })
    } else if (url.indexOf('/public/') === 0) {
      fs.readFile('.' + url, function (err, data) {
        if (err) {
          return res.end('404 Not Found.');
        }
        res.end(data);
      })
    } else {
      // 其他都处理为404
      fs.readFile('./views/404.html', function (err, data) {
        if (err) {
          return res.end('404 Not Found');
        }
        res.end(data);
      })
    }
  })
  .listen(3000, function () {
    console.log('running...')
  })