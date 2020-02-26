import Taro, { Component } from "@tarojs/taro";
//View 单独引入，React说明  组件的首字母一定要大写，小写被当成html标签
import { View } from "@tarojs/components";

/* 工具方法 */
import { request } from "../../utils/index.jsx";

class Index extends Component {
  componentDidMount() {
    try {
      let token = Taro.getStorageSync("token");
      console.log("id", this.$router.params.id);
      request({
        url: "/order/detail",
        data: {
          token,
          orderid: this.$router.params.id
        }
      }).then(res => {
        console.log("订单详情", res.data.data);
      });
    } catch (error) {}
  }
  render() {
    return (
      <view>
        确认订单页面
        <View>地址确认</View>
        <View>商品列表确认</View>
        <View>支付方式确认</View>
      </view>
    );
  }
}

export default Index;
