<!--
 * @Copyright: 
 * @file name: File name
 * @Data: Do not edit
 * @LastEditors: jinyt
 * @LastData: 
 * @Describe: 
-->
<template>
  <div class="order-box">
    <base-header :name="'我的订单'"></base-header>
    <van-tabs
      v-model="status"
      :color="'#1baeae'"
      :title-active-color="'#1baeae'"
      class="order-tab"
    >
      <template v-for="(item, index) in tabsList" :key="index">
        <van-tab :title="item.title" :name="item.name"></van-tab>
      </template>
    </van-tabs>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" class="order-list-refresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
      <div v-for="(item, index) in list" :key="index" class="order-item-box"></div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script setup>
import { tabsList } from "./config";
import { reactive, ref } from "vue";
const status = ref("");
const refreshing = ref(false);
const loading = ref(false);
const finished = ref(false);
const list = reactive([]);

const onRefresh = ()=>{
  refreshing.value = true
  finished.value = false
  loading.value = true
}
const onLoad= ()=>{}
</script>

<style lang="less" scoped>
.order-box {
  .order-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    .fj();
    .wh(100%, 44px);
    line-height: 44px;
    padding: 0 10px;
    .boxSizing();
    color: #252525;
    background: #fff;
    border-bottom: 1px solid #dcdcdc;
    .order-name {
      font-size: 14px;
    }
  }
  .order-tab {
    // margin-top: 44px;
    position: fixed;
    left: 0;
    z-index: 1000;
    width: 100%;
  }
  .order-list-refresh {
    margin-top: 68px;
    .van-card__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .van-pull-refresh__head {
      background: #f9f9f9;
    }
    .van-list {
      min-height: calc(100vh - 88px);
      background: #f9f9f9;
      margin-top: 20px;
    }
    .order-item-box {
      margin: 20px 10px;
      background-color: #fff;
      .order-item-header {
        padding: 10px 20px 0 20px;
        display: flex;
        justify-content: space-between;
      }
      .van-card {
        background-color: #fff;
        margin-top: 0;
      }
    }
  }
}
</style>