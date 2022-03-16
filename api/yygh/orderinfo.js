import request from '@/utils/request'

const API = `/api/order/orderInfo`

export default {
 submitOrder(scheduleId, patientId) {
  return request({
    url: `${API}/auth/submitOrder/${scheduleId}/${patientId}`,
    method: 'post'
  })
 }
}