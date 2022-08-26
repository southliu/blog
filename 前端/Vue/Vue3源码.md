# Vue三大模块
1. reactivity (响应式库)
2. runtime-core (运行时核心)
3. compiler (编译模块)

# 双向绑定
### 通过proxy监听数据，get获取副作用函数并存入桶中，set中执行桶内的副作用函数。
```ts
// 将副作用存入桶中
const bucket = new WeakMap()

// 监听数据
const data = { name: 'test' }

// Proxy监听数据
const obj = new Proxy(data, {
  get: (target, key) => {
    return target[key]
  },
  set: (target, key, value) => {},
})
```

# diff算法的实现