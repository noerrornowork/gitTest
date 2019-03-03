const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();

// 引入路由
const usersRoute = require('./router/users');

// DB config
const db = require('./config').mongoURI;

// 使用body-parser中间件
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Connect MongoDB
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// passport初始化
app.use(passport.initialize());
// 配置passport
require("./config/passport")(passport);

app.use('/api/users', usersRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Sever is running on port ${port}`);
});