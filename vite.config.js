/*
 * @Copyright: 
 * @file name: File name
 * @Data: Do not edit
 * @LastEditors: jinyt
 * @LastData: 
 * @Describe: 配置文件
 * @FilePath: 
 */
import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins:[vue()],
  css: {
    postcss:{
      plugins:[
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.js', '.ts', '.json']
  },

  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      
    },
  },
  build: {
    outDir: 'build',
    assetsDir: 'static',
  }
})