import { Response } from "express";
import { IPageDate, IUserResult } from "../../types";
import connection from "../../utils/connection";
import { handleError, handleResponse } from "../../utils/utils";
import { get, controller } from '../../decorator';

@controller('/user')
export class UserController {
  @get('/page')
  page(req: IPageDate, res: Response) {
    const { page, pageSize } = req.query
    const currentPage = parseInt(page) || 1
    const currentPageSize = parseInt(pageSize) || 20

    const sql = `SELECT * FROM users LIMIT ${(currentPage - 1) * currentPageSize}, ${currentPageSize};
    SELECT COUNT(id) as total FROM users;`

    connection.query(sql, (err, result) => {
      if (err) return handleError(err, res)
      // 过滤时间格式
      const items = result[0]
      const response = { items, ...result[1][0] }
      res.json(handleResponse<IUserResult[]>(200, response))
    })
  }
}