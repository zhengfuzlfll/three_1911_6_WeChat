// components/prolist/prolist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /* 2、接收数据 =》*/
    prolist:Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toDetail(event){
      console.log("去详情页",event);
      // const { proid } = event.currentTarget.dataset.proid
      const { currentTarget: { dataset: { proid}} } = event
      /* 编程式导航 */
      /* 
      如果跳转的是tab页面，可以使用switchTab  或者reLaunch
      如果跳转的是非tab页面，可以使用redirectTo 或 navigateBack 或                reLaunch
       */

      wx.navigateTo({
        url: `/pages/detail/detail?proid=${proid}`,
      })

    // wx.redirectTo({//左上角的返回没有了
    //   url: `/pages/detail/detail?proid=${proid}`,
    // })

    // wx.reLaunch({//左上角的返回没有了
    //   url: `/pages/detail/detail?proid=${proid}`,
    // })
    }
  }
})
