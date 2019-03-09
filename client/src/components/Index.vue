<template>
    <div class="index">
      <header-nav></header-nav>
      <h1>初始化页面</h1>
    </div>
</template>

<script>
  import { test } from '../api'
  import HeaderNav from '../common/HeaderNav'
    export default {
      name: "index",
      components: {
        HeaderNav
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
