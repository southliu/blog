import { AxiosResponse } from "axios"

export {}
declare global {
  // api响应数据
  interface IResponseData<T = undefined> {
    code: number;
    message?: string;
    data: T
  }

  // api响应
  type IAPIResult<T> = Promise<AxiosResponse<IResponseData<T>>>

  // 分页
  interface IPageDate {
    page: number;
    pageSize: number;
  }

  // 分页请求数据
  type IPageRequest<T> = IPageDate & Partial<T>

  // id数据
  interface IIdRequest {
    id: string | number;
  }
}