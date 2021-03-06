import Taro, { Component } from "@tarojs/taro";
//View 单独引入，React说明  组件的首字母一定要大写，小写被当成html标签
import { View, Image, Text } from "@tarojs/components";

/* 工具方法 */
import { request } from "../../utils/index.jsx";

/* 样式 */
import "./index.scss";

class Index extends Component {
  config = {
    navigationBarTitleText: "taro-购物车"
  };

  /* 初始值 */
  constructor(props) {
    super(props);
    this.state = {
      cartlist: [], //购物车初始数据
      isTrue: false, //控制是否显示  空空如也  的信息
      totalNum: 0, //购物车总数量
      totalPrice: 0 //购物车总价格
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
            this.setState(
              {
                isTrue: false,
                cartlist: res.data.data
              }, //在setState成功的回调里再计算总数、总价
              () => {
                /* 事件  计算总价及总数 */
                this.count();
              }
            );

            //1、 /* 全选反选 */
            // res.data.data.map(itm => {
            //   itm.flag = true;
            // });
            // /* 事件  计算总价及总数 */
            // this.count();

            /* 2、 */
            /* 全选反选 */
            res.data.data.map(itm => {
              itm.flag = true;
            });
          }
        });
      } else {
        Taro.showToast({
          title: "您尚未登录，请先登录",
          icon: "none",
          duration: 3000
        });

        /* 跳转登录页 */
        Taro.navigateTo({
          url: "/pages/login/index"
        });
      }
    } catch (error) {
      Taro.showToast({
        title: "出错。。",
        icon: "none",
        duration: 3000
      });
    }
  }

  /* 事件 */
  /* 计算总价及总数 */
  count() {
    // console.log(2);
    /* 获取到this，包含cartlist */
    // console.log("计算总价", this);
    // console.log("购物车列表", this.state);  //获取到空数组
    console.log("2购物车列表2", this.state.cartlist);
    let num = 0;
    let price = 0;
    this.state.cartlist.map(item3 => {
      num += item3.num; //计算总数量
      price += item3.num * item3.price; //计算总价
    });
    /*  */
    this.setState({
      totalNum: num,
      totalPrice: price
    });
  }

  render() {
    return (
      <View>
        {this.state.isTrue ? (
          <View>购物车空空如也</View>
        ) : (
          <View className="cartlist">
            {this.state.cartlist.map((item, index) => {
              return (
                <View key={item.proid} className="cartitem">
                  <Image className="cartimg" src={item.proimg}></Image>
                  <View className="cartdetail">
                    <View className="cartname">{item.proname}</View>
                    <View className="cartprice">￥{item.price}</View>
                  </View>
                  <View className="cartnum">
                    <Text
                      className="carttext"
                      onClick={() => {
                        let num = item.num > 1 ? item.num - 1 : 1;
                        if (item.num === num) {
                          Taro.showToast({
                            title: "就剩1个了",
                            icon: "none",
                            duration: 3000
                          });
                          //不继续往下执行
                          return;
                        }
                        let cartid = item.cartid;
                        try {
                          let token = Taro.getStorageSync("token");
                          request({
                            url: "/cart/update",
                            data: {
                              num,
                              cartid,
                              token
                            }
                          }).then(res => {
                            console.log("数量减少", res);
                            if (res.data.code === "10119") {
                              //未登录
                              Taro.showToast({
                                title: "还未登录，请先登录",
                                icon: "none",
                                duration: 3000
                              });
                              Taro.navigateTo({
                                url: "/pages//login/index"
                              });
                            } else {
                              //已登录
                              Taro.showToast({
                                title: "商品数量-1",
                                icon: "none",
                                duration: 3000
                              });
                              let list = this.state.cartlist;
                              list[index].num = num; //--------------------------
                              this.setState(
                                {
                                  cartlist: list
                                },
                                () => {
                                  //重新计算数量及总价
                                  this.count();
                                }
                              );
                            }
                          });
                        } catch (error) {}
                      }}
                    >
                      -
                    </Text>
                    {item.num}
                    <Text
                      className="carttext"
                      onClick={() => {
                        let num = item.num + 1;
                        let cartid = item.cartid;
                        try {
                          let token = Taro.getStorageSync("token");
                          request({
                            url: "/cart/update",
                            data: {
                              num,
                              cartid,
                              token
                            }
                          }).then(res => {
                            console.log("数量增加", res);
                            if (res.data.code === "10119") {
                              //未登录
                              Taro.showToast({
                                title: "还未登录，请先登录",
                                icon: "none",
                                duration: 3000
                              });
                              Taro.navigateTo({
                                url: "/pages//login/index"
                              });
                            } else {
                              //已登录
                              Taro.showToast({
                                title: "商品数量+1",
                                icon: "none",
                                duration: 3000
                              });
                              let list = this.state.cartlist;
                              list[index].num = num; //--------------------------
                              this.setState(
                                {
                                  cartlist: list
                                },
                                () => {
                                  //重新计算数量及总价
                                  this.count();
                                }
                              );
                            }
                          });
                        } catch (error) {}
                      }}
                    >
                      +
                    </Text>
                  </View>
                </View>
              );
            })}
            <View>总数：{this.state.totalNum}</View>
            <View>总价:￥{this.state.totalPrice}</View>
          </View>
        )}
      </View>
    );
  }
}

export default Index;
