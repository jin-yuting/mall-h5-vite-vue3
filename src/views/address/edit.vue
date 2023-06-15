<template>
  <div class="address-edit-box">
    <base-header
      :name="`${type == 'add' ? '新增地址' : '编辑地址'}`"
    ></base-header>
    <van-address-edit
      class="edit"
      :area-list="areaList"
      :address-info="addressInfo"
      :show-delete="type == 'edit'"
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>
<script setup>
import { reactive, ref, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const type = computed(()=>{
  return router.query?.type
})

const areaList = reactive({
  province_list: {},
  city_list: {},
  county_list: {}
})
const addressInfo = reactive({})
</script>
<style lang="less" scoped>
.address-edit-box {
  margin-top: 44px;
  .van-address-edit {
    /deep/.van-button--danger {
      background: @primary;
      border-color: @primary;
    }
    /deep/.van-switch--on {
      background: @primary;
    }
    /deep/.van-button {
      background: @primary;
      border-color: @primary;
    }
  }
}
</style>