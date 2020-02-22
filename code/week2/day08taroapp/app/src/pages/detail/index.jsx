import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { request } from "../../utils";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proid: "",
      proname: "详情",
      proimg: "",
      price: 0
    };
  }

  /* 接收参数并请求数据 */
  componentDidMount() {
    console.log("详情页接收参数", this.$router);
    const { proid } = this.$router.params;
    request({
      url: "/pro/detail",
      data: {
        proid
      }
    }).then(res => {
      console.log("详情页请求数据", res);
      const { proname, proimg, price } = res.data.data;
      this.setState({
        proid,
        proname,
        proimg,
        price
      });
      /* 顶部的提示信息 */
      Taro.setNavigationBarTitle({
        title: proname
      });
    });
  }

  /* 设置初始值 */
  render() {
    return (
      <View>
        {/* <Image src="../../resources/home.png"></Image>
        <View>名称</View>
        <View>价格</View> */}
        <Image src={this.state.proimg}></Image>
        <View>{this.state.proname}</View>
        <View>￥{this.state.price}</View>
      </View>
    );
  }
}

export default Index;
