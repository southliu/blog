<template>
  <menu class="menu">
    Menu
  </menu>
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
    border-top: 1px solid #999;
    border-right: 1px solid #999;
  }
</style>