<template>
  <el-table
    v-infinite-scroll="load"
    row-key="id"
    :data="tableData"
    style="width: 100%"
    :expand-row-keys="expands"
  >
    <el-table-column type="expand">
      <template  #default="props">
        <el-table
          v-show="props.row.id"
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="id"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="desc"
            label="地址">
          </el-table-column>
        </el-table>
      </template>
    </el-table-column>
    <el-table-column
      label="商品 ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="商品名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="描述"
      prop="desc">
    </el-table-column>
  </el-table>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  name: 'Home',
  setup() {
    const data = ref(new Array(1000).fill(true).map((item, index) => {
      return { id: index, name: `name${index}`, category: `category${index}`, desc: `desc${index}` }
    }))
    console.log('data:', data)

    return {
      tableData: data,
      // tableData: [{
      //   id: '12987122',
      //   name: '好滋好味鸡蛋仔',
      //   category: '江浙小吃、小吃零食',
      //   desc: '荷兰优质淡奶，奶香浓而不腻',
      //   address: '上海市普陀区真北路',
      //   shop: '王小虎夫妻店',
      //   shopId: '10333'
      // }, {
      //   id: '12987123',
      //   name: '好滋好味鸡蛋仔',
      //   category: '江浙小吃、小吃零食',
      //   desc: '荷兰优质淡奶，奶香浓而不腻',
      //   address: '上海市普陀区真北路',
      //   shop: '王小虎夫妻店',
      //   shopId: '10333'
      // }, {
      //   id: '12987125',
      //   name: '好滋好味鸡蛋仔',
      //   category: '江浙小吃、小吃零食',
      //   desc: '荷兰优质淡奶，奶香浓而不腻',
      //   address: '上海市普陀区真北路',
      //   shop: '王小虎夫妻店',
      //   shopId: '10333'
      // }, {
      //   id: '12987126',
      //   name: '好滋好味鸡蛋仔',
      //   category: '江浙小吃、小吃零食',
      //   desc: '荷兰优质淡奶，奶香浓而不腻',
      //   address: '上海市普陀区真北路',
      //   shop: '王小虎夫妻店',
      //   shopId: '10333'
      // }]
    }
  }
}
</script>

<style lang="less" scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>