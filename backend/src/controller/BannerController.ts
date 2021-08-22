import { get } from "../decorator";
import { controller } from "../decorator/controller";

@controller('/banner')
export class BannerController {
  @get('/banner')
  getBanner() {
    return '123'
  }
}