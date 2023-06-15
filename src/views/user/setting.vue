<template>
  <div class="seting-box">
    <base-header :name="'账号管理'"></base-header>
    <div class="input-item">
      <van-field v-model="nickName" label="昵称" />
      <van-field v-model="introduceSign" label="个性签名" />
      <van-field v-model="password" type="password" label="修改密码" />
    </div>
    <van-button
      class="save-btn"
      color="#1baeae"
      type="primary"
      @click="save"
      block
      >保存</van-button
    >
    <van-button
      class="save-btn"
      color="#1baeae"
      type="primary"
      @click="logout"
      block
      >退出登录</van-button
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
const nickName = ref("18568727352");
const introduceSign = ref("随新所欲，蜂富多彩");
const password = ref("");
</script>
<style lang="less" scoped>
.seting-box {
  .input-item {
    margin-top: 44px;
  }
  .save-btn {
    width: 80%;
    margin: 20px auto;
  }
}
</style>