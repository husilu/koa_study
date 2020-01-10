const mongoose = require('mongoose');
// 这里的流程官网上有，讲的很清楚，每一步是干什么的
// 连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/husilu")
const Schema = mongoose.Schema;
const exampleSchema = new Schema({
  msg: {
    type: String,
    required: true
  },
}, { 
  collection: '', // 这里是为了避免新建的表会带上 s 后缀
  versionKey: false // 不需要 __v 字段，默认是加上的
});

module.exports = mongoose.model('examples', exampleSchema);
