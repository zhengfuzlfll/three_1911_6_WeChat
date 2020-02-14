// pages/home/home.js
/* 获取页面的app 获取到全局的方法，变量等*/
const app=getApp();
console.log(app);
/*  引入请求数据的方法  */
import {request} from "./../../utils/index.js"

/*Page 注册小程序中的一个页面 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* 轮播图数据  ---------------------------------------*/
    bannerlist: [],
    /* 产品列表数据------------- */
    prolist:[]
  },

  /**
   * 生命周期函数--监听页面加载       vue中的 mounted
   * ------------请求数据
   */
  onLoad: function (options) {
    console.log("onLoad");
    /* 请求轮播图数据>>>>>>>>>>>> -------------------------*/
    // request({
    //   url:"/pro/banner",
    //   data:{}
    // }).then(res=>{
    //   console.log("轮播图数据",res);
    //   /* vue 中  this.bannerlist=res.data.data */
    //   /* React 中   this.setState({bannerlist:res.data.data})*/
    //   /* 小程序 */
    //   this.setData({
    //     bannerlist:res.data.data
    //   })
    // })
    this.getBannerData();

    this.getProlistData();



    /* 数据请求 ---------------------------------------------------*/
    /* promise写法   成功后.then   若失败则.catch*/

    /* 请求列表数据>>>>>>>>>>>>> */
    // request({
    //   url:"/pro",
    //   data:{}
    // }).then((res)=>{
    //   /* 接收到成功的数据 */
    //   console.log('列表页数据:',res)//建议使用箭头函数，避免this问题

    //   this.setData({
    //     prolist:res.data.data
    //   })

    // }).catch((err)=>{
    //   /* 接收到失败的数据 */
    //   console.log('err',err)
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
    /* 获取当前页面栈>>>>>不常用 */
    console.log('getCurrentPages', getCurrentPages())
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   * 重新请求了第一页的数据 
   */
  onPullDownRefresh: function () {
    console.log("刷新当前页面（下拉动作）onPullDownRefresh  ");
  },

  /**
   * 页面上拉触底事件的处理函数
   * 有滚动条才可以上拉,上拉加载（分页效果），每次上拉页码加 1
   */
  onReachBottom: function () {
    console.log("加载数据（上拉加载）onReachBottom");
  },

  /**
   * 用户点击右上角分享
   * 分享出现的遮罩层就相当于切了后台
   * 根据提供的api修改分享的内容
   */
  onShareAppMessage: function () {
    console.log("点击分享")
  },

  /**
   * 页面滚动触发事件的处理函数
   * 函数防抖节流
   * 默认的参数是滚动条距离顶部的距离
   * -------滚动到某一个位置，出现返回顶部按钮
   */
  onPageScroll(event){
    // console.log('页面滚动~')
    console.log("event",event)
  },

  /**
   * 横屏竖屏
   */
  onResize(){
    console.log("onResize")
  },

  /**
   * 当前是 tab 页面时，点击 tab 时触发
   * 就是全局配置的底部选项卡
   */
  onTabItemTap(){
    console.log("首页")
  },

  /**
   * 自定义数据及函数，在页面当中使用this去访问
   * 事件-自定义的函数
   */
  testfn(){
    console.log("自定义函数")
  },
  /* 请求轮播图方法 */
  getBannerData(){
    request({
      url: "/pro/banner",
      data: {}
    }).then(res => {
      console.log("轮播图数据", res);
      /* vue 中  this.bannerlist=res.data.data */
      /* React 中   this.setState({bannerlist:res.data.data})*/
      /* 小程序 */
      this.setData({
        bannerlist: res.data.data
      })
    })
  },
  /* 请求列表数据 */
  getProlistData(){
    request({
      url: "/pro",
      data: {}
    }).then((res) => {
      /* 接收到成功的数据 */
      console.log('列表页数据:', res)//建议使用箭头函数，避免this问题

      this.setData({
        prolist: res.data.data
      })

    }).catch((err) => {
      /* 接收到失败的数据 */
      console.log('err', err)
    })
  }
})