<template>
    <div class="home">
      <router-view></router-view>
    </div>
</template>

<script>
  import InfoShow from './InfoShow'
  import FundList from './FundList'
    export default {
      name: "home",
      components: {
        InfoShow,
        FundList
      }
    }
</script>

<style lang="less" scoped>
.home {
  position: absolute;
  top: 40px;
  left: 200px;
  bottom: 0;
  right: 0;
}
</style>
