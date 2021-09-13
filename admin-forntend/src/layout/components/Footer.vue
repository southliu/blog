<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <span class="logo">系统后台</span>
        <!-- <nav class="nav">
          <div v-for="item in navs" :key="item.router" class="nav_item">
            <router-link :to="item.router">
              {{ item.title }}
            </router-link>
          </div>
        </nav> -->
        <span class="">
          <i class="iconfont" @click="handlePopularize('qq')">&#xe6b2;</i>
          <i class="iconfont" @click="handlePopularize('wechat')">&#xe63c;</i>
          <i class="iconfont" @click="handlePopularize('github')">&#xe8c6;</i>
        </span>
      </div>
      <hr class="line" width="80%" color="#ccc" size="3" />
      <div class="row">
        <span class="copyright">©2021 Wechat: lnf1275093225</span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
  setup() {
  }
})
</script>
