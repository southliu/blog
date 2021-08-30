import { IPageDate } from '@/types'
import request from '@/utils/request'

/**
 * 查询-banner
 * @param {Object} data
 */
interface IBanner {
  type: string
}

function find_banner(data?: IBanner) {
  return request({
    method: 'get',
    url: '/banner',
    params: data
  })
}

/**
 * 查询-根据条件分页查询
 * @param {Object} data
 */
function find_page(data: IPageDate) {
  return request({
    method: 'get',
    url: '/home/page',
    params: data
  })
}

/**
 * 查询-根据id获取详情
 */
function find_detail(id: string) {
  return request({
    method: 'get',
    url: '/home/detail',
    params: { id }
  })
}


export default {
  find_banner,
  find_page,
  find_detail
}
