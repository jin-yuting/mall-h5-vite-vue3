<!--
 * @Copyright: 
 * @file name: File name
 * @Data: Do not edit
 * @LastEditors: jinyt
 * @LastData: 
 * @Describe: 
-->
<template>
  <van-swipe class="my-swipe" :autoplay="5000" indicator-color="#1baeae">
    <van-swipe-item v-for="(item, index) in list" :key="index">
      <img :src="item.carouselUrl" alt="" @click="goTo(item.redirectUrl)">
    </van-swipe-item>
  </van-swipe>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: []
  }
})
const goTo = (url) => {
  window.open(url)
}
</script>

<style lang='less' scoped>
  .my-swipe .van-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>

