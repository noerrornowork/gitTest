<template>
    <header class="header-nav">
      <el-row>
        <el-col :span="6" class="logo-container">
          <img src="../assets/logo.png" alt="">
          <span class="title">资金管理后台系统</span>
        </el-col>
        <el-col :span="6" :offset="12" class="user">
          <div class="user-info">
            <img src="../assets/logo.png" class="avatar" alt="">
            <div class="welcome">
              <p class="name come">欢饮</p>
              <p class="name avatar">迷你喵</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </header>
</template>

<script>
    export default {
        name: "header-nav"
    }
</script>

<style lang="less" scoped>
.header-nav {
  width: 100%;
  height: 30px;
  min-width: 600px;
  padding: 5px;
  background-color: #324057;
  color: #fff;
  border-bottom: 1px solid #1f2d3f;
  .logo-container {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
    }
    .title {
      line-height: 30px;
      font-size: 14px;
      letter-spacing: 2px;
    }
  }
  .user {
    .user-info {
      position: absolute;
      right: 0;
      height: 30px;
      display: flex;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
      }
      .welcome {
        width: 60px;
        .name.come {
          text-align: center;
          font-size: 12px;
        }
        .name.avatar {
          font-size: 12px;
          text-align: center;
          color: #409eff;
        }
      }
    }
  }
}
</style>
