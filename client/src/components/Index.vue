<template>
    <div class="index">
      <h1>初始化页面</h1>
    </div>
</template>

<script>
  import { test } from '../api'
    export default {
      name: "index",
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
