<template>
  <div class="login">
    <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="200px" class="registerForm">
      <el-form-item label="邮箱" prop="email">
        <el-input type="email" v-model="loginForm.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="text" v-model="loginForm.pass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { doLogin } from '../api'
    export default {
      name: "login",
      created() {

      },
      data() {
        const loginRules = {
          email: [
            {required: true, message: "请输入邮箱地址", trigger: "blur"},
            {required: true, type: "email", message: "邮件格式不正确", trigger: "blur"}
          ] ,
          pass: [
            {required: true, message: "请输入密码", trigger: "blur"}
          ]
        };
          return {
            loginForm: {
              email: "",
              pass: ""
            },
            loginRules: loginRules
          }
      },
      methods: {
        login(formName) {
          this.$refs[formName].validate(valid => {
            if(valid) {
              console.log("校验表单");
              this.checkLogin().then(resp => {
                if(resp.data.errCode === '0') {
                  // console.log(resp.data.token);
                  let token = resp.data.token;
                  // 将token存入localStorage
                  localStorage.setItem("eleToken", token);
                  // 跳转到主页
                  this.$router.push("/index")
                }
              })
            }
          })
        },
        async checkLogin() {
          const args = {
            email: this.loginForm.email,
            password: this.loginForm.pass
          };
          return await doLogin(args);
        }
      }
    }
</script>

<style lang="less" scoped>
.login {
  .el-button {
    width: 100%;
  }
}
</style>
