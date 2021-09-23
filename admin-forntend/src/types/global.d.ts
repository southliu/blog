import { AxiosResponse } from "axios"

export {}
declare global {
  // api响应
  export interface IResponseData<T = undefined> {
    code: number;
    message?: string;
    data: T
  }
  
  // 分页api响应
  export type IPageResponseData<T> = IResponseData<{
    items: T;
    total: number;
  }>
  
  // api响应
  type IAPIResult<T> = Promise<AxiosResponse<IResponseData<T>>>
  
  // api响应
  type IAPIPageResult<T> = Promise<AxiosResponse<IPageResponseData<T>>>

  // 分页
  interface IPageDate {
    page: number;
    pageSize: number;
    total?: number;
  }

  // 分页请求数据
  type IPageRequest<T> = IPageDate & Partial<T>

  // id数据
  interface IIdRequest {
    id: string | number;
  }

  interface IChildrenData<T> {
    children?: T[];
  }
}