# leecode 412: Fizz Buzz

### 给你一个整数 n ，找出从 1 到 n 各个整数的 Fizz Buzz 表示，并用字符串数组 answer（下标从 1 开始）返回结果，其中：
* answer[i] == "FizzBuzz" 如果 i 同时是 3 和 5 的倍数。
* answer[i] == "Fizz" 如果 i 是 3 的倍数。
* answer[i] == "Buzz" 如果 i 是 5 的倍数。
* answer[i] == i （以字符串形式）如果上述条件全不满足。

#### 示例 1：
```
输入：n = 3
输出：["1","2","Fizz"]
```
#### 示例 2：
```
输入：n = 5
输出：["1","2","Fizz","4","Buzz"]
```
#### 示例 3：
```
输入：n = 15
输出：["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
```

### 解题思路：分别求余，当满足提交替换当前的数。
```ts
function fizzBuzz(n: number): string[] {
  let answer: string[] = []

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push("FizzBuzz")
      continue
    }
    if (i % 3 === 0) {
      answer.push("Fizz")
      continue
    }
    if (i % 5 === 0) {
      answer.push("Buzz")
      continue
    }
    answer.push(i.toString())
  }

  return answer
};
```