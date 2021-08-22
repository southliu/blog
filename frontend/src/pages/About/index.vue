<template>
  <div class="container">
    <h1>About</h1>
    <router-link to="/">to Home</router-link>
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
