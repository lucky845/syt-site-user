import request from '@/utils/request'

const API = `/api/hosp/hospital`

export default {
  // 获取分页列表
  getPageList(page, limit, searchObj) {
    return request({
      url: `${API}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  // 根据医院名称获取医院列表
  getByHosname(hosname) {
    return request({
      url: `${API}/findByHosname/${hosname}`,
      method: 'get'
    })
  },
  // 医院预约挂号详情
  show(hoscode) {
    return request({
      url: `${API}/${hoscode}`,
      method: 'get'
    })
  },
  // 获取科室列表
  findDepartment(hoscode) {
    return request({
      url: `${API}/department/${hoscode}`,
      method: 'get'
    })
  },
  // 获取可预约排班数据
  getBookingScheduleRule(page, limit, hoscode, depcode) {
    return request({
      url: `${API}/auth/getBookingScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
      method: 'get'
    })
  },
  // 获取排班数据
  findScheduleList(hoscode, depcode, workDate) {
    return request({
      url: `${API}/auth/findScheduleList/${hoscode}/${depcode}/${workDate}`,
      method: 'get'
    })
  },
  // 获取排班详情
  getSchedule(id) {
    return request({
      url: `${API}/getSchedule/${id}`,
      method: 'get'
    })
  }
}