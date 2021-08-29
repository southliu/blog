import { Request, Response } from "express";
import { controller, get } from "../decorator";
import { IHomeResult } from "../types";
import { handleResponse } from "../utils/utils";
import connection from '../utils/connection'
import { IPageDate } from '../types/global';

@controller('/home')
export class HomeController {
  @get('/page')
  page(req: IPageDate, res: Response) {
    const { page, pageSize } = req.query
    console.log('page:', page)
    console.log('pageSize:', pageSize)

    const sql = `SELECT * FROM home LIMIT ${(page - 1) * pageSize},${pageSize};`

    connection.query(sql, function (err, result) {
      if (err) {
        console.log('错误信息:', err.message)
        return res.json(handleResponse<string>(500, err.message))
      }
      console.log(result);  //数据库查询结果返回到result中
      
      const countSql = `SELECT COUNT(id) as total FROM home;`
      connection.query(countSql, function (countErr, countResult) {
        if (countErr) {
          console.log('错误信息:', countErr.message)
          return res.json(handleResponse<string>(500, countErr.message))
        }

        console.log('countResult:', countResult)
        result.count = countResult
        res.json(handleResponse<IHomeResult[]>(200, result))
      })
    })
  }
}