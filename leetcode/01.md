# leetcode第一题
### 求两数之和，输入两个参数，第一个参数为数组，第二个参数是数组中任意两个参数之和的结果，当有结果时，返回对应两个数据的下标。
```
输入： [1, 2, 3], 4
输出： [0, 2]
解释： 1 + 3 = 4, 1和3对应下标是0和2
```
### 思路：循环数组，并用当前结果减去当前数据，得到结果，结果存储到对象中，如果对象里面存在结果，则是答案。
```
function twoSum(nums: number[], target: number): number[] {
  // 缓存数据
  const map = {}

  // 循环数据
  for (let key in nums) {
    // 获取对应结果
    const result = target - nums[key]
    // 当结果存在缓存数据中，则为答案
    if (map[result] !== undefined) {
      return [map[result], Number(key)]
    }
    map[nums[key]] = Number(key)
  }

  // 当结果不存在则返回空数组
  return []
}
```