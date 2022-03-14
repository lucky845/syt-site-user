import request from '@/utils/request'

const API = `/api/userinfo`

export default {
    login(userInfo) {
        return request({
            url: `${API}/login`,
            method: `post`,
            data: userInfo
        })
    },
    // 获取用户信息
    getUserInfo() {
        return request({
            url: `${API}/auth/getUserInfo`,
            method: `get`
        })
    },
    // 保存用户认证信息
    saveUserAuah(userAuah) {
        return request({
            url: `${API}/auth/userAuth`,
            method: 'post',
            data: userAuah
        })
    }
}