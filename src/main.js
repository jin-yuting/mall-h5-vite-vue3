/*
 * @Copyright: 
 * @file name: File name
 * @Data: Do not edit
 * @LastEditors: jinyt
 * @LastData: 
 * @Describe: 
 */
import { createApp } from 'vue'
import router from './router';
import App from './App.vue'
import './index.css'

createApp(App)
.use(router)
.mount('#app')
