# 用CSS写个三角形
```css
.triangle {
    width: 0;
    height: 0;
    border-top: 100px solid transparent;
    border-left: 100px solid blue;
    border-right: 100px solid transparent;
    border-bottom: 100px solid transparent;
}
```

# flex: 1的含义
flex: 1 === flex: 0 1 auto
* 第一个参数：**flex-grow**定义项目的放大比例，默认为0，即如果存在剩余空间也不会放大
* 第二个参数：**flex-shrink**定义项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
* 第三个参数：**flex-basic**给上面两个属性分配多余空间之前，计算项目是否有多余空间，默认值为auto，即项目本身大小

# 清除浮动的方式
* 添加额外标签
```html
<div class="parent">
    // 额外标签添加clear:both
    <div style="clear:both"></div>
</div>
```
* 父级添加overflow属性，或者设置高度
* 建立伪类选择器清除浮动
```css
.parent:after {
    content: '';
    display: block;
    height: 0,
    visibility: hidden;
    clear: both;
}
```

# 写一个垂直水平居中
```css
.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background-color: blue;
}
```