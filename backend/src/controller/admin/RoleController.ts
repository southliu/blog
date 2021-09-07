import { Response } from "express";
import { IPageDate, IUserResult } from "../../types";
import connection from "../../utils/connection";
import { handleError, handleResponse } from "../../utils/utils";
import { get } from '../../decorator/request';
import { controller } from '../../decorator/controller';

@controller('/user')
export class UserController {
  @get('/page')
  page(req: IPageDate, res: Response) {
    let { page, pageSize } = req.query
    page = page || 1
    pageSize = pageSize || 20

    const sql = `SELECT * FROM users LIMIT ${(page - 1) * pageSize}, ${pageSize};
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