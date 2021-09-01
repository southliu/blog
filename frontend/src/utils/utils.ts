// 分割时间
export const hanldeFilterDate = (date: string, type: 'date' | 'time') => {
  const arr = date.split(' ')
  switch (type) {
    case 'date':
      return arr[0]

    case 'time': {
      const timeArr = arr[1].split(':')
      const hour = parseInt(timeArr[0])
      let period: 'AM' | 'PM' = 'AM'
      if (hour >= 0 && hour <= 12) period = 'AM'
      if (hour > 12) period = 'PM'
      return `${arr[1]}${period}`
    }

    default:
      return ''
  }
}

type IPopularizeType = 'qq' | 'wechat' | 'github'
// 推广
export const handlePopularize = (type: IPopularizeType) => {
  switch (type) {
    case 'github':
      window.open('https://github.com/SouthLiu')
      break

    case 'wechat':
      break

    case 'qq':
      window.open('http://wpa.qq.com/msgrd?v=3&uin=1275093225&site=qq&menu=yes')
      break
  }
}