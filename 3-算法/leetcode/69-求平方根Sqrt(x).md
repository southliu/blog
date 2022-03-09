# leecode 69：求平方根Sqrt(x)
### 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
### 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
### 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
#### 示例 1：
```
输入：x = 4
输出：2
```
#### 示例 2：
```
输入：x = 8
输出：2
解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
```
### 解题思路：
1. 二分查询法，创建左右变量
2. left小于等于right循环，求中间值，中间值的方小于等于值，left为中间值+1，否则right等于中间值减1

```
function mySqrt(x: number): number {
  let left = 0
  let right = x

  while (left <= right) {
    const mid = left + ((right - left) >> 1)
    if (mid * mid <= x) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return right
};
```