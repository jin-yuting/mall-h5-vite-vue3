<!--
 * @Copyright: 
 * @file name: File name
 * @Data: Do not edit
 * @LastEditors: jinyt
 * @LastData: 
 * @Describe: 
-->
<template>
  <div class="address-box">
    <base-header :name="'地址管理'"></base-header>
    <div class="address-item">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const chosenAddressId = ref();
const list = reactive([
{
  id: '1',
  name: '张三',
  tel: '13000000000',
  address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
  isDefault: true,
},
{
  id: '2',
  name: '李四',
  tel: '1310000000',
  address: '浙江省杭州市拱墅区莫干山路 50 号',
},
]);

const onAdd = () =>{
  router.push({
    name: 'address-edit',
    query:{
      type: 'add'
    }
  })
}
const onEdit = () =>{
  router.push({
    name: 'address-edit',
    query:{
      type: 'edit'
    }
  })
}
</script>

<style lang="less" scoped>
.address-box {
  .van-radio__icon {
    display: none;
  }
  .address-item {
    margin-top: 44px;
    /deep/.van-button {
      background: @primary;
      border-color: @primary;
    }
    /deep/.van-tag{
      background: @primary;
    }
  }
}
</style>