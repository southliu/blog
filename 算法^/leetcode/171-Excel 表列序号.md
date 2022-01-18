# leecode 171: Excel 表列序号
### 给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回该列名称对应的列序号。
#### 例如，
```
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
```
#### 示例 1：
```
输入: columnTitle = "A"
输出: 1
```
#### 示例 2：
```
输入: columnTitle = "AB"
输出: 28
```
#### 示例 3：
```
输入: columnTitle = "ZY"
输出: 701
```
#### 示例 4：
```
输入: columnTitle = "FXSHRXW"
输出: 2147483647
```
### 解题思路：尾循环，最后一位是26的0次方+当前数，倒数第二位是26的1次方+当前数，依次累加...
```
function titleToNumber(columnTitle: string): number {
  let ans = 0
  let multiple = 1

  for (let i = columnTitle.length - 1; i >= 0; i--) {
    const num = columnTitle[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1
    ans += num * multiple
    multiple *= 26
  }

  return ans
};
```