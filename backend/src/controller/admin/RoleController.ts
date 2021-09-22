import { NextFunction, Request, Response } from "express";
import { IIdBodyRequest, IPageDate, IRoleResult, MESSAGE_SUCCESS } from "../../types";
import connection from "../../utils/connection";
import { checkId, handleError, handleResponse } from "../../utils/utils";
import { get, post, patch, del, controller, use } from '../../decorator';

interface ICreateRequest extends Request {
  body: {
    name: string;
    authIds: string[] | number[]
  }
}

// 检查新增传值
const checkCreateParams = (req: Request, res: Response, next: NextFunction): void | Response => {
  let { name } = req.body

  if (!name) return res.json(handleResponse<string>(500, '请输入名称!'))
  next();
};

@controller('/user')
export class UserController {
  // 分页
  @get('/page')
  page(req: IPageDate, res: Response): void {
    let { page, pageSize } = req.query
    const currentPage = parseInt(page) || 1
    const currentPageSize = parseInt(pageSize) || 20
    const sql = `SELECT * FROM roles LIMIT ${(currentPage - 1) * currentPageSize}, ${currentPageSize};
    SELECT COUNT(id) as total FROM roles;`

    connection.query(sql, (err, result) => {
      if (err) return handleError(err, res)
      const items = result[0]
      const response = { items, ...result[1][0] }
      res.json(handleResponse<IRoleResult[]>(200, response))
    })
  }

  // 根据id获取
  @get('/')
  @use(checkId)
  getOne(req: IIdBodyRequest, res: Response): void {
    let { id } = req.query
    const sql = `SELECT * FROM users WHERE id=?;`

    connection.query(sql, [id], (err, result) => {
      if (err) return handleError(err, res)
      const response = result[0]
      res.json(handleResponse<IRoleResult[]>(200, response))
    })
  }

  // 新增
  @post('/')
  @use(checkCreateParams)
  create(req: ICreateRequest, res: Response): void {
    let { name, authIds } = req.body
    const sql = `INSERT INTO roles(name, role_ids) VALUES(?, ?);`

    connection.query(sql, [name, authIds], (err, result) => {
      if (err) return handleError(err, res)
      const response = result[0]
      res.json(handleResponse<IRoleResult[]>(200, response, MESSAGE_SUCCESS.create_success))
    })
  }

  // 修改
  @patch('/')
  @use(checkCreateParams)
  @use(checkId)
  update(req: ICreateRequest & IIdBodyRequest, res: Response): void {
    let { id } = req.query
    let { name, authIds } = req.body
    const sql = `UPDATE roles SET name=?, authIds=? WHERE id=?;`

    connection.query(sql, [name, authIds, id], (err, result) => {
      if (err) return handleError(err, res)
      const response = result[0]
      res.json(handleResponse<IRoleResult[]>(200, response, MESSAGE_SUCCESS.update_success))
    })
  }

  // 删除
  @del('/')
  @use(checkId)
  del(req: IIdBodyRequest, res: Response): void {
    let { id } = req.query
    const sql = `DELETE FROM roles WHERE id=?;`
  
    connection.query(sql, [id], (err, result) => {
      if (err) return handleError(err, res)
      const response = result[0]
      res.json(handleResponse<IRoleResult[]>(200, response, MESSAGE_SUCCESS.delete_success))
    })
  }
}