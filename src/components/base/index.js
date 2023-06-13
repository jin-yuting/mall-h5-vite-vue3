/*
 * @Copyright: 
 * @file name: File name
 * @Data: Do not edit
 * @LastEditors: jinyt
 * @LastData: 
 * @Describe: 
 */
import baseHeader from './baseHeader.vue'
import baseButton from './baseButton.vue'
import baseTabbar from './baseTabbar.vue'

//让组件可通过use的形式使用
export default {
  install (app) {
    app.component('base-header', baseHeader)
    app.component('base-button', baseButton)
    app.component('base-tabbar', baseTabbar)
  }
}