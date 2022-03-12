import request from '@/utils/request'

const API = `/api/sms`

export default {
    sendCode(mobile) {
        return request({
            url: `${API}/send/${mobile}`,
            method: `get`
        })
    }
}