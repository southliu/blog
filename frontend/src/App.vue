<template>
  <Header />
  <Banner />
  <router-view></router-view>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Banner,
    Footer
  }
})
</script>
