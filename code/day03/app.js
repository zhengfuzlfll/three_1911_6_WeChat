//app.js
/* 
  注册小程序，仅能在app.js即全局的逻辑文件中调用，且只能调用一次
  生命周期钩子函数，不要写成 箭头函数-----------
不使用this时，可以使用箭头函数
 */

App({
  /* 1、监听小程序的初始化 */
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  /* 2、监听小程序启动或切前台 */
  onShow(){
    console.log("show")
  },
  /* 3、监听小程序切后台 */
  onHide(){
    console.log("hide")
  },
  /* 4、错误监听函数 */
  onError(){
    console.log("error")
  },
  /* 5、404 */
  onPageNotFound(){
    console.log("404")
  },

  /* 自定义的全局的变量，可以是任何的数据类型 --状态管理器*/
  globalData: {
    userInfo: null
  },
  /* 全局自定义函数 */
  fn(){
    console.log("全局自定义函数")
  }
})