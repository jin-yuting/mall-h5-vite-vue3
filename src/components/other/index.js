/*
 * @Copyright: 
 * @file name: File name
 * @Data: Do not edit
 * @LastEditors: jinyt
 * @LastData: 
 * @Describe: 
 */
import baseSwiper from './swiper.vue'
import listScroll from './listScroll.vue'
import watermark from './watermark.vue'

export default {
  install (app) {
    app.component('base-swiper', baseSwiper)
    app.component('list-scroll', listScroll)
    app.component('watermark', watermark)
  }
}