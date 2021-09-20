export {}
declare global {
  // api响应
  interface IResponseData<T = undefined> {
    code: number;
    message?: string;
    data: T
  }
}