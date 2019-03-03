<template>
    <div class="register">
      <el-form :model="registerForm" status-icon :rules="registerRules" ref="registerForm" label-width="200px" class="registerForm">
        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input type="email" v-model="registerForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="text" v-model="registerForm.pass"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="conPass">
          <el-input type="text" v-model="registerForm.conPass"></el-input>
        </el-form-item>
        <el-form-item label="选择身份" prop="identify">
          <el-select v-model="registerForm.identity" placeholder="请选择身份">
            <el-option v-for="item in identifyOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import { register, test } from '../api'
    export default {
      name: "register",
      created() {
        test()
      },
      data() {
        let validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            callback()
          }
        };
        let validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.registerForm.pass) {
            callback(new Error('2次输入密码不一致'));
          } else {
            callback()
          }
        };
        const identifyOptions = [
          {label: "管理员", value: "0"},
          {label: "john", value: "1"}
        ];
        const registerRules = {
          userName: [
            {required: true, message: "请输入用户名", trigger: "blur"}
          ] ,
          email: [
            {required: true, message: "请输入邮箱地址", trigger: "blur"},
            {required: true, type: "email", message: "邮件格式不正确", trigger: "blur"}
          ] ,
          pass: [
            {required: true, validator: validatePass, trigger: "blur"}
          ] ,
          conPass: [
            {required: true, validator: validatePass2, trigger: "blur"}
          ]
        };
          return {
            registerForm: {
              userName: '',
              email: '',
              pass: '',
              conPass: '',
              identity: ''
            },
            identifyOptions: identifyOptions,
            registerRules: registerRules
          }
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate(valid => {
            if (valid) {
              console.log("校验表单");
              this.postRegister();
            }
          })
        },
        async postRegister() {
          const args = {
            name: this.registerForm.userName,
            email: this.registerForm.email,
            password: this.registerForm.pass
          };
          let res = await register(args);
          console.log(res);
        }
      }
    }
</script>

<style lang="less" scoped>
.register {
  padding: 40px 40px;
  width: 60%;
  background-color: #ffffff;
  .el-form {
    button {
      width: 100%;
    }
  }
}
</style>
