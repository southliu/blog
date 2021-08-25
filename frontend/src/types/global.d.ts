/**
 * @describe api响应
 */
export type IResponseData<T> = {
  code: number;
  message?: string;
  data: T
}