import { Request, Response } from "express";
import { controller, get } from "../../decorator";
import { IHomeDetailResult, IHomeResult } from "../../types";
import { handleError, handleFilterDate, handleResponse } from "../../utils/utils";
import connection from '../../utils/connection'

@controller('/website')
export class HomeController {
  @get('/page')
  page(req: IPageDate, res: Response): void {
    let { page, pageSize } = req.query
    const currentPage = parseInt(page) || 1
    const currentPageSize = parseInt(pageSize) || 20
    const sql = `SELECT * FROM home LIMIT ${(currentPage - 1) * currentPageSize}, ${currentPageSize};
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

  @get('/detail')
  detail(req: Request, res: Response): void | Response {
    const { id } = req.query
    if (!id) return res.json(handleResponse<string>(500, '请输入id!'))
    const sql = `SELECT id, title, date, content FROM home WHERE id=${id};
      SELECT id FROM home WHERE id < ${id} order by id desc limit 1;
      SELECT id FROM home WHERE id > ${id} order by id limit 1;`
    
    connection.query(sql, (err, result) => {
      if (err) return handleError(err, res)
      const data = result[0].filter((item: IHomeDetailResult) => item.date = handleFilterDate(item.date))
      const prev = result[1].length > 0 ? result[1][0].id : undefined
      const next = result[2].length > 0 ? result[2][0].id : undefined
      const response: IHomeDetailResult = {...data[0], prev, next}
      res.json(handleResponse<IHomeDetailResult>(200, response))
    })
  }
}
