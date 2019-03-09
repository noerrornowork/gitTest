const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema: 对接数据库字段定义结构
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: String,
    identity: String,
    date: {
        type: Date,
        default: Date.now
    }
});
// 实例化user
module.exports = User = mongoose.model("User", UserSchema);