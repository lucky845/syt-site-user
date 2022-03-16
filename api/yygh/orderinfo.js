import request from '@/utils/request'

const API = `/api/order/orderInfo`

export default {
  // 提交预约,生成订单
 submitOrder(scheduleId, patientId) {
  return request({
    url: `${API}/auth/submitOrder/${scheduleId}/${patientId}`,
    method: 'post'
  })
 }
}