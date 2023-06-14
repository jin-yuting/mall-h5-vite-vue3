<!--
 * @Copyright: 
 * @file name: File name
 * @Data: Do not edit
 * @LastEditors: jinyt
 * @LastData: 
 * @Describe: 
-->
<template>
  <div class="nav-bar">
    <ul class="nav-list">
      <router-link tag="li" class="nav-list-item active" to="home">
        <van-icon name="home-o" />
        <span>首页</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="category">
        <van-icon name="coupon-o" />
        <span>分类</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="cart">
        <van-icon  name="shopping-cart-o" :info="!count ? '' : count" />
        <span>购物车</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="user">
        <van-icon name="contact" />
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useSystemStore } from "@/store/system";

const system = useSystemStore(); // 系统store

const count = computed(() => system.cartCount);

</script>

<style lang="less" scoped >
.nav-bar{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 5px 0;
  z-index: 1000;
  background: #fff;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  .nav-list {
    width: 100%;
    .fj();
    flex-direction: row;
    padding: 0;
    .nav-list-item {
      display: flex;
      flex: 1;
      flex-direction: column;
      text-align: center;
      color: #666;
      &.router-link-active {
        color: #1baeae;
      }
      i {
        text-align: center;
        font-size: 22px;
      }
      span{
        font-size: 12px;
      }
      .van-icon-shopping-cart-o {
        margin: 0 auto;
        margin-bottom: 2px;
      }
    }
  }
}
</style>