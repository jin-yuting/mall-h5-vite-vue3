/*
 * @Copyright: 
 * @file name: File name
 * @Data: Do not edit
 * @LastEditors: jinyt
 * @LastData: 
 * @Describe: 
 */
import { defineStore } from "pinia";

const key = 'system';

export const useSystemStore = defineStore(key, {
  state: () => ({
    cartCount: 0,
  }),
  getters: {},
  actions: {},
  persist: { //存储策略
    enabled: true, // 这个配置代表存储生效，而且是整个store都存储
    strategies: [{ key, storage: sessionStorage }] // 1.key 自定义存储的key,默认是store.$id  2.storage  可以指定任何 extends Storage 的实例，默认是 sessionStorage 3.paths state 中的字段名，按组打包储存
  }
})