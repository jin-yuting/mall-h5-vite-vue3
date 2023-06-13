/*
 * @Copyright: 
 * @file name: File name
 * @Data: Do not edit
 * @LastEditors: jinyt
 * @LastData: 
 * @Describe: 
 */
import { createPinia } from 'pinia';
import piniaPluginpersistedstate from 'pinia-plugin-persist';
const pinia = createPinia();
pinia.use(piniaPluginpersistedstate); //Pinia 持久化存储插件
export default pinia;

export * from './system';