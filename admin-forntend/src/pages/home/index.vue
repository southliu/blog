<template>
  <h1>Home</h1>
</template>

<script lang="ts">
import { useTitle } from '@/hooks'
export default {
  name: 'Home',
  setup() {
    useTitle()
    
    return {
    }
  }
}
</script>
