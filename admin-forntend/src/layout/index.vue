<template>
  <Header />
  <div class="con">
    <Menu />
    <router-view></router-view>
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
  .con {
    display: flex;
    margin-top: 10px;
  }
</style>