/*
 * @Copyright: 
 * @file name: File name
 * @Data: Do not edit
 * @LastEditors: jinyt
 * @LastData: 
 * @Describe: 
 */
import baseCom from './base/index.js'

const components = [
  baseCom,
]

// 按需注册全局自定义组件
export default {
  install (app) {
    components.map(item=>{
      app.use(item)
    })
  }
}


