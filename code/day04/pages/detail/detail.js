// pages/detail/detail.js
// import {request} from "/utils/index.js";
import {request} from "./../../utils/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proid:"", //加入购物车时需要（userid , proid , num）
    proname:"", //显示详情的名称   ---修改头部的标题文字 
    proimg:"",//展示图片
    detail:"", //产品的详情
    price:""  //产品的价格
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("详情页",options);
    /* 1、获取产品的唯一值 */
    const { proid } = options;
    /* 2、数据请求 -----先引入请求模块*/
    request({
      // url:"/pro/detail?proid="+proid,
      url: `/pro/detail?proid=${proid}`,
    }).then(res=>{
      /* 1、获取到数据 */
      console.log("详情页请求数据",res.data)
      /* 结构赋值 */
      // const { proname, proimg, detail, price } = res.data.data
      /* 解构赋值进阶版=》 */
      // const { data: { proname, proimg, detail, price} } = res.data
      const { data: { data: { proname, proimg, detail, price }} } = res
      /**
       * const {data}=res.data
       * const { proname, proimg, detail, price}=data
       */
      /* 2、修改状态 */
      this.setData({
        proid, //
        proname,
        proimg,
        detail,
        price
      })
    })
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
    /*减一为自己，减二为上一页  */
    console.log("详情页getCurrentPages",getCurrentPages()[getCurrentPages().length-1])
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