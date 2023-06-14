<!--
 * @Copyright: 
 * @file name: File name
 * @Data: Do not edit
 * @LastEditors: jinyt
 * @LastData: 
 * @Describe: src/components/base/baseHeader.vue
-->
<template>
  <header class="simple-header">
    <van-icon name="arrow-left" @click="goBack" />
    <div class="simple-header-name">{{ name }}</div>
    <van-icon name="ellipsis" />
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  name: {
      type: String,
      default: ''
    },
    back: {
      type: String,
      default: ''
    }
})
const goBack = () => {
  router.go(-1)
}
</script>

<style lang="less" scoped>
  .simple-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    .fj();
    align-items: center;
    .wh(100%, 44px);
    line-height: 44px;
    padding: 0 10px;
    .boxSizing();
    color: #252525;
    background: #fff;
    border-bottom: 1px solid #dcdcdc;
    .simple-header-name {
      font-size: 14px;
    }
  }
</style>