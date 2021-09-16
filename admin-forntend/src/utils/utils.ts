// 迭代数组
export interface IChildrenData<T> { children?: T[]; } 
export function handleRecursion<T, Y extends IChildrenData<Y>>(data: Y[], callback: (item: Y) => T): T[] {
  let result: T[] = []
  data?.length > 0 && data.forEach((item: Y & IChildrenData<Y>) => {
    result.push(callback(item))

    if (item.children && item.children.length > 0) {
      handleRecursion(item.children, callback)
    }
  })

  return result
}

