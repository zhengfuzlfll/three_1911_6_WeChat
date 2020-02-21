import Taro, { Component } from "@tarojs/taro";
//View 单独引入，React说明  组件的首字母一定要大写，小写被当成html标签
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
/* 引入工具方法 */
import { request } from "../../utils/index.jsx";

/* 引用样式 */
import "./index.scss"; //生成/home/index.wxss文件

class Index extends Component {
  //生成一个home/index.json文件-----配置页面
  config = {
    navigationBarTitleText: "taro-首页",
    enablePullDownRefresh: true, //下拉刷新
    backgroundColor: "#efefef" //背景颜色
  };
  /* constructor 写了必写 super ，要不就不写 constructor，super事关 this指向的问题   ---  es6的构造函数中的机制
   ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到
   this上面（Parent.apply(this)）。ES6 的继承机制完全不同，实质是先将父类
   实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用
   子类的构造函数修改this。
   */
  constructor(props) {
    super(props);
    /* 1设置状态------- */
    /* 2、请求数据---封装工具方法src/utils/ */
    this.state = {
      bannerlist: [] //轮播图
    };
  }

  /* 3、请求数据 */

  componentDidMount() {
    //轮播图
    request({
      url: "/pro/banner"
    }).then(res => {
      console.log("轮播图数据", res.data);
      this.setState({
        bannerlist: res.data.data
      });
    });
    //列表数据
  }

  render() {
    // return <view>首页</view>;
    return (
      <Swiper indicatorDots autoplay circular>
        {this.state.bannerlist.map((item, index) => (
          <SwiperItem key={index}>
            <Image
              className="bannerimg"
              src={"http://daxun.kuboy.top" + item}
              style={{ width: "100%" }}
              mode="aspectFit"
            ></Image>
          </SwiperItem>
        ))}
        {/* <SwiperItem>
          <Image src="../../resources/home.png"></Image>
        </SwiperItem>
        <SwiperItem>
          <Image src="../../resources/home.png"></Image>
        </SwiperItem> */}
      </Swiper>
    );
  }
}

export default Index;
