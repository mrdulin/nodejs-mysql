# schemaglue js import ts module issue

```ts
const { schema, resolver } = glue('src/modules');
```

这句，glue 用的自己的 fs 操作，没有走 webpack 的 fs 操作本身 js 模块通过 require ts 模块，配合 webpack 和 ts-loader 是没问题的
glue 走自己的 fs 操作，不会经过 webpack 的 loader 和 plugin

所以 webpack 打包时会报错
