const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 连接数据库
// 制定连接数据库不需要存在，当插入第一条数据后自动被创建
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

// 当我们有了数据模型函数后，就可以使用这个构造函数对users集合中的数据为所欲为了
const lists = new SensorList(
  {
  collectorNumber: "5",
  sensorNumber: "223323344",
  vibrationThreshold: 93,
  cycle: "30-300",
  temperature: "25℃",
  humidity: "25℃",
  longitude: 135,
  latitude:  31,
  sectionId: "33",
  creatTime:  "2019-04-30 12:35:04",
  status: "开启",
});

// 添加数据
  lists.save(function(err, ret) {
    if (err) {
      console.log("保存失败");
    } else {
      console.log(ret);
      console.log("保存成功");
    }
  });

/*数据查询*/
/*User.find(function(err, ret) {
  if (err) {
    console.log("查询失败");
  } else {
    console.log("查询成功");
    console.log(ret);
  }
})*/

/*删除数据*/
/*SensorList.remove({
  _id: "5cda22a361229eb6cb2396a4",
}, function(err, ret) {
  if (err) {
    console.log("删除失败");
  } else {
    console.log("删除成功");
    console.log(ret);
  }
})*/
