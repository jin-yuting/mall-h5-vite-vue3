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
import vant from "./vant"; // .js文件
import pinia from './store/index';
import { prefix } from './utils/utils'

import './index.css'
import commUI from './components/index' // .js文件

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(commUI)
app.use(vant)
app.use(ConfigProvider)
app.mount('#app')

app.config.globalProperties.prefix = prefix;
