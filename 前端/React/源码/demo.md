# 资料来源：
### [来源地址](https://pomb.us/build-your-own-react/)

# React
### React源码使用[flow.js](http://flow.org)静态类型检查工具。

# Review

```ts
const element = <h1 title="foo">Hello</h1>
const container = document.getElementById("root")
ReactDOM.render(element, container)
```