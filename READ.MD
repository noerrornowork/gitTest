### 该项目可以前后端连载

- 命令行: npm run all即可

- Token获取: 在登陆接口,返回token令牌
- 1. 安装jsonwebtoken npm install jsonwebtoken
- 2. 引入jsonwebtoken
- 3. jwt.sign("规则", "加密字符", "过期间隔", "箭头函数")

- Token验证: 
- 1. 安装passport, passport-jwt
- 2. passport初始化(在app.js)
- 3. passport配置(在app.js)
    `
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload)
                .then(user => {
                    if(user) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch(err => console.log(err))
        }));`
