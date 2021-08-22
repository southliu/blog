<template>
  <teleport to="#banner">
    <div class="banner_box">
      <img :src="image" class="banner" />
      <!-- <span class="banner_title">欢迎来到我的博客!</span> -->
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import image from '@/assets/images/banner.jpg'

export default defineComponent({
  name: 'Banner',
  setup() {
    return {
      image
    }
  }
})
</script>

<style lang="less" scoped>
  .banner_box {
    height: 200px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .banner {
    width: 100%;
    height: 200px;
    object-fit: cover;
    background: rgb(51, 51, 51);
  }
  .banner_title {
    position: absolute;
    color: rgb(59, 59, 59);
    font-size: 25px;
    font-weight: bold;
  }
</style>
