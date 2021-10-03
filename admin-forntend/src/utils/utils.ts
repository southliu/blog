/**
 * 迭代数组成新数组
 * @param data 需要过滤的值
 * @param callback 处理data数据返回新的值
 */
export function handleRecursion<T, Y extends IChildrenData<Y>>(data: Y[], callback: (item: Y) => T | undefined): T[] {
  const result: T[] = []
  data?.length > 0 && data.forEach((item: Y & IChildrenData<Y>) => {
    const callbackData = callback(item)
    if (callbackData && item.children && item.children.length > 0) {
      (callbackData as IChildrenData<T>).children = handleRecursion(item.children, callback)
    }

    callbackData && result.push(callbackData)
  })

  return result
}

// 获取搜索数据
export const handleGetSearch = (columns: ITableColumns[]) => {
  const data: ISearchData[] = []
  columns.forEach(item => {
    if (item.isSearch) {
      const { label, key } = item
      data.push({ label, key })
    }
  })
  return data
}

// 获取新增数据
export const handleGetCreate = (columns: ITableColumns[]) => {
  const data: ICreateData[] = []
  columns.forEach(item => {
    if (!item.isNotCreat) {
      const { label, key, isRequired } = item
      data.push({ label, key, isRequired })
    }
  })
  return data
}