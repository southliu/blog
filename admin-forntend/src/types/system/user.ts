// 用户响应数据
export interface IUserResponseData {
  id: number;
  name: string;
  username: string;
  password: string;
  roleIds: string[] | number[]
}

// 用户请求数据
type IRequestKeys = 'name' | 'password' | 'roleIds'
export type IUserRequestData = Pick<IUserResponseData, IRequestKeys>