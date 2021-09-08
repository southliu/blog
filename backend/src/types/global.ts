import { Request } from "express";

// 分页
export interface IPageDate extends Request {
  query: {
    page: string;
    pageSize: string;
  }
}

// id请求
export interface IIdBodyRequest extends Request {
  body: { id: string; }
}