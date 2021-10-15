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
    <el-form-item v-if="isCraete">
      <el-button type="primary" @click="handleCreate(true)">新增</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from 'vue'

export default defineComponent({
  name: 'Search',
  props: {
    data: {
      type: Array as PropType<{ [key: string]: string | number }[]>,
      required: true
    },
    handleSearch: {
      type: Function,
      required: true
    },
    handleCreate: {
      type: Function,
      required: false
    }
  },
  setup(props) {
    const { handleCreate, handleSearch } = props
    const formData = ref({})
    const isCraete = ref(false)

    onMounted(() => {
      isCraete.value = !!handleCreate
    })

    // 搜索
    const onSubmit = (): void | false => {
      handleSearch(formData.value)
    }

    return {
      isCraete,
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