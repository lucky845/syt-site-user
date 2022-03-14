import request from '@/utils/request'

const API = `/api/userinfo/patient`

export default {
  //就诊人列表
  findList() {
    return request({
      url: `${API}/auth/findAll`,
      method: `get`
    })
  },
  //根据id查询就诊人信息
  getById(id) {
    return request({
      url: `${API}/auth/get/${id}`,
      method: 'get'
    })
  },
  //添加就诊人信息
  save(patient) {
    return request({
      url: `${API}/auth/save`,
      method: 'post',
      data: patient
    })
  },
  //修改就诊人信息
  updateById(patient) {
    return request({
      url: `${API}/auth/update`,
      method: 'put',
      data: patient
    })
  },
  //删除就诊人信息
  removeById(id) {
    return request({
      url: `${API}/auth/remove/${id}`,
      method: 'delete'
    })
  }
}