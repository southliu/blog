### leecode 第二十八：实现 strStr()
### 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。
#### 示例 1：
```
输入：haystack = "hello", needle = "ll"
输出：2
```
#### 示例 2：
```
输入：haystack = "aaaaa", needle = "bba"
输出：-1
```
#### 示例 3：
```
输入：haystack = "", needle = ""
输出：0
```
### 解题：
```
function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle)
};
```