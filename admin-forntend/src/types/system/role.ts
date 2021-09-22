// 角色响应数据
export interface IRoleResponseData {
  id: number;
  name: string;
  authIds: string[] | number[]
}

// 角色请求数据
type IRequestKeys = 'name' | 'authIds'
export type IRoleRequestData = Pick<IRoleResponseData, IRequestKeys>