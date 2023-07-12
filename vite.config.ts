import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from "path"
export default defineConfig({
  plugins: [uni(), WindiCSS({
    scan: {
      dirs: ['.'], // 当前目录下所有文件
      fileExtensions: ['vue', 'js', 'ts'], // 同时启用扫描vue/js/ts
    },
  }),],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src')
      }
    ],
  }
});
