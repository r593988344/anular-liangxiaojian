let express = require("express"); //首先引入express模块，不了解去看nodejs教程 安装：npm install express
let bodyParser = require("body-parser");
let app = express();
let fs = require("fs"); // 文件系统，引入user.json的数据 也可以自己随便写个数据 ;
let cors = require("cors"); // 这个比较重要，解决跨域问题.npm install cors 装一下
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//配置body-parser
//只要加入这个配置，就会在req加一个属性body
//可以通过req.body获取post表单请求体数据
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());
app.use(cors({
  origin: ["http://localhost:4200"], // 这是本地的默认地址和端口，vue启动的项目就是在这里，这样保证了等会我们在浏览器能访问服务器的数据（city.json）
  methods: ["GET", "POST"],
  allowHeaders: ["Content-Type", "text/plain"],
}));
// 连接数据库
// 如连接的数据库不需要存在，当插入第一条数据后自动被创建
mongoose.connect("mongodb://localhost/sensorList");
// 设计表结构
// 字段名称就是表结构中的属性名称
// 约束的目的是为了保证数据的完整性
let SensorListSchema = new Schema({
  collectorNumber: {
    type: String,
  },
  sensorNumber: {
    type: String,
  },
  vibrationThreshold: {
    type: Number,
  },
  cycle: {
    type: String,
  },
  temperature: {
    type: String,
  },
  humidity: {
    type: String,
  },
  longitude: {
    type: Number,
  },
  latitude: {
    type: Number,
  },
  sectionId: {
    type: String,
  },
  creatTime: {
    type: String,
  },
  status: {
    type: String,
  },
});
// mongoose.model 方法就是用来将一个架构发布为model
// 第一个参数： 传入一个大写名词单数字符串生成 小写复数 的集合名称
// 例如这里User最终会变为users集合名称
// 第二个参数：架构 Schema
// 返回值：模型构造函数
const SensorList = mongoose.model("SensorList", SensorListSchema);
// 获取城市列表
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
// 获取短信历史信息
app.get("/historyMessage", function(req, res) {
  res.setHeader("Content-Type", "text/plain;charset=utf-8");
  fs.readFile(__dirname + "/" + "historyMessage.json", "utf-8", function(err, data) {
    if (err) {
      console.log(err);
      return;
    }
    res.end(data);
  });
});
// 获取传感器列表
app.get("/sensorList", function(req, res) {
  let lists = {sensorList: []};
  res.setHeader("Content-Type", "text/plain;charset=utf-8");
  SensorList.find(function(err, ret) {
    if (err) {
      console.log("查询失败");
    } else {
      lists.sensorList = ret;
      res.send(lists);
    }
  });
});
// 查询传感器列表
app.post("/searchSensorList", function(req, res) {
  let lists = {sensorList: []};
  res.setHeader("Content-Type", "text/plain;charset=utf-8");
  console.log(req.body);
  const num = req.body.collectorNumber ? req.body.collectorNumber : "";
  const id = req.body.sectionId ? req.body.sectionId : "";
  SensorList.find({collectorNumber: {$regex: num} ,
    sectionId: {$regex: id}}, function(err, ret) {
    if (err) {
      console.log("查询失败");
    } else {
      lists.sensorList = ret;
      res.send(lists);
    }
  });
});
// 删除传感器列表数据
app.post("/deleteSensorList", function(req, res) {
  // console.log(req.body);
  res.setHeader("Content-Type", "text/plain;charset=utf-8");
  let deleteKey = req.body.id;
  SensorList.remove( {_id: deleteKey}, function(err, ret) {
     if (err) {
       res.json({error: "No such sensor"});
     } else {
       res.json({success: true});
     }
   });
});
// 初始化node服务器端口
let server = app.listen(3000, function() { // 设置服务端端口为3000,即：http://127.0.0.1:3000
  let host = server.address().address;
  let port = server.address().port;
});
