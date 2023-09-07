import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins:[
    vue()
  ],
  css: {
    postcss:{
      plugins:[
      ]
    },
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/styles/mixin.less";'
      }
    }
  },
  resolve: {
    alias: {// 别名配置
      '@': path.resolve(__dirname, './src'),
      '@c': path.resolve(__dirname, './src/components')
    },
    extensions: ['.js', '.ts', '.json', 'less']
  },

  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,// 是否跨域
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
        }
      },
    },
  },
  build: {
    // 打包调试移除
    minify: 'terser',
    terserOptions:{
      drop_console: true,
      drop_debugger: true,
    },
    outDir: 'build',
    assetsDir: 'static',
  }
})