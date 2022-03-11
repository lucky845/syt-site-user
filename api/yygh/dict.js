import request from '@/utils/request'

const API = '/admin/cmn/dict'

export default {
  // 根据dictCode获取下级节点
  findByDictCode(dictCode) {
    return request({
      url: `${API}/findByDictCode/${dictCode}`,
      method: 'get'
    })
  },
  // 根据数据id查询子数据列表
  findByParentId(parentId) {
    return request({
      url: `${API}/childList/${parentId}`,
      method: 'get'
    })
  }
}