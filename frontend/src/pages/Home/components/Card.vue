<template>
  <div v-if="!loading">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="card"
      @click="handleClick(item.id)"
    >
      <div class="img_box">
        <div class="date">{{ hanldeFilterDate(item.date, 'date') }}</div>
        <img
          v-if="item.image"
          :src="item.image"
          :alt="item.title"
          class="card-img-top image"
        />
      </div>
      <div class="card-body">
        <p class="title">{{ item.title }}</p>
        <p class="time">
        <span class="iconfont">&#xe610;</span>
        <span class="time_value">{{ hanldeFilterDate(item.date, 'time') }}</span>
      </p>
      <p class="describe">{{ item.describe }}</p>
    </div>
  </div>

  </div>

  <div v-if="loading" class="card placeholder-glow" aria-hidden="true">
    <div class="card-img-top"></div>
    <div class="card-body">
      <h5 class="card-title placeholder-glow">
        <span class="placeholder col-2"></span>
      </h5>
      <h4 class="card-title placeholder-glow">
        <span class="placeholder col-6"></span>
      </h4>
      <p class="card-text placeholder-glow">
        <span class="placeholder col-7"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-6"></span>
        <span class="placeholder col-8"></span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { hanldeFilterDate } from '@/utils/utils'
import { IHomeResult } from '@/types'

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<IHomeResult[]>,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    },
    handleClick: {
      type: Function,
      required: true
    }
  },
  setup() {
    return {
      hanldeFilterDate
    }
  }
})
</script>

<style lang="less" scoped>
  .card {
    width: 96%;
    margin: 15px auto;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    box-shadow: 0 5px 10px 5px rgba(0, 0, 0, .1);
  }
  .img_box {
    min-height: 50px
  }
  .date {
    border-radius: 20px;
    padding: 3px 20px;
    background: #fff;
    border: 1px solid #ccc;
    font-size: .95rem;
    position: absolute;
    top: 15px;
    left: 30px;
  }
  .image {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  .title {
    font-size: 1.6rem;
  }
  .time {
    font-size: .95rem;
    color: #999;
  }
  .time_value {
    margin-left: 5px;
  }
</style>