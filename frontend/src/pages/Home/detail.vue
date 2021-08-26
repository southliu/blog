<template>
  <div class="container">
    <DetailCon :data="data" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { useTitle } from '@/hooks'
import { useRoute } from 'vue-router'
import { IBlogCard } from '@/types'
import DetailCon from './components/DetailCon.vue'

export default defineComponent({
  name: 'BlogDetail',
  components: {
    DetailCon
  },
  setup() {
    useTitle()
    const route = useRoute()

    onMounted(() => {
      console.log('onMounted')
    })

    const data = reactive<IBlogCard>({
      id: '1',
      title: '夏日结束前的逃亡|日照之旅',
      date: '2021-8-15 12:28',
      image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F3134846298%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631609225&t=1917651e2c9d05dd0145d9b9cb812350',
      describe: '日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。用各种修辞手法对事物进行形象化的阐述。包括的修辞手法有比喻、拟人、夸张、双关、排比等，可以描述人，也可以描述物，通过描述可以让人或物形象更生动具体，给人明了的感。'
    })

    return {
      data
    }
  }
})
</script>

<style lang="less" scoped>
</style>
