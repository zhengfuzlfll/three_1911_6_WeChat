// pages/home/home.js
/* 获取页面的app 获取到全局的方法，变量等*/
const app=getApp();
console.log(app);
/*  引入请求数据的方法  */
import {request,toast} from "./../../utils/index.js"

/*Page 注册小程序中的一个页面 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* 轮播图数据  ---------------------------------------*/
    bannerlist: [],
    /* 产品列表数据------------- */
    prolist:[],
    /* 初始化页码 */
    pageCode:1, //默认加载了一次数据
    /* 返回顶部按钮的显示隐藏 */
    flage:false
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
   * 
   * 下拉刷新的实现
   * 1、在page.json开启"enablePullDownRefresh": true,
   * 2、在page.js中找到onPullDownRefresh函数（声明周期），请求第一页数据即可
   * 3、切记一定要重置页码  ************************
   */
  onPullDownRefresh: function () {
    console.log("刷新当前页面（下拉动作）onPullDownRefresh");
    /* 下拉刷新 */
    this.refreshData();
  },

  /**
   * 页面上拉触底事件的处理函数
   * 有滚动条才可以上拉,上拉加载（分页效果），每次上拉页码加 1
   * 
   * 上拉加载 》》》》》》》》
   * 1、在page.js文件找到onReachBottom函数
   * 2、 编写业务逻辑
   *    2.1 需要一个页码的变量----初始化数据中设置页码  
   */
  onReachBottom: function () {
    console.log("加载数据（上拉加载）onReachBottom");

    /* 上拉加载函数 */
    this.requestMoreData();
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
    // console.log('页面滚动')
    console.log("event",event)
    if(event.scrollTop>100){
      this.setData({
        flage:true
      })
    }else{
      this.setData({
        flage: false
      })
    }
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
  },

  /**
   * 下拉刷新函数,即请求的列表数据
   * 下拉刷新请求的是第一页的数据
   */
  refreshData(){
    request({
      url: "/pro",
      data: {
        pageCode:0,//页码默认为0
        limitNum:10 //每页显示数据，默认10
        
      }
    }).then((res) => {
      /* 接收到成功的数据 */
      console.log('列表页数据:', res)//建议使用箭头函数，避免this问题

      this.setData({
        prolist: res.data.data,
        pageCode:1  //一定要记得重置页码，否则每次上拉加载，会有没有更多数据的提示（上拉加载提示过后）
      })

    }).catch((err) => {
      /* 接收到失败的数据 */
      console.log('err', err)
    })
  },

  /* 请求更多数据 */
  requestMoreData(){
    request({
      url:"/pro",
      data:{
        /* Vue this.pageCode */
        /* 小程序  this.data.pageCode*/
        pageCode: this.data.pageCode,
        limitNum:10
      }
    }).then(res=>{
      console.log("下拉请求更多数据",res)
      /* 1、判断有没有数据
      
       */
      if(res.data.code ==='10000' ){
        /* 没有更多数据了 */
        /* 提示信息 */
        // wx.showToast({
        //   title: '没有更多数据了'
        // })
        console.log(11111111111111111)
        toast({title:"没有更多数据了"})
      }else{
        /* 2、如果有数据 ---之前的数据  追加上现在请求的数据，即数组合并*/
      /* vue   this.prolist =[...this.prolist,res.data.data]  */
      /* 小程序  修改数据的方式类似于React*/
      /* React  获取数据=》处理数据=》修改数据（状态） */
      /* 3、  每一次请求完成页面要完成自动加1 */
      let arr=this.data.prolist; //获取数据
      let num=this.data.pageCode;
      let list =  [...arr,...res.data.data] //处理数据
      num+=1;
      this.setData({ //修改数据
        prolist:list,
        pageCode:num
      })
      }
    })
  },

  /* 返回顶部的事件 */
  /* https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html */
  backtop(){
    wx.pageScrollTo({
      scrollTop: 0,//0表示滚动到顶部（滚动条的位置为0）
      duration: 300
    })
  }
})