import request from '@/utils/request'

const API = `/api/userinfo`

export default {
    login(userInfo) {
        return request({
            url: `${API}/login`,
            method: `post`,
            data: userInfo
        })
    }
}