# 选择器优先级
!important > 行内样式 > #id > .class > tag > * > 继承 > 默认

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

# 单行超出显示省略号
```css
.text {
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
```

# 多行超出显示省略号
```css
.text {
    width: 200px;
    height: 60px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-break: break-all; /* 解决数字或英文不换行问题 */
}
```

# 写一个箭头
```css
.arrow {
    width: 7px;
    height: 7px;
    border-top: 2px solid blue;
    border-right: 2px solid blue;
    transform: rotate(45deg);
}
```

# 画一个叉
```css
.close {
    position: relative;
}

.close::before,
.close::after {
    position: absolute;
    content: ' ';
    background-color: #eee;
    left: 20px;
    width: 1px;
    height: 20px;
}

.close::before {
    transform: rotate(45deg);
}

.close::after {
    transform: rotate(-45deg);
}
```

# link和@import的区别
* link功能较多，可以定义Rel等作用，而@import只能用于加载css
* 当解析到link时，页面会同步加载所引的css，而@import所引用的css会等页面加载完成才被加载
* @import需要IE5以上才能使用
* link可以使用js动态引入，@import不行