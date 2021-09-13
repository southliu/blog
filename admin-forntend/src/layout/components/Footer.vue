<template>
  <footer class="footer">
    <span class="copyright">©2021 SOUTH TEST ADMIN</span>
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

<style lang="scss" scoped>
  .footer {
    height: 30px;
    line-height: 30px;
    padding: 0 50px;
    text-align: center;
    box-sizing: border-box;
    border-top: 1px solid #999;
  }
  .copyright {
    color: #999;
  }
</style>