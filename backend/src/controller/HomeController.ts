import { Request, Response } from "express";
import { controller, get } from "../decorator";
import { IHomeResult } from "../types";
import { handleResponse } from "../utils/utils";
import connection from '../utils/connection'

@controller('/home')
export class HomeController {
  @get('/page')
  page(req: Request, res: Response) {
    // const { page, pageSize } = req.query
    // console.log('page:', page)
    // console.log('pageSize:', pageSize)

    const sql = 'SELECT * FROM home'

    connection.query(sql, function (err,result) {
      if(err){
        res.json(handleResponse<string>(500, err.message))
      }
      console.log(result);  //数据库查询结果返回到result中
      res.json(handleResponse<IHomeResult[]>(200, result))
    })
  }
}