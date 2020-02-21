import Taro, { Component } from "@tarojs/taro";
//View 单独引入，React说明  组件的首字母一定要大写，小写被当成html标签
import { View } from "@tarojs/components";

class Index extends Component {
  config = {
    navigationBarTitleText: "taro-购物车"
  };
  render() {
    return <view>购物车</view>;
  }
}

export default Index;
