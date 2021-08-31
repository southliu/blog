import { Request, Response } from "express";
import { get } from "../decorator";
import { controller } from "../decorator/controller";
import { ICaseResult } from "../types";
import connection from "../utils/connection";
import { handleError, handleResponse } from "../utils/utils";

@controller('/case')
export class CaseController {
  @get('/list')
  case(req: Request, res: Response) {
    const sql = `SELECT * FROM cases`
    
    connection.query(sql, (err, result) => {
      if (err) return handleError(err, res)
      res.json(handleResponse<ICaseResult>(200, result))
    })
  }
}