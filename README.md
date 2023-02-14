# vite-plugin-node-externals

使 [rollup-plugin-node-externals] 在 vite 中生效。

## 安装

```sh
npm i vite-plugin-node-externals -D
```

## 使用

```js
// vite.config.js
import { defineConfig } from 'vite'
import nodeExternals from 'vite-plugin-node-externals'

// https://vitejs.dev/config/
export default defineConfig({
  ...
  plugins: [
    nodeExternals(),
  ],
})
```

## 为什么会有这个？

目前 vite 对于纯 JavaScript 的文件打包已经非常友好，但没有剔除第三方模块的；如果是想要发布一个模块，这是难以接受的。

同时因为 vite 的 [插件顺序](https://cn.vitejs.dev/guide/api-plugin.html#plugin-ordering) 导致 [rollup-plugin-node-externals] 模块无法生效。

解决办法其实非常简单，那就是指定 `enforce` 属性，如：

```js
// vite.config.js
import { defineConfig } from 'vite'
import nodeExternals from 'rollup-plugin-node-externals'

const externals = {
  ...nodeExternals(),
  enforce: 'pre' // 指定为 pre
}

// https://vitejs.dev/config/
export default defineConfig({
  ...
  plugins: [
    externals,
  ],
})
```

那推荐使用这个模块么？不，其实不这么推荐，此模块主要为以后其他不兼容问题，或切换到其他模块时的自用备选方案。

## License

MIT

[rollup-plugin-node-externals]: https://github.com/Septh/rollup-plugin-node-externals
