import Taro, { Component } from "@tarojs/taro";
import { View, Image, Button } from "@tarojs/components";
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

  /* 加入购物车 方法 */
  addCart() {
    try {
      let userid = Taro.getStorageSync("userid");
      let token = Taro.getStorageSync("token");
      // console.log("userid:", userid);
      // console.log("token:", token);
      if (userid && token) {
        /* 获取到userid,token */
        request({
          url: "/cart/add",
          method: "POST",
          data: {
            userid,
            token,
            proid: this.state.proid,
            num: 1
          },
          // POST 请求   此处需要添加头信息，否则将出现添加购物车到登录的死循环
          header: { "content-type": "application/json; charset=utf-8" }
        }).then(res => {
          console.log("加入购物车:", res);
          if (res.data.code === "10119") {
            Taro.showToast({
              //token无效
              title: "登录失效，请重新登录",
              icon: "none",
              duration: 3000
            });
            /* 跳转至登录页面 */
            Taro.navigateTo({
              url: "/pages/login/index"
            });
          } else {
            Taro.showToast({
              //token无效
              title: "加入购物车成功",
              icon: "none",
              duration: 3000
            });
          }
        });
      } else {
        /* 未登录*/
        Taro.showToast({
          title: "您还未登录，请先登录",
          icon: "none",
          duration: 3000
        });
        /* 跳转至登录页面 */
        Taro.navigateTo({
          url: "/pages/login/index"
        });
      }
    } catch (error) {
      console.log("error  加入购物车错误", error);
    }
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
        {/* +++++++++++++++++ */}
        <Button type="primary" onClick={this.addCart.bind(this)}>
          加入购物车
        </Button>
      </View>
    );
  }
}

export default Index;
