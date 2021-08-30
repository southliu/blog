// api公共数据
interface IPublicResponse {
  code: number;
  message?: string;
}


// api响应
export interface IResponseData<T> extends IPublicResponse {
  data: T
}

// 分页api响应
export interface IPageResponseData<T> extends IPublicResponse  {
  data: {
    items: T;
    total: number;
  }
}


// 分页
export interface IPageDate {
  page: number;
  pageSize: number;
} 