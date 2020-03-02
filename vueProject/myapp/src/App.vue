<template>
  <!-- <div id="app"> -->
  <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  <router-view/>-->
  <!-- </div> -->
  <div class="container">
    <!--1、 提取出去 -->
    <!-- <div class="box">
      <header class="header"></header>
      <div class="content"></div>
    </div>-->

    <!--2、 底部导航 ===>提取为组件-->
    <!-- <footer class="footer">
      <ul>
        <li>
          <span class="iconfont icon-yemian-copy-copy-copy-copy"></span>
          <p>首页</p>
        </li>
        <li>
          <span class="iconfont icon-leimupinleifenleileibie"></span>
          <p>分类</p>
        </li>
        <li>
          <span class="iconfont icon-gouwuche"></span>
          <p>购物车</p>
        </li>
        <li>
          <span class="iconfont icon-wodedangxuan"></span>
          <p>我的</p>
        </li>
      </ul>
    </footer>-->

    <!--3、 配置多视图路由 -->
    <router-view></router-view>
    <!-- 底部 若需要则传递，然后出现底部导航 -->
    <router-view name="footer"></router-view>
  </div>
</template>

// <style lang="scss">
// // #app {
// //   font-family: Avenir, Helvetica, Arial, sans-serif;
// //   -webkit-font-smoothing: antialiased;
// //   -moz-osx-font-smoothing: grayscale;
// //   text-align: center;
// //   color: #2c3e50;
// // }

// // #nav {
// //   padding: 30px;

// //   a {
// //     font-weight: bold;
// //     color: #2c3e50;

// //     &.router-link-exact-active {
// //       color: #42b983;
// //     }
// //   }
// // }

// //导入重置样式的scss库
// @import "@/lib/reset.scss";
// html,
// body,
// .container {
//   @include rect(100%, 100%); //width:100%; height:100%;
// }
// .container {
//   @include flexbox(); //display:flex;的兼容写法
//   @include flex-direction(column); //flex-direction:column;的兼容写法
//   .box {
//     @include flex(); //flex:1;
//     @include rect(100%, auto);
//     @include flexbox(); //display:flex;的兼容写法
//     @include flex-direction(column); //flex-direction:column;的兼容写法
//     .header {
//       @include rect(100%, 0.44rem);
//       @include background-color(#f66);
//       //首页的头部
//       ul {
//         @include rect(100%, 100%);
//         @include flexbox();
//         @include color(#fff);
//         li {
//           @include flexbox();
//           &:nth-child(1),
//           &:nth-child(3) {
//             @include rect(50px, 100%);
//             @include flex-direction(column);
//             @include justify-content();
//             @include align-items();
//             img {
//               @include rect(50px, 100%);
//             }
//           }
//           &:nth-child(2) {
//             @include flex();
//             @include background-color(#fff);
//             @include color(#666);
//             @include margin(8px);
//             @include padding(5px 10px);
//             @include border-radius(10px);
//           }
//         }
//       }
//     }
//     .content {
//       @include flex(); //flex:1;
//       @include rect(100%, auto);
//       @include overflow(auto); // 产生滚动条 ++++++++++++++
//     }
//   }
//   .footer {
//     @include rect(100%, 0.5rem); //0.5rem=50px;
//     @include background-color(#efefef);
//     ul {
//       @include rect(100%, 100%); //0.5rem=50px;
//       @include flexbox();
//       li {
//         @include flex();
//         //内部元素水平垂直居中
//         @include flexbox();
//         @include flex-direction(column);
//         @include justify-content();
//         @include align-items();
//         span {
//           @include font-size(0.24rem);
//         }
//         p {
//           // @include color(#333);
//           @include font-size(0.18rem);
//           @include margin(-10px 0 0 0);
//         }
//         // &.router-link-exact-active.router-link-active {
//         //   @include color(#f66);
//         // }
//       }
//     }
//   }
// }
// </style>
<style lang="scss">
// 导入重置样式库的scss文件，其内部导入了别的scss文件
@import '@/lib/reset.scss';
// 如果企业有自己的scss库，使用企业自己的，没有可以选用这个
// 查看lib/classes.scss文件，内含各个函数的使用
// 1rem 100px
html, body, .container {
  @include rect(100%, 100%); // width: 100%; height: 100%;
}
.container {
  @include flexbox(); // display: flex;的兼容写法
  @include flex-direction(column); // flex-direction: column;的兼容写法
  .box {
    @include flex(); // flex: 1;的兼容写法
    @include rect(100%, auto);
    @include flexbox();
    @include flex-direction(column);
    .header {
      @include rect(100%, 0.44rem);
      @include background-color(#f66);
      ul {
        @include rect(100%, 100%);
        @include flexbox();
        @include color(#fff);
        li {
          @include flexbox();
          &:nth-child(1), &:nth-child(3) {
            @include rect(50px, 100%);
            @include flex-direction(column);
            @include justify-content();
            @include align-items();
          }
          &:nth-child(2) {
            @include flex();
            @include background-color(#fff);
            @include color(#666);
            @include margin(8px);
            @include padding(5px 10px);
            @include border-radius(10px);
          }
        }
      }
    }
    .content {
      @include flex();
      @include rect(100%, 15.066667rem); // 565px
      // @include overflow(auto); // 产生滚动条
      overflow: auto;
    }
  }
  .footer {
    @include rect(100%, 0.5rem);
    @include background-color(#efefef);
    ul {
      @include rect(100%, 100%);
      @include flexbox();
      li {
        @include flex();
        // 内部元素水平垂直居中
        @include flexbox();
        @include flex-direction(column);
        @include justify-content();
        @include align-items();
        span {
          @include font-size(0.24rem);
        }
        p {
          // @include color(#333);
          @include font-size(0.12rem);
          @include margin(-3px 0 0 0);
        }
      }
    }
  }
}
</style>
