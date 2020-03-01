import request from './index.js'

/**
 * 封装首页轮播图
 */
export function getBannerlist (params) {
  const { url } = params
  return new Promise((resolve, reject) => {
    request({
      url,
      method: 'GET'
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装首页列表数据的请求
*/
