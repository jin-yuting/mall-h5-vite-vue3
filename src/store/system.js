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

})