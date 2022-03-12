import request from '@/utils/request'

const API = `/api/userinfo/wx`

export default {
  getLoginParam() {
    return request({
      url: `${API}/getLoginParam`,
      method: `get`
    })
  }
}