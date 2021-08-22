<template>
  <div class="container">
    <h1>case</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTitle } from '@/hooks'

export default defineComponent({
  setup() {
    useTitle()
  }
})
</script>
