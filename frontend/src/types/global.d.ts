/**
 * @describe api公共数据
 */
interface IPublicResponse {
  code: number;
  message?: string;
}


/**
 * @describe api响应
 */
export interface IResponseData<T> extends IPublicResponse {
  data: T
}

/**
 * @describe 分页api响应
 */
export interface IPageResponseData<T> extends IPublicResponse  {
  data: {
    items: T;
    total: number;
  }
}