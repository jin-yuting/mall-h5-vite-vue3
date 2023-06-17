<!--
 * @Copyright: 
 * @file name: File name
 * @Data: Do not edit
 * @LastEditors: jinyt
 * @LastData: 
 * @Describe: src/views/home/index.vue
-->
<template>
  <header class="home-header wrap" :class="{'active' : headerScroll}">
    <router-link tag="i" to="./category">
      <van-icon name="points" />
    </router-link>
    <div class="header-search">
      <span class="app-name">新蜂商城</span>
      <van-icon name="search" />
      <router-link tag="span" class="search-title" to="./product-list?from=home"
        >山河无恙，人间皆安</router-link
      >
    </div>
    <router-link class="login" tag="span" to="./login" v-if="!isLogin"
      >登录</router-link
    >
    <router-link class="login" tag="span" to="./user" v-else>
      <van-icon name="manager-o" />
    </router-link>
  </header>
  <base-swiper :list="carousels"></base-swiper>
  <div class="category-list">
    <div
      v-for="item in categoryList"
      v-bind:key="item.categoryId"
      class="category-list-item"
    >
      <img :src="item.imgUrl" />
      <span>{{ item.name }}</span>
    </div>
    <div class="good">
      <header class="good-header">新品上线</header>
      <div class="good-box">
        <div
          class="good-item"
          v-for="item in newGoodses"
          :key="item.goodsId"
          @click="goToDetail(item)"
        >
          <img :src="prefix(item.goodsCoverImg)" alt="" />
          <div class="good-desc">
            <div class="title">{{ item.goodsName }}</div>
            <div class="price">¥ {{ item.sellingPrice }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="good">
      <header class="good-header">热门商品</header>
      <div class="good-box">
        <div
          class="good-item"
          v-for="item in hotGoodses"
          :key="item.goodsId"
          @click="goToDetail(item)"
        >
          <img :src="prefix(item.goodsCoverImg)" alt="" />
          <div class="good-desc">
            <div class="title">{{ item.goodsName }}</div>
            <div class="price">¥ {{ item.sellingPrice }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="good" :style="{ paddingBottom: '100px' }">
      <header class="good-header">最新推荐</header>
      <div class="good-box">
        <div
          class="good-item"
          v-for="item in recommendGoodses"
          :key="item.goodsId"
          @click="goToDetail(item)"
        >
          <img :src="prefix(item.goodsCoverImg)" alt="" />
          <div class="good-desc">
            <div class="title">{{ item.goodsName }}</div>
            <div class="price">¥ {{ item.sellingPrice }}</div>
          </div>
        </div>
      </div>
    </div>
    <base-tabbar></base-tabbar>
  </div>
</template>

<script setup>
import { categoryList } from "./config";
import {
  carousels,
  newGoodses,
  hotGoodses,
  recommendGoodses,
} from "../../json/home";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const isLogin = ref(false);
const headerScroll = ref(false);
// 进入详情操作
const goToDetail = (item) => {
  router.push({ path: `product/${item.goodsId}` })
};
// 页面滑动
const pageScroll = () =>{
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  scrollTop > 100 ? headerScroll.value = true : headerScroll.value = false
}
onMounted(() => {
  window.addEventListener('scroll', pageScroll)
})
</script>
<style lang="less" scoped>
.home-header {
  position: fixed;
  left: 0;
  top: 0;
  .wh(100%, 50px);
  .fj();
  line-height: 50px;
  padding: 0 15px;
  .boxSizing();
  font-size: 15px;
  color: #fff;
  z-index: 10000;
  .nbmenu2 {
    color: @primary;
  }
  &.active {
    background: @primary;
    .nbmenu2 {
      color: #fff;
    }
    .login {
      color: #fff;
    }
  }
  .header-search {
    display: flex;
    align-items: center;
    .wh(74%, 20px);
    line-height: 20px;
    margin: 10px 0;
    padding: 5px 0;
    color: #232326;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 20px;
    .app-name {
      padding: 0 10px;
      color: @primary;
      font-size: 20px;
      font-weight: bold;
      border-right: 1px solid #666;
    }
    .icon-search {
      padding: 0 10px;
      font-size: 17px;
    }
    .search-title {
      font-size: 12px;
      color: #666;
      line-height: 21px;
    }
  }
  .icon-iconyonghu {
    color: #fff;
    font-size: 22px;
  }
  .login {
    color: @primary;
    line-height: 52px;
    .van-icon-manager-o {
      font-size: 20px;
      vertical-align: -3px;
    }
  }
}
.category-list {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 13px;
  .category-list-item {
    display: flex;
    flex-direction: column;
    width: 20%;
    text-align: center;
    img {
      .wh(40px, 40px);
      margin: 13px auto 8px auto;
    }
  }
}
.good {
  .good-header {
    background: #f9f9f9;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #1baeae;
    font-size: 16px;
    font-weight: 500;
  }
  .good-box {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .good-item {
      box-sizing: border-box;
      width: 50%;
      border-bottom: 1px solid #e9e9e9;
      padding: 10px 10px;
      box-sizing: border-box;
      img {
        display: block;
        width: 120px;
        margin: 0 auto;
      }
      .good-desc {
        text-align: center;
        font-size: 14px;
        padding: 10px 0;
        .title {
          color: #222333;
        }
        .price {
          color: #1baeae;
        }
      }
      &:nth-child(2n + 1) {
        border-right: 1px solid #e9e9e9;
      }
    }
  }
}
</style>
