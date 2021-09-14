export {}
declare global {
  interface IPublicResponse {
    code: number;
    message?: string;
  }
  
  // api响应
  interface IResponseData<T> extends IPublicResponse {
    data: T
  }
  
}