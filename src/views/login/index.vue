<!--
 * @Copyright: 
 * @file name: File name
 * @Data: Do not edit
 * @LastEditors: jinyt
 * @LastData: 
 * @Describe: 
-->
<template>
  <div class="login">
    <base-header :name="type == 'login' ? '登录' : '注册'" :back="'/home'"></base-header>
    <img class="logo" src="//s.weituibao.com/1582958061265/mlogo.png" alt="" />
    <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div class="login-btn" v-if="type === 'login'">
      <div class="link-login" @click="toggle('register')">立即注册</div>
      <van-button round block type="info" color="#1baeae" native-type="submit">登录</van-button>
    </div>
    <div class="login-btn" v-else>
      <div class="link-login" @click="toggle('login')">已有登录账号</div>
      <van-button round block type="info" color="#1baeae" native-type="submit">注册</van-button>
    </div>
  </van-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const type = ref('login');
const username = ref('admin');
const password = ref('123456');

const toggle = (v) => {
  type.value = v
}
const onSubmit = (values) => {
  // console.log(values);
  router.push({
    name: 'home'
  })
}
</script>
<style lang="less" scoped>
.login {
  .logo {
    width: 120px;
    height: 120px;
    display: block;
    margin: 80px auto 0px;
  }
  .link-login {
    font-size: 14px;
    margin-bottom: 20px;
    color: #1989fa;
    display: inline-block;
  }
  .login-btn{
    margin: 30px;
    text-align: left;
  }
}
</style>

