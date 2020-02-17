// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: "116.3974700000",//经度
    latitude: "39.9088230000",   //纬度
    markers:[{
      id: 1,//marker 点击事件回调会返回此 id。建议为每个 marker 设置上 number 类型 id，保证更新 marker 时有更好的性能。
      longitude:"116.3974700000",//经度
      latitude:"39.9088230000",   //纬度
      title:"我爱北京天安门，天安门上太阳升",//点击marker的提示信息
      iconPath:"/resources/map/flag.png",//图标，支持网络路径
      // rotate:10  //旋转
      width:40,
      height:40,
      /* 气泡 */
      callout:{
        content:"我爱北京天安门，天安门上太阳升",
        color:"#f66",//6位
        fontSize:14,
        borderRadius:10,
        borderWidth:5,
        borderColor:"white",
        bgColor:"white",
        padding:10,
        display: "BYCLICK",//'BYCLICK':点击显示; 'ALWAYS':常显
        textAlign:"center"
      }
    }],

    controls: [{
      id: 1,
      position: {
        left: 30,//获取设备的宽度、高度，获取设备的基本信息  =》app.js
        top: 30,
        width: 30,
        height: 30
      },
      iconPath: '/resources/map/position.png',
      clickable: true //控件默认不可以点击  =>添加事件即可bindcontroltap
    }]
  },
/**
 * 自定义事件
 */
  controlshandler(event){
    console.log('controlshandler',event)
    /* 如果是定位的小图标
     */
    if (event.controlId===1){
      /* 确认本人所在地的经纬度，调用微信的定位功能 */
      /* https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.stopLocationUpdate.html
      api/位置
       */
      wx.getLocation({
        success: (res)=> {
          console.log('微信定位',res)
          const { longitude, latitude} = res
          // this.setData({  //没有定位提示
          //   longitude, 
          //   latitude
          // })
          this.setData({
            longitude, 
            latitude,
            markers: [{
              id: 1,//marker 点击事件回调会返回此 id。建议为每个 marker 设置上 number 类型 id，保证更新 marker 时有更好的性能。
              longitude,
              latitude,
              iconPath: "/resources/map/flag.png",//图标，支持网络路径
              // rotate:10  //旋转
              width: 40,
              height: 40,
              /* 气泡 */
              callout: {
                content: "前端不倒，大勋哥陪你到老",
                color: "#f66",//6位
                fontSize: 14,
                borderRadius: 10,
                borderWidth: 5,
                borderColor: "white",
                bgColor: "white",
                padding: 10,
                display: "BYCLICK",//'BYCLICK':点击显示; 'ALWAYS':常显
                textAlign: "center"
              }
            }]
          })
        }
      })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})