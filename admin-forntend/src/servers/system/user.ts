import request from '@/utils/request'
import { IUserRequestData, IUserResponseData } from '@/types'

// 查询-根据条件分页查询
function find_page(data: IPageRequest<IUserRequestData>): IAPIPageResult<IUserResponseData[]> {
  return request.get('/user/page', { params: data })
}

// 查询-根据主键查询
function find_one(data: IIdRequest): IAPIResult<IUserResponseData> {
  return request.get(`/user`, { params: data })
}

// 新增
function create(data: IUserRequestData): IAPIResult<IUserResponseData> {
  return request.post(`/user`, data)
}

// 修改
function update(id: number, data: IUserRequestData): IAPIResult<IUserResponseData> {
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