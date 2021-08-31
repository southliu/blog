<template>
  <nav aria-label="Page navigation example" class="pagination_box">
    <ul class="pagination">
      <li class="page-item">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          :class="{'disabled': currentPage === 1}"
          @click="handleClick(currentPage - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="item in pages"
        :key="item"
        class="page-item"
        :class="{'active': item === currentPage}"
        @click="handleClick(item)"  
      >
        <a class="page-link" href="#">{{ item }}</a>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          :class="{'disabled': currentPage === pages.length}"
          @click="handleClick(currentPage + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, onUpdated, ref } from 'vue'

export default defineComponent({
  props: {
    page: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
      required: true
    },
    onChange: {
      type: Function,
      required: true
    }
  },
  emits: ['onChange'],
  setup(props, context) {
    const currentPage = ref(1)
    const pages = ref<number[]>([])

    onUpdated(() => {
      const { page, pageSize, total } = props
      const pageNum = total ? Math.ceil(total / pageSize) : 0
      const pageArrs = pageNum > 0 ? Array(pageNum).fill(true).map((item, index) => index + 1) : []
      currentPage.value = page || 1
      pages.value = pageArrs
    })

    // 点击分页
    const handleClick = (page: number) => {
      currentPage.value = page
      context.emit('onChange', page)
    }

    return {
      pages,
      currentPage,
      handleClick
    }
  }
})
</script>

<style lang="less" scoped>
  .pagination_box {
    display: flex;
    justify-content: center;
    margin: 10px auto;
  }
  .disabled {
    color: #999 !important;
    pointer-events: none;
  }
</style>