<template>
  <teleport to="#footer">
    <footer class="footer">
      <div class="container">
        <div class="row">
          <span class="col-4 logo">SOUTH.</span>
          <span class="col-4">
            <nav class="nav">
              <div v-for="item in navs" :key="item.router" class="nav_item">
                <router-link :to="item.router">
                  {{ item.title }}
                </router-link>
              </div>
            </nav>
          </span>
          <span class="col-4">
            <i class="iconfont" @click="handlePopularize('qq')">&#xe6b2;</i>
            <i class="iconfont" @click="handlePopularize('wechat')">&#xe63c;</i>
            <i class="iconfont" @click="handlePopularize('github')">&#xe8c6;</i>
          </span>
        </div>
        <hr class="line" width="80%" color="#ccc" size="3" />
        <div class="row">
          <span class="copyright">©2021 1275093225@qq.com</span>
        </div>
      </div>
    </footer>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { navs } from './Header.vue';
import { handlePopularize } from '@/utils/utils'

export default defineComponent({
  name: 'Footer',
  setup() {
    return {
      navs,
      handlePopularize
    }
  }
})
</script>

<style lang="less" scoped>
  .footer {
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 50px 0 20px;
    color: #fff;
    background: rgb(51, 51, 51);
  }
  .footer a {
    color: #fff;
  }
  .logo {
    font-size: 1.2rem;
  }
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .nav_item {
    margin-right: 30px;
  }
  .iconfont {
    margin-right: 10px;
    cursor: pointer;
    font-size: 1.2rem;
  }
  .line {
    // filter: alpha(opacity=100, finishopacity=0, style=3);
    margin: 40px auto 20px;
  }
  .row:last-child {
    font-size: .5rem;
  }

  @media screen and (max-width: 968px) {
    .nav {
      display: none;
    }
  }
</style>
