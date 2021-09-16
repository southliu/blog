<template>
  <header class="header">
    <div class="logo" @click="hanldeGoHome">后台系统</div>
    <div class="menu">
      <div class="menu_item" @click="handleLogout">退出</div>
    </div>
  </header>
</template>

<script lang="ts">
import { useToken } from '@/hooks'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Header',
  setup() {
    const router = useRouter()

    // 回到首页
    const hanldeGoHome = () => {
      router.push('/dashboard')
    }

    // 退出登录
    const handleLogout = () => {
      useToken(null, true)
      router.push('/login')
    }

    return {
      hanldeGoHome,
      handleLogout
    }
  }
})
</script>

<style lang="scss" scoped>
  .header {
    @include flex(center, space-between);
    height: 35px;
    padding: 0 30px;
    box-sizing: border-box;
    border-bottom: 1px solid #999;
    box-shadow: 0 0 10px 0 rgba($color: #000000, $alpha: 0.2);
  }
  .logo {
    cursor: pointer;
  }
  .menu_item {
    margin-left: 10px;
    cursor: pointer;
  }
</style>
