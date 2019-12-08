<template>
  <div class="table-box">
    <el-table
      :data="tableData"
      style="width: 100%">
      <template  v-for="(item,index) in columns">
        <!--通用列无过滤-->
        <el-table-column
          v-if="item.key||item.trans"
          :prop="item.key"
          :label="item.title"
          :width="item.width"
          :show-overflow-tooltip="true"
          align="center">
        </el-table-column>
      </template>

    </el-table>
  </div>
</template>
<!--
column:[
  {
      title:"name",
      trans:(row)=>{    自定义key函数
        return row.value
      }
    },
    {
      key:"agent_realname",   取值的key
      title:"agent"
    },

]
-->

<script>
  export default {
    name: "table"
  }
</script>

<style scoped>

</style>
