import { Request, Response } from "express";
import { get } from "../decorator";
import { controller } from "../decorator/controller";
import { handleResponse } from "../utils/utils";

@controller('/')
export class BannerController {
  @get('/banner')
  banner(req: Request, res: Response) {
    console.log('banner finish')
    const imgUrl: string = 'http://img1.baidu.com/it/u=427705127,434332342&fm=253&app=138&f=JPEG?w=500&h=281'
    const result = handleResponse<string>(200, imgUrl)
    res.json(result)
  }
}