<template>
    <div class="index">
      <header-nav></header-nav>
      <left-menu></left-menu>
      <home></home>
    </div>
</template>

<script>
  import { test } from '../api'
  import HeaderNav from '../common/HeaderNav'
  import LeftMenu from '../common/LeftMenu'
  import Home from '../components/Home'
    export default {
      name: "index",
      components: {
        HeaderNav,
        LeftMenu,
        Home
      },
      created() {
          this.getData();
      },
      data() {
        return {

        }
      },
      methods: {
        async getData() {
          let res = await test();
          console.log(res.data);
        }
      }
    }
</script>

<style scoped>

</style>
