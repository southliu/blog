<template>
  <div class="container">
    <div v-if="!loading">
      <h1 class="title">{{ data.title }}</h1>
      <p class="date">
        <span class="iconfont">&#xe610;</span>
        <span class="time_value">{{ data.date }}</span>
      </p>
      <p class="content">{{ data.content }}</p>
    </div>

    <div v-if="loading" class="placeholder-glow">
      <h3 class="title placeholder col-6"></h3>
      <div>
        <p class="placeholder col-2"></p>
      </div>
      <p class="content placeholder col-12"></p>
      <p class="content placeholder col-12"></p>
      <p class="content placeholder col-6"></p>
    </div>

    <div class="footer">
      <div class="footer_item" :class="{'disable': !data.prev || loading}" @click="handleNext(data.prev)">
        <i class="iconfont">&#xe600;</i>
        <span>上一篇</span>
      </div>
      <div class="footer_item" :class="{'disable': !data.next || loading}" @click="handleNext(data.next)">
        <span>下一篇</span>
        <i class="iconfont right">&#xe600;</i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IHomeDetailResult } from '@/types'

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<IHomeDetailResult>,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    },
    handleNext: {
      type: Function,
      required: true
    }
  }
})
</script>

<style lang="less" scoped>
  .container {
    padding-top: 20px;
  }
  .date {
    font-size: .95rem;
    color: #999;
  }
  .time_value {
    margin-left: 5px;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px .5rem;
  }
  .footer_item {
    cursor: pointer;
  }
  .footer_item span {
    margin: 0 5px;
  }
  .disable {
    color: #999 !important;
    pointer-events: none;
  }
  .right {
    display: inline-block;
    transform: rotate(180deg);
  }
</style>