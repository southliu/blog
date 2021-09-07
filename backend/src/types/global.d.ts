import { Request } from "express";

// 分页
export interface IPageDate extends Request {
  query: {
    page: number;
    pageSize: number;
  }
}