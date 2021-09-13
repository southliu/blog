import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const useTitle = () => {
  const router = useRoute()

  onMounted(() => {
    document.title = (router.meta.title as string) || '后台管理'
  })

  return false
}

export default useTitle