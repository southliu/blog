# 首屏加载慢
### 如果浏览器同时加载多个js文件时，会出现首屏时间长、dev启动慢等问题。

# 常用链接类型(rel)
### `modulepreload`: 更早和更高优先级的加载模块脚本。
### `preload`: 告诉浏览器下载资源，因为在当前导航期间稍后将需要该资源。
### `prefetch`: 提示浏览器提前加载链接的资源，因为它可能会被用户请求。
### `prerender`: 建议浏览器事先获取链接的资源，并建议将预取的内容显示在屏幕外，以便在需要时可以将其快速呈现给用户。
### `preconnect`: 向浏览器提供提示，建议浏览器提前打开与链接网站的连接，而不会泄露任何私人信息或下载任何内容，以便在跟随链接时可以更快地获取链接内容。
### `dns-prefetch`: 提示浏览器该资源需要在用户点击链接之前进行 DNS 查询和协议握手。
```
<link rel="modulepreload" href="xxx" />
<link rel="preload" href="xxx" />
<link rel="prefetch" href="xxx" />
...
```

### 其他链接类型可以参考：[链接类型](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Link_types)