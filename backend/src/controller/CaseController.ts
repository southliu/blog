import { Request, Response } from "express";
import { get } from "../decorator";
import { controller } from "../decorator/controller";
import { ICaseResultItem, ICaseResult } from "../types";
import connection from "../utils/connection";
import { handleError, handleFilterDate, handleResponse } from "../utils/utils";

@controller('/case')
export class CaseController {
  @get('/list')
  case(req: Request, res: Response) {
    const sql = `SELECT * FROM cases`
    
    connection.query(sql, (err, result: ICaseResultItem[]) => {
      if (err) return handleError(err, res)
      const response: ICaseResult[] = []
      const responseObj: { [key: string]: ICaseResultItem[] } = {}
      result.forEach(item => {
        const date = handleFilterDate(item.date)
        const year = date.substring(0, 4)
        item.year = year
        item.date = date.substring(5, 10)
        responseObj[year] ? responseObj[year].push(item) : responseObj[year] = [item]
      })

      console.log('responseObj', responseObj)
      for (let key in responseObj) {
        response.push({ year: key, items: responseObj[key] })
      }
      res.json(handleResponse<ICaseResult[]>(200, response))
    })
  }
}