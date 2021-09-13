import { NextFunction, Request, Response } from "express";
import { controller, post, use } from "../../decorator";
import connection from "../../utils/connection";
import { handleError, handleResponse } from "../../utils/utils";

interface ILoginRequest extends Request {
  body: {
    username: string;
    password: string;
    session: { isLogin: boolean; }
  }
}

// 检测参数
function checkParams(req: ILoginRequest, res: Response, next: NextFunction): void | Response {
  const { username, password } = req.body

  if (!username) return res.json(handleResponse<string>(500, '请输入用户名!'))
  if (!password) return res.json(handleResponse<string>(500, '请输入密码!'))
  next()
}

@controller('/login')
export class LoginController {
  static handleIsLogin(req: ILoginRequest): boolean {
    return !!req.session?.isLogin || false
  }

  @post('/')
  @use(checkParams)
  login(req: ILoginRequest, res: Response): void | Response {
    const { username, password } = req.body
    const isLogin = LoginController.handleIsLogin(req)
    console.log(req.session?.isLogin)

    if (isLogin) return res.json(handleResponse<string>(200, '一登录'))

    const sql = `SELECT username, password FROM users WHERE username=? AND password=?`

    connection.query(sql, [username, password], (err, result) => {
      if (err) return handleError(err, res)
      if (result.length > 0) return res.json(handleResponse<boolean>(200, true))
      if (req.session) req.session.isLogin = true
      res.json(handleResponse<string>(500, '请输入正确账号或密码!'))
    })
  }
}