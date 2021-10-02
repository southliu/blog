import { Request } from "express";

export {}
declare global {
  type allDataType = string | number | boolean | string[] | number[]

  // 分页
  interface IPageDate {
    query: {
      page: string;
      pageSize: string;
    }
  }

  // 分页请求数据
  type IPageRequest<T> = {
    query: {
      [P in keyof T as P extends T ? P : never]: T[P];
    } & {
      page: string;
      pageSize: string;
    } extends infer R ? {[K in keyof R]?: R[K]}: unknown
  }

  // id请求
  interface IIdBodyRequest extends Request {
    body: {
      query: { id: string; }
    }
  }
}