<template>
  <teleport to="#header">
    <div class="space"></div>
    <div class="header">
      <router-link to="/" class="logo">
        SOUTH.
      </router-link>
      <nav class="nav">
        <div v-for="item in navs" :key="item.router" class="nav_item">
          <router-link :to="item.router" active-class="nav_acitve">
            {{ item.title }}
          </router-link>
        </div>
      </nav>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export const navs = [
  {
    title: '首页',
    router: '/'
  },
  {
    title: '项目',
    router: '/case'
  },
  {
    title: '关于我们',
    router: '/about'
  }
]

export default defineComponent({
  name: 'Header',
  setup() {
    return {
      navs
    }
  }
})
</script>

<style lang="less" scoped>
  .space {
    height: 40px;
  }
  .header {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, .1);
    position: fixed;
    top: 0;
    z-index: 9999;
  }
  .logo {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .nav {
    display: flex;
    align-items: center;
  }
  .nav_item {
    margin-right: 30px;
    font-size: .9rem;
  }
  .nav_acitve {
    font-weight: bold;
  }
</style>