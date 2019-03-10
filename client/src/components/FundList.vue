<template>
    <div class="fund-list">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column
          prop="date"
          label="创建时间"
          width="250">
        </el-table-column>
        <el-table-column
          prop="type"
          label="收支类型"
          width="180">
        </el-table-column>
        <el-table-column
          prop="description"
          label="收支描述">
        </el-table-column>
        <el-table-column
          prop="income"
          label="收入">
        </el-table-column>
        <el-table-column
          prop="expense"
          label="消费">
        </el-table-column>
        <el-table-column
          prop="cash"
          label="现金">
        </el-table-column>
        <el-table-column
          prop="remark"
          label="备注">
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
  import { getAllProfiles } from '../api'
    export default {
      name: "fundList",
      created() {
        this.queryAllProfiles()
      },
      data() {
          return {
            tableData: []
          }
      },
      methods: {
        async queryAllProfiles() {
          let res = await getAllProfiles();

          console.log(res.data);
        }
      }
    }
</script>

<style scoped>
.fund-list {

}
</style>
