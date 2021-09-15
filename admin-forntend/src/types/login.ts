// 登录请求数据
export interface ILoginData {
  username: string;
  password: string;
}

// 登录响应数据
export interface ILoginResult {
  token: string;
  role_ids: number[];
  permissions: number[];
} 