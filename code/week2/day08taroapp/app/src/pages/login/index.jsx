import Taro, { Component } from "@tarojs/taro";
import { View, Form } from "@tarojs/components";
/* 使用Taro-UI 组件 */
import { AtInput, AtForm, AtButton } from "taro-ui";
/* 请求的方法 */
import { request } from "../../utils/index.jsx";

/* 引入样式 */
import "./index.scss";

class Index extends Component {
  //Component  不要写错单词
  constructor(props) {
    super(props);
    this.state = {
      tel: "18813007814",
      password: "123456",
      telflag: false,
      passwordflag: false
    };
  }

  render() {
    return (
      //<View>登录</View>
      <AtForm>
        <AtInput
          name="tel"
          title="手机号码"
          type="test"
          placeholder="请输入手机号码"
          value={this.state.tel}
          //出现错误
          error={this.state.telflag}
          //变化即得到变化后的值
          onChange={value => {
            console.log(value);
            let telReg = /^1[3-9]\d{9}$/;
            // console.log(telReg.test(18813007814));
            console.log(telReg.test(value));
            let telflag = this.state.telflag;
            if (!telReg.test(value)) {
              // 不符合规则，true
              telflag = true;
            } else {
              telflag = false;
            }
            this.setState({
              tel: value,
              telflag
            });
          }}
        />
        <AtInput
          name="password"
          title="密码"
          type="password"
          placeholder="请输入密码"
          value={this.state.password}
          //出现错误
          error={this.state.passwordflag}
          //变化即得到变化后的值
          onChange={value => {
            console.log(value);
            let passwordReg = /^[a-zA-Z0-9]{6,20}$/;
            // console.log(telReg.test(123456));
            console.log(passwordReg.test(value));
            let passwordflag = this.state.passwordflag;
            if (!passwordReg.test(value)) {
              // 不符合规则，true
              passwordflag = true;
            } else {
              passwordflag = false;
            }
            this.setState({
              password: value,
              passwordflag
            });
          }}
        />
        {/* <AtButton type="primary">登录</AtButton> */}
        <AtButton
          //是否可点击--------------
          disabled={this.state.telflag || this.state.passwordflag}
          //类型
          type={
            this.state.telflag && this.state.passwordflag
              ? "secondary"
              : "primary"
          }
          size="normal"
          //点击登录
          onClick={() => {
            // console.log("登录");
            request({
              url: "/users/login",
              method: "POST",
              data: {
                tel: this.state.tel,
                password: this.state.password
              },
              // 如果实际注册现实未注册，加上头信息
              header: { "content-type": "application/json; charset=utf-8" }
            }).then(res => {
              console.log("登录", res);
              if (res.data.code === "10006") {
                Taro.showToast({
                  title: "该用户未注册，请先注册",
                  icon: "none",
                  duration: 3000
                });
              } else if (res.data.code === "10007") {
                Taro.showToast({
                  title: "密码错误",
                  icon: "none",
                  duration: 3000
                });
              } else {
                Taro.showToast({
                  title: "登录成功",
                  icon: "none",
                  duration: 3000
                });

                try {
                  //登录成功，存入用户id,存入token，返回上一页
                  Taro.setStorageSync("userid", res.data.data.userid);
                  Taro.setStorageSync("token", res.data.data.token);
                  Taro.navigateBack();
                } catch (err) {
                  Taro.showToast({
                    title: err,
                    icon: "none",
                    duration: 3000
                  });
                }
              }
            });
          }}
        >
          登录
        </AtButton>
      </AtForm>
    );
  }
}

export default Index;
