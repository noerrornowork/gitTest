<template>
    <div class="left-menu">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            class="el-menu-vertical-demo"
            text-color="#fff"
            active-text-color="#409EFF"
            background-color="#324057">
           <router-link to="/index">
             <el-menu-item index="0">
               <i class="el-icon-menu"></i>
               <span slot="title">首页</span>
             </el-menu-item>
           </router-link>
            <template v-for="(item, index) in items">
              <el-submenu v-if="item.children" :index="item.path" :key="item.path">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span slot="title">{{item.name}}</span>
                </template>
                <router-link v-for="(citem, cindex) in item.children" :to="citem.path" :key="citem.cindex">
                  <el-menu-item :index="citem.path">
                    <span slot="title">{{citem.name}}</span>
                  </el-menu-item>
                </router-link>
              </el-submenu>
            </template>
          </el-menu>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
      name: "LeftMenu",
      data() {
          return {
            items: [
              {
                icon: 'el-icon-star-off',
                name: '资金管理',
                path: 'fund',
                children: [{path: 'fundList', name: '资金流水'}]
              },
              {
                icon: 'el-icon-location',
                name: '信息管理',
                path: 'info',
                children: [{path: 'infoShow', name: '个人信息'}]
              }
            ]
          }
      }
    }
</script>

<style lang="less" scoped>
.left-menu {
  width: 100%;
  height: 100%;
  .el-menu {
    border: none;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 800px;
  }
  .el-menu-vertical-demo {
    width: 35px;
  }
  .hiddenDropdown,
  .hiddenDropname {
    display: none;
  }
}
</style>
