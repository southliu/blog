<template>
  <div class="menu">
    Menu
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { menus } from '@/router/menus';

export default defineComponent({
  name: 'Menu',
  setup() {
    
    return {
      menus
    }
  }
})
</script>

<style lang="scss" scoped>
  .menu {
    width: 250px;
    min-height: calc(100vh - 60px);
    border-right: 1px solid #999;
  }
</style>