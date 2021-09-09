import { Request, Response } from "express";
import { get, controller } from "../../decorator";
import { handleResponse } from "../../utils/utils";

@controller('/website')
export class BannerController {
  @get('/banner')
  banner(req: Request, res: Response): void {
    const imgUrl: string = 'http://img1.baidu.com/it/u=427705127,434332342&fm=253&app=138&f=JPEG?w=500&h=281'
    const result = handleResponse<string>(200, imgUrl)
    res.json(result)
  }
}