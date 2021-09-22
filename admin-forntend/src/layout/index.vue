<template>
  <Header />
  <div class="box">
    <Menu />
    <div class="con">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'

export default defineComponent({
  components: {
    Header,
    Menu
  },
  setup() {
    
  },
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