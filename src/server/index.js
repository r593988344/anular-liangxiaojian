let express = require("express"); //首先引入express模块，不了解去看nodejs教程 安装：npm install express

let app = express();

let fs = require("fs"); // 文件系统，引入user.json的数据 也可以自己随便写个数据 ;

let cors = require("cors"); // 这个比较重要，解决跨域问题.npm install cors 装一下

app.use(cors({

  origin: ["http://localhost:4200"], // 这是本地的默认地址和端口，vue启动的项目就是在这里，这样保证了等会我们在浏览器能访问服务器的数据（city.json）

  methods: ["GET", "POST"],

  alloweHeaders: ["Content-Type", "Authorization"],

}));

app.get("/city", function(req, res) {
  res.setHeader("Content-Type", "text/plain;charset=utf-8");
  fs.readFile(__dirname + "/" + "city.json", "utf-8", function(err, data) {
    if (err) {
      console.log(err);
      return;
    }
    res.end(data);
  });
});
app.get("/sensorList", function(req, res) {
  res.setHeader("Content-Type", "text/plain;charset=utf-8");
  fs.readFile(__dirname + "/" + "sensorList.json", "utf-8", function(err, data) {
    if (err) {
      console.log(err);
      return;
    }
    res.end(data);
  });
});
let server = app.listen(3000, function() { // 设置服务端端口为3000,即：http://127.0.0.1:3000

  let host = server.address().address;

  let port = server.address().port;

  // console.log("应用实例，访问地址为 http://%s:%s", host, port);

});
