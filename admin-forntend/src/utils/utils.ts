// 迭代数组
export interface IChildrenData<T> { children?: T[]; } 
export function handleRecursion<T, Y extends IChildrenData<Y>>(data: Y[], callback: (item: Y) => T | undefined): T[] {
  let result: T[] = []
  data?.length > 0 && data.forEach((item: Y & IChildrenData<Y>) => {
    const callbackData = callback(item)
    callbackData && result.push(callbackData)

    if (item.children && item.children.length > 0) {
      handleRecursion(item.children, callback)
    }
  })

  return result
}

