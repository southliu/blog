<template>
  <div class="menu">
    Menu
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Menu',
  setup() {
  }
})
</script>

<style lang="scss" scoped>
  .menu {
    width: 250px;
    min-height: calc(100vh - 30px);
    border-right: 1px solid #999;
  }
</style>