import moment from "moment"
import { Response } from "express"
import { MysqlError } from "mysql"

type IResult<T> = {
  code: number;
  message?: string;
  data: T
}

// 响应处理
export const handleResponse = <T>(code: number, data: T, message?: string): IResult<T> => {
  return {
    code,
    data,
    message: message || undefined
  }
}

// 错误处理
export const handleError = (err: MysqlError | null, res: Response) => {
  if (err) {
    console.log('错误信息:', err.message)
    return res.json(handleResponse<string>(500, err.message))
  }
}

// 转换时间格式
export const handleFilterDate = (date: string, format: string = 'YYYY-MM-DD hh:mm:ss'): string => {
  return moment(date).format(format)
}