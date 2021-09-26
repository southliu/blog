<template>
  <el-form
    :inline="true"
    :model="formData"
    class="box"
  >
    <el-form-item
      v-for="item in data"
      :key="item.key"
      :label="item.label"
    >
      <el-input placeholder="请输入" v-model="formData[item.key]"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">搜索</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Search',
  props: {
    data: {
      type: Array,
      required: true
    },
    onSearch: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const formData = ref({})
    // const formRef = ref()
    const onSubmit = (): void | false => {
      props.onSearch(formData.value)
    }

    return {
      formData,
      onSubmit
    }
  }
})
</script>

<style lang="scss" scoped>
  .box {
    padding: 10px;
  }
</style>