<template>
  <header class="header">
    <div>后台系统</div>
    <div>Menu</div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  setup() {
  }
})
</script>

<style lang="scss" scoped>
  .header {
    @include flex(center, space-between);
    height: 30px;
    padding: 0 30px;
    border-bottom: 1px solid #999;
    box-shadow: 0 0 10px 0 rgba($color: #000000, $alpha: 0.2);
  }
</style>
