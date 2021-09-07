import { Request, Response } from "express";
import { IPageDate, IPublicResult, IUserResult } from "../../types";
import connection from "../../utils/connection";
import { handleError, handleResponse } from "../../utils/utils";
import { get, post } from '../../decorator/request';
import { controller } from '../../decorator/controller';

interface ICreate extends Request {
  body: {
    name: string;
    username: string;
    password: string;
    roleIds: string[] | number[]
  }
}
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
      const items = result[0]
      const response = { items, ...result[1][0] }
      res.json(handleResponse<IUserResult[]>(200, response))
    })
  }

  @post('/create')
  create(req: ICreate, res: Response) {
    console.log('req.body:', req.body)
    let { name, username, password, roleIds } = req.body

    if (!name) return res.json(handleResponse<string>(500, '请输入名称'))
    if (!username) return res.json(handleResponse<string>(500, '请输入用户名'))
    if (!password) return res.json(handleResponse<string>(500, '请输入密码'))
    if (!roleIds) return res.json(handleResponse<string>(500, '请选择角色'))

    const sql = `SELECT * FROM users
      (name, username, password, role_ids) VALUES
      (${name}, ${username}, ${password}, ${roleIds});`

    connection.query(sql, (err, result) => {
      if (err) return handleError(err, res)
      const response = result[0]
      res.json(handleResponse<IUserResult[]>(200, response, '新增成功'))
    })
  }
}