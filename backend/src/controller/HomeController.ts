import { Request, Response } from "express";
import { controller, get } from "../decorator";
import { IHomeDetail, IHomeResult } from "../types";
import { handleError, handleFilterDate, handleResponse } from "../utils/utils";
import connection from '../utils/connection'
import { IPageDate } from '../types/global';

@controller('/home')
export class HomeController {
  @get('/page')
  page(req: IPageDate, res: Response) {
    let { page, pageSize } = req.query
    page = page || 1
    pageSize = pageSize || 20

    const sql = `SELECT * FROM home LIMIT ${(page - 1) * pageSize}, ${pageSize};
      SELECT COUNT(id) as total FROM home;`

    connection.query(sql, (err, result) => {
      if (err) return handleError(err, res)
      // 过滤时间格式
      const items = result[0].filter((item: IHomeResult) => 
        item.date = handleFilterDate(item.date))
      const response = { items, ...result[1][0] }
      res.json(handleResponse<IHomeResult[]>(200, response))
    })
  }
}


@controller('/home')
export class DetailController {
  @get('/detail')
  detail(req: Request, res: Response) {
    const { id } = req.query
    if (!id) return res.json(handleResponse<string>(500, '请输入id!'))

    const sql = `SELECT id, title, date, content FROM home WHERE id=${id};`
    
    connection.query(sql, (err, result) => {
      if (err) return handleError(err, res)
      const response = result.filter((item: IHomeDetail) => item.date = handleFilterDate(item.date))
      res.json(handleResponse<string>(200, response))
    })
  }
}