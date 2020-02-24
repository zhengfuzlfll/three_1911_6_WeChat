import Taro, { Component } from "@tarojs/taro";
//View 单独引入，React说明  组件的首字母一定要大写，小写被当成html标签
import { View, Image } from "@tarojs/components";

/* 工具方法 */
import { request } from "../../utils/index.jsx";

class Index extends Component {
  config = {
    navigationBarTitleText: "taro-购物车"
  };

  /* 初始值 */
  constructor(props) {
    super(props);
    this.state = {
      cartlist: [], //购物车初始数据
      isTrue: false //控制是否显示  空空如也  的信息
    };
  }

  /* 钩子函数 */
  /* 请求数据 */
  componentDidMount() {
    try {
      let userid = Taro.getStorageSync("userid");
      let token = Taro.getStorageSync("token");
      if (userid && token) {
        request({
          url: "/cart",
          data: {
            userid,
            token
          }
        }).then(res => {
          console.log("购物车数据", res);
          if (res.data.code === "10119") {
            Taro.showToast({
              title: "还未登录，请先登录",
              icon: "none",
              duration: 3000
            });
            /* 跳转登录页 */
            Taro.navigateTo({
              url: "/pages/login/index"
            });
          } else if (res.data.code === "10012") {
            Taro.showToast({
              title: "购物车空空如也，请加购",
              icon: "none",
              duration: 3000
            });
            /* 显示空空如也的信息 */
            this.setState({
              isTrue: true
            });
          } else {
            /* 购物车有数据 */
            this.setState({
              isTrue: false,
              cartlist: res.data.data
            });
          }
        });
      }
    } catch (error) {}
  }

  render() {
    return (
      <View>
        {this.state.isTrue ? (
          <View>购物车空空如也</View>
        ) : (
          <View>
            {this.state.cartlist.map(item => {
              return (
                <View key={item.proid} className="cartitem">
                  <Image className="cartimg" src={item.proimg}></Image>
                  <View className="cartdetail">
                    <View className="cartname">{item.proname}</View>
                    <View className="cartprice">{item.price}</View>
                  </View>
                </View>
              );
            })}
          </View>
        )}
      </View>
    );
  }
}

export default Index;
