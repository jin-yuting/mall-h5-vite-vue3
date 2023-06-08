/*
 * @Copyright: 
 * @file name: File name
 * @Data: Do not edit
 * @LastEditors: jinyt
 * @LastData: 
 * @Describe: 
 */
import { createApp } from 'vue'
import { ConfigProvider } from 'vant';
import router from './router';
import App from './App.vue';
import "vant/lib/index.css";
import vant from "./vant.js";

import './index.css'
import commUI from './components/index.js' 


createApp(App)
.use(router)
.use(commUI)
.use(vant)
.use(ConfigProvider)
.mount('#app')
