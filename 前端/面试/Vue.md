# vue和react的区别
Vue 的学习曲线较低、库大小更小，在响应式编程和组件化方面让用户更易上手；而 React 使用 JSX 语法来渲染 UI，具有良好的性能，不过它的学习曲线比 Vue 高，也需要更多的资源加载。

1. 数据可变性
* React 推崇函数式编程，数据不可变以及单向数据流，只能通过setState或者onchange来实现视图更新
* Vue 基于数据可变，设计了响应式数据，通过监听数据的变化自动更新视图

2. 写法
* React 推荐使用 jsx + inline style的形式，就是 all in js
* Vue 是单文件组件（SFC）形式，在一个组件内分模块(tmplate/script/style)，当然vue也支持jsx形式，可以在开发vue的ui组件库时使用

3. diff算法
* Vue2采用双端比较，Vue3采用快速比较
* react主要使用diff队列保存需要更新哪些DOM，得到patch树，再统一操作批量更新DOM。，需要使用`shouldComponentUpdate()`来手动优化react的渲染。

# SFC是什么
SFC（Single File Component）是Vue.js中的一种模板文件，它将HTML，CSS，JavaScript和其他语言组合在一个文件中，可以帮助开发人员简化前端开发工作，并更好地控制代码的可维护性和可读性。

# vue组件通信方式
* props / $emit
* ref / $refs
* parent/parent / parent/root
* attrs / listeners
* eventBus / vuex / pinia / localStorage / sessionStorage / Cookie / window
* provide / inject

# vue 渲染列表为什么要加key?
Vue 在处理更新同类型 vnode 的一组子节点（比如v-for渲染的列表节点）的过程中，为了减少 DOM 频繁创建和销毁的性能开销。

对没有 key 的子节点数组更新是通过**就地更新**的策略。它会通过对比新旧子节点数组的长度，先以比较短的那部分长度为基准，将新子节点的那一部分直接 patch 上去。然后再判断，如果是新子节点数组的长度更长，就直接将新子节点数组剩余部分挂载；如果是新子节点数组更短，就把旧子节点多出来的那部分给卸载掉）。**所以如果子节点是组件或者有状态的 DOM 元素，原有的状态会保留，就会出现渲染不正确的问题。**

有 key 的子节点更新是调用的patchKeyedChildren，这个函数就是大家熟悉的实现核心 diff 算法的地方，大概流程就是同步头部节点、同步尾部节点、处理新增和删除的节点，最后用求解最长递增子序列的方法区处理未知子序列。是为了**最大程度实现对已有节点的复用，减少 DOM 操作的性能开销**，同时避免了就地更新带来的子节点状态错误的问题。

# vue3 相对 vue2的响应式优化
vue2使用的是`Object.defineProperty`去监听对象属性值的变化，但是它不能监听对象属性的新增和删除，所以需要使用`$set`、`$delete`这种语法糖去实现，这其实是一种设计上的不足。

所以 vue3 采用了`proxy`去实现响应式监听对象属性的增删查改。

其实从api的原生性能上`proxy`是比`Object.defineProperty`要差的。

而 vue 做的响应式性能优化主要是在将嵌套层级比较深的对象变成响应式的这一过程。

vue2的做法是在组件初始化的时候就递归执行`Object.defineProperty`把子对象变成响应式的；

而vue3是在访问到子对象属性的时候，才会去将它转换为响应式。这种延时定义子对象响应式会对性能有一定的提升

# Vue 核心diff流程

前提：当同类型的 vnode 的子节点都是一组节点（数组类型）的时候，

步骤：会走核心 diff 流程

Vue3是快速选择算法:
* 同步头部节点
* 同步尾部节点
* 新增新的节点
* 删除多余节点
* 处理未知子序列（贪心 + 二分处理最长递增子序列）

Vue2是双端比较算法:
在新旧字节点的头尾节点，也就是四个节点之间进行对比，找到可复用的节点，不断向中间靠拢的过程

diff目的：diff 算法的目的就是为了尽可能地复用节点，减少 DOM 频繁创建和删除带来的性能开销

# Vue双向绑定原理
基于 MVVM 模型，viewModel(业务逻辑层)提供了数据变化后更新视图和视图变化后更新数据这样一个功能，就是传统意义上的双向绑定。

Vue2: 双向绑定原理是使用Object.defineProperty来实现响应式处理，当数据发生变化时，会自动更新 DOM，从而实现双向绑定的效果。它使用一种观察者模式，订阅者是 Reactivity 树中的每一个属性，当数据发生变化时，它会通知这些订阅者，从而实现数据变化的双向绑定。

Vue3：使用了Proxy来替代Object.defineProperty实现数据响应式，从而使得双向绑定更加高效。收集副作用到桶中，每次数据更新或读取时调用副作用桶，从而更新渲染视图。

# v-model 原理
V-model 是用来监听用户事件然后更新数据的语法糖。

其本质还是单向数据流，内部是通过绑定元素的 value 值向下传递数据，然后通过绑定 input 事件，向上接收并处理更新数据。

单向数据流：父组件传递给子组件的值子组件不能修改，只能通过emit事件让父组件自个改。

```js
// 比如
<input v-model="sth" />
// 等价于
<input :value="sth" @input="sth = $event.target.value" />
```

给组件添加 v-model 属性时，默认会把value 作为组件的属性，把 input作为给组件绑定事件时的事件名:

```js
// 父组件
<my-button v-model="number"></my-button>
​
// 子组件
<script>
export default {
  props: {
    value: Number, //  属性名必须是 value
  },
​
  methods: {
    add() {
      this.$emit('input', this.value + 1) // 事件名必须是 input
    },
  }
}
</script>
```
如果想给绑定的 value 属性和 input 事件换个名称呢？可以这样：
在 Vue 2.2 及以上版本，你可以在定义组件时通过 model 选项的方式来定制 prop/event：
```js
<script>
export default {
  model: {
    prop: 'num', // 自定义属性名
    event: 'addNum' // 自定义事件名
  }
}
```

vue3 v-model 原理实现和 vue2 基本一致
```js
<Son v-model="modalValue"/>
```
等同于
```js
<Son
  :modalValue="modalValue"
  @update:modalValue="modalUpdate=$event.target.value"
/>
```

自定义 model 参数
```js
<Son v-model:visible="visible"/>
setup(props, ctx){
    ctx.emit("update:visible", false)
}
```

# vue 响应式原理
不管vue2 还是 vue3，响应式的核心就是观察者模式 + 劫持数据的变化，在访问的时候做依赖收集和在修改数据的时候执行收集的依赖并更新数据。具体点就是：

* vue2 的话采用的是 Object.definePorperty劫持对象的 get 和 set 方法，每个组件实例都会在渲染时初始化一个 watcher 实例，它会将组件渲染过程中所接触的响应式变量记为依赖，并且保存了组件的更新方法 update。当依赖的 setter 触发时，会通知 watcher 触发组件的 update 方法，从而更新视图。
* vue3 使用的是 ES6 的 proxy，proxy 不仅能够追踪属性的获取和修改，还可以追踪对象的增删，这在 vue2中需要 set/delete 才能实现。然后就是收集的依赖是用组件的副作用渲染函数替代 watcher 实例。

性能方面，从原生 api 角度，`proxy` 这个方法的性能是不如 `Object.property`，但是 vue3 强就强在一个是上面提到的可以追踪对象的增删，第二个是对嵌套对象的处理上是访问到具体属性才会把那个对象属性给转换成响应式，而 vue2 是在初始化的时候就递归调用将整个对象和他的属性都变成响应式，这部分就差了。

# vue2 通过数组下标更改数组视图为什么不会更新？

```js
export class Observer {
  this.value = value
    this.dep = new Dep()
    this.vmCount = 0
    def(value, '__ob__', this)
    if (Array.isArray(value)) {
      // 这里对数组进行单独处理
      if (hasProto) {
        protoAugment(value, arrayMethods)
      } else {
        copyAugment(value, arrayMethods, arrayKeys)
      }
      this.observeArray(value)
    } else {
      // 对对象遍历所有键值
      this.walk(value)
    }
  }
  walk (obj: Object) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i])
    }
  }
  observeArray (items: Array<any>) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i])
    }
  }
}
```
对于对象是通过Object.keys()遍历全部的键值，对数组只是observe监听已有的元素，所以通过下标更改不会触发响应式更新。

理由是数组的键相较对象多很多，当数组数据大的时候性能会很拉胯。所以不开放

# computed 和 watch
Computed 的大体实现和普通的响应式数据是一致的，不过加了延时计算和缓存的功能：
在访问computed对象的时候，会触发 getter ，初始化的时候将 computed 属性创建的 watcher （vue3是副作用渲染函数）添加到与之相关的响应式数据的依赖收集器中（dep），然后根据里面一个叫 dirty 的属性判断是否要收集依赖，不需要的话直接返回上一次的计算结果，需要的话就执行更新重新渲染视图。

watchEffect会自动收集回调函数中响应式变量的依赖。并在首次自动执行
推荐在大部分时候用 watch 显式的指定依赖以避免不必要的重复触发，也避免在后续代码修改或重构时不小心引入新的依赖。watchEffect 适用于一些逻辑相对简单，依赖源和逻辑强相关的场景（或者懒惰的场景 ）

# $nextTick 原理？
vue有个机制，更新 DOM 是异步执行的，当数据变化会产生一个异步更行队列，要等异步队列结束后才会统一进行更新视图，所以改了数据之后立即去拿 dom 还没有更新就会拿不到最新数据。所以提供了一个 nextTick 函数，它的回调函数会在DOM 更新后立即执行。

nextTick 本质上是个异步任务，由于事件循环机制，异步任务的回调总是在同步任务执行完成后才得到执行。所以源码实现就是根据环境创建异步函数比如 Promise.then（浏览器不支持promise就会用MutationObserver，浏览器不支持MutationObserver就会用setTimeout），然后调用异步函数执行回调队列。

所以项目中不使用$nextTick的话也可以直接使用Promise.then或者SetTimeout实现相同的效果

# Vue 异常处理
1. 全局错误处理：Vue.config.errorHandler
Vue.config.errorHandler = function(err, vm, info) {};
如果在组件渲染时出现运行错误，错误将会被传递至全局Vue.config.errorHandler 配置函数 (如果已设置)。
比如前端监控领域的 sentry，就是利用这个钩子函数进行的 vue 相关异常捕捉处理
2. 全局警告处理：Vue.config.warnHandler
```js
Vue.config.warnHandler = function(msg, vm, trace) {};
```
注意：仅在开发环境生效
像在模板中引用一个没有定义的变量，它就会有warning
3. 单个vue 实例错误处理：renderError
```js
const app = new Vue({
    el: "#app",
    renderError(h, err) {
        return h("pre", { style: { color: "red" } }, err.stack);
    }
});
```
和组件相关，只适用于开发环境，这个用处不是很大，不如直接看控制台
4. 子孙组件错误处理：errorCaptured
```js
Vue.component("cat", {
    template: `<div><slot></slot></div>`,
    props: { name: { type: string } },
    errorCaptured(err, vm, info) {
        console.log(`cat EC: ${err.toString()}\ninfo: ${info}`);
        return false;
    }
});
```
注：只能在组件内部使用，用于捕获子孙组件的错误，一般可以用于组件开发过程中的错误处理
5. 终极错误捕捉：window.onerror
```js
window.onerror = function(message, source, line, column, error) {};
```
它是一个全局的异常处理函数，可以抓取所有的 JavaScript 异常
