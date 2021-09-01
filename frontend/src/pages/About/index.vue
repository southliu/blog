<template>
  <div class="container">
    <div class="card">
      <img
        :src="image"
        alt="头像"
        class="card-img-top image"
      />
      <div class="card-body">
        <p class="name">刘南方</p>
        <p class="describe">从事4年前端开发经验</p>
        <div class="icon_box">
          <i class="iconfont" @click="handlePopularize('qq')">&#xe6b2;</i>
          <i class="iconfont" @click="handlePopularize('wechat')">&#xe63c;</i>
          <i class="iconfont" @click="handlePopularize('github')">&#xe8c6;</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTitle } from '@/hooks'
import { handlePopularize } from '@/utils/utils'
import image from '@/assets/images/avatar.jpg'

export default defineComponent({
  setup() {
    useTitle()

    return {
      image,
      handlePopularize
    }
  }
})
</script>

<style scoped>
  .container {
    min-height: calc(100vh - 367px);
  }
  .card {
    max-width: 800px;
    margin: -50px auto 20px;
    padding-bottom: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 5px 10px 5px rgba(0, 0, 0, .1);
  }
  .image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: -70px auto 0;
    border: 1px solid #999;
  }
  .name {
    font-size: 18px;
    font-weight: bold;
  }
  .iconfont {
    margin-right: 10px;
    cursor: pointer;
    font-size: 1.2rem;
  }
</style>