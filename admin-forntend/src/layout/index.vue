<template>
  <Header />
  <div class="box">
    <Menu />
    <div class="con">
      <router-view></router-view>
    </div>
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  components: {
    Header,
    Menu,
    Footer
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
    min-height: calc(100vh - 60px);
    box-sizing: border-box;
  }
</style>