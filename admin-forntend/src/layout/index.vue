<template>
  <Header />
  <div class="box">
    <Menu />
    <div class="con">
      <el-config-provider :locale="zhCn">
        <router-view></router-view>
      </el-config-provider>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

export default defineComponent({
  components: {
    Header,
    Menu
  },
  setup() {
    return {
      zhCn
    }
  }
})
</script>

<style lang="scss" scoped>
  .box {
    display: flex;
  }
  .con {
    width: calc(100% - 250px);
    min-height: calc(100vh - 35px);
    box-sizing: border-box;
  }
</style>