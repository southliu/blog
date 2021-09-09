import { NextFunction, Request, Response } from "express";
import { IIdBodyRequest, IPageDate, IUserResult, MESSAGE_SUCCESS } from "../../types";
import connection from "../../utils/connection";
import { checkId, handleError, handleResponse } from "../../utils/utils";
import { get, post, patch, del, controller, use } from '../../decorator';

interface ICreateRequest extends Request {
  body: {
    name: string;
    username: string;
    password: string;
    roleIds: string[] | number[]
  }
}

// 检查新增传值
const checkCreateParams = (req: Request, res: Response, next: NextFunction): void | Response => {
  let { name, username, password, roleIds } = req.body

  if (!name) return res.json(handleResponse<string>(500, '请输入名称!'))
  if (!username) return res.json(handleResponse<string>(500, '请输入用户名!'))
  if (!password) return res.json(handleResponse<string>(500, '请输入密码!'))
  if (!roleIds) return res.json(handleResponse<string>(500, '请选择角色!'))
  next();
};

@controller('/user')
export class UserController {
  // 分页
  @get('/page')
  page(req: IPageDate, res: Response) {
    let { page, pageSize } = req.query
    const currentPage = parseInt(page) || 1
    const currentPageSize = parseInt(pageSize) || 20

    const sql = `SELECT * FROM users LIMIT ${(currentPage - 1) * currentPageSize}, ${currentPageSize};
    SELECT COUNT(id) as total FROM users;`

    connection.query(sql, (err, result) => {
      if (err) return handleError(err, res)
      const items = result[0]
      const response = { items, ...result[1][0] }
      res.json(handleResponse<IUserResult[]>(200, response))
    })
  }

  // 新增
  @post('/')
  @use(checkCreateParams)
  create(req: ICreateRequest, res: Response) {
    let { name, username, password, roleIds } = req.body

    const sql = `INSERT INTO users(name, username, password, role_ids) VALUES(?, ?, ?, ?);`

    connection.query(sql, [name, username, password, roleIds], (err, result) => {
      if (err) return handleError(err, res)
      const response = result[0]
      res.json(handleResponse<IUserResult[]>(200, response, MESSAGE_SUCCESS.create_success))
    })
  }

  // 修改
  @patch('/')
  @use(checkCreateParams)
  @use(checkId)
  update(req: ICreateRequest & IIdBodyRequest, res: Response) {
    let { id } = req.query
    let { name, username, password, roleIds } = req.body

    const sql = `UPDATE users SET name=?, username=?, password=?, role_ids=? WHERE id=?;`

    connection.query(sql, [name, username, password, roleIds, id], (err, result) => {
      if (err) return handleError(err, res)
      const response = result[0]
      res.json(handleResponse<IUserResult[]>(200, response, MESSAGE_SUCCESS.update_success))
    })
  }

  // 删除
  @del('/')
  @use(checkId)
  del(req: IIdBodyRequest, res: Response) {
    let { id } = req.query

    const sql = `DELETE FROM users WHERE id=?;`
    connection.query(sql, [id], (err, result) => {
      if (err) return handleError(err, res)
      const response = result[0]
      res.json(handleResponse<IUserResult[]>(200, response, MESSAGE_SUCCESS.delete_success))
    })
  }
}