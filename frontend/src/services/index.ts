import request from '@/utils/request'

/**
 * 查询-banner
 * @param {Object} data
 */
function find_banner(data: any) {
  return request.get(`/banner`, { params: data })
}

/**
 * 查询-根据条件分页查询
 * @param {Object} data
 */
function find_page(data: any) {
  return request.get(`/home/page`, { params: data })
}

export default {
  find_banner,
  find_page
}
