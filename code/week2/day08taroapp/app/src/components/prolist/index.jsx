import Taro, { Component } from "@tarojs/taro";
import { View, Image, Navigator } from "@tarojs/components";
import PropTypes from "prop-types"; // npm i prop-types
/* 样式 */
import "./index.scss";

class Index extends Component {
  render() {
    // Cannot read property 'map' of undefined
    let { prolist = [] } = this.props;
    if (!prolist) {
      return <View>还未获取到列表</View>;
    }
    /* 子组件接收数据 this.props */
    // console.log("子组件prolist", this.props.prolist);

    return (
      <View className="prolist">
        {this.props.prolist.map(item => {
          return (
            // <View className="proitem" key={item.proid}>
            //  <View className="itemimg">
            //    <Image className="img" src={item.proimg}></Image>
            //  </View>
            //  <View className="iteminfo">
            //    <View className="title">{item.proname}</View>
            //    <View className="title">
            //      销量{item.sales}/库存{item.stock}
            //    </View>
            //    <View className="price">￥{item.price}</View>
            //  </View>
            //</View>

            //编程式导航-----------------
            // <Navigator
            //   url={"/pages/detail/index?proid=" + item.proid}
            //   className="proitem"
            //   key={item.proid}
            // >
            //   <View className="itemimg">
            //     <Image className="img" src={item.proimg}></Image>
            //   </View>
            //   <View className="iteminfo">
            //     <View className="title">{item.proname}</View>
            //     <View className="title">
            //       销量{item.sales}/库存{item.stock}
            //     </View>
            //     <View className="price">￥{item.price}</View>
            //   </View>
            // </Navigator>

            // 编程式导航
            <View
              className="proitem"
              key={item.proid}
              //编程式跳转
              onClick={() => {
                Taro.navigateTo({
                  url: "/pages/detail/index?proid=" + item.proid
                });
              }}
            >
              <View className="itemimg">
                <Image className="img" src={item.proimg}></Image>
              </View>
              <View className="iteminfo">
                <View className="title">{item.proname}</View>
                <View className="title">
                  销量{item.sales}/库存{item.stock}
                </View>
                <View className="price">￥{item.price}</View>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

/* 数据类型校验 */
Index.propTypes = {
  prolist: PropTypes.array
};
export default Index;
