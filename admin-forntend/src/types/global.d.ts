import { AxiosResponse } from "axios"

export {}
declare global {
  type allDataType = string | number | boolean | string[] | number[]

  // api响应
  interface IResponseData<T = undefined> {
    code: number;
    message?: string;
    data: T
  }
  
  // 分页api响应
  type IPageResponseData<T> = IResponseData<{
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
  
  // 子数据
  interface IChildrenData<T> {
    children?: T[];
  }

  // 搜索数据
  interface ISearchData {
    label: string;
    key: string;
  }

  // 新增对话框数据
  interface ICreateDialog {
    isCreateVisible: boolean,
    updateId: number
  }

  // 新增数据
  type ICreateKeys = 'label' | 'key' | 'isRequired'
  type ICreateData = Pick<ITableColumns, ICreateKeys>

  // 表格数据
  interface ITableColumns {
    label: string;
    key: string;
    width?: number;
    isNotShow?: boolean;
    isSearch?: boolean;
    searchWidth?: number;
    isNotCreat?: boolean;
    isRequired?: boolean;
  }
}