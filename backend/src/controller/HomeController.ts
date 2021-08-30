import { Response } from "express";
import { controller, get } from "../decorator";
import { IHomeResult } from "../types";
import { handleResponse } from "../utils/utils";
import connection from '../utils/connection'
import { IPageDate } from '../types/global';
import moment from 'moment'

@controller('/home')
export class HomeController {
  @get('/page')
  page(req: IPageDate, res: Response) {
    let { page, pageSize } = req.query
    page = page || 1
    pageSize = pageSize || 20

    const sql = `SELECT * FROM home LIMIT ${(page - 1) * pageSize}, ${pageSize};
      SELECT COUNT(id) as total FROM home;`

    connection.query(sql, function (err, result) {
      if (err) {
        console.log('错误信息:', err.message)
        return res.json(handleResponse<string>(500, err.message))
      }
      // 过滤时间格式
      const items = result[0].filter((item: IHomeResult) => 
        item.date = moment(item.date).format('YYYY-MM-DD hh:mm:ss'))
      const response = { items, ...result[1][0] }
      res.json(handleResponse<IHomeResult[]>(200, response))
    })
  }
}