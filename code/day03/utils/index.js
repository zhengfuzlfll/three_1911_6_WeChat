/* 接口地址   http://daxun.kuboy.top/apidoc 接口文档 */
const baseUrl ='http://daxun.kuboy.top/api';
/**
 * 封装数据请求的方法---------------
 *微信官方文档api说明 https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html

 *axios
 * 
 * 组件其实就是含有了视图的模块
 */

export function request(options){
  /* 解构赋值 */
  const {url,data}=options;

  /*加载动画 */
  wx.showLoading({
    title: '加载中',
  })


  /* 核心点  异步，A方法请求，B方法调用*/
  /* 解决方法：回调函数、promise 、generator+yield、async+await*/
  return new Promise((resolve,reject)=>{
    wx.request({
      url: baseUrl+ url,
      data:data || {},
      success:(res)=>{
        /* 请求成功，将数据通过resolve传递过去 */
        resolve(res);
      },
      fail:(err)=>{
        /* 请求失败  */
        reject(err);
      },
      complete:()=>{//请求成功或失败都走这里
        /* 请求完成，隐藏加载中的动画 */
        wx.hideLoading();
      }
    })
  })
}