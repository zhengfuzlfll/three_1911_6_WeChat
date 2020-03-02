import request from './index.js'

/**
 * 封装获取详情页数据
 */
// export function getDetailData (params) {
//   const { url, data } = params
//   request({
//     url,
//     params: data || {}
//   })
// }
export function getDetailData (params) {
  const { url, data } = params
  return request.get(
    url,
    { params: data || {} })
}
