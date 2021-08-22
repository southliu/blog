type IResult<T> = {
  code: number;
  message?: string;
  data: T
}

export const hanldeResponse = <T>(code: number, data: T, message?: string): IResult<T> => {
  return {
    code,
    data,
    message: message || undefined
  }
}