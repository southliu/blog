import request from '@/utils/request'
import { IRoleRequestData, IRoleResponseData } from '@/types'

// 查询-根据条件分页查询
function find_page(data: IPageRequest<IRoleRequestData>): IAPIPageResult<IRoleResponseData[]> {
  return request.get('/user/page', { params: data })
}

// 查询-根据主键查询
function find_one(data: IIdRequest): IAPIResult<IRoleResponseData> {
  return request.get(`/user`, { params: data })
}

// 新增
function create(data: IRoleRequestData): IAPIResult<IRoleResponseData> {
  return request.post(`/user`, data)
}

// 修改
function update(id: number, data: IRoleRequestData): IAPIResult<IRoleResponseData> {
  return request.patch(`/user?id=${id}`, data)
}

// 删除
function del(id: number): IAPIResult<string> {
  return request.delete(`/user?id=${id}`)
}

export default {
  find_page,
  find_one,
  create,
  update,
  del
}