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

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

//导入重置样式的scss库
@import "@/lib/reset.scss";
html,
body,
.container {
  @include rect(100%, 100%); //width:100%; height:100%;
}
.container {
  @include flexbox(); //display:flex;的兼容写法
  @include flex-direction(column); //flex-direction:column;的兼容写法
  .box {
    @include flex(); //flex:1;
    @include rect(100%, auto);
    @include flexbox(); //display:flex;的兼容写法
    @include flex-direction(column); //flex-direction:column;的兼容写法
    .header {
      @include rect(100%, 0.44rem);
      @include background-color(#f66);
    }
    .content {
      @include flex(); //flex:1;
      @include rect(100%, auto);
    }
  }
  .footer {
    @include rect(100%, 0.5rem); //0.5rem=50px;
    @include background-color(#efefef);
    ul {
      @include rect(100%, 100%); //0.5rem=50px;
      @include flexbox();
      li {
        @include flex();
        //内部元素水平垂直居中
        @include flexbox();
        @include flex-direction(column);
        @include justify-content();
        @include align-items();
        span {
          @include font-size(0.24rem);
        }
        p {
          // @include color(#333);
          @include font-size(0.18rem);
          @include margin(-10px 0 0 0);
        }
        // &.router-link-exact-active.router-link-active {
        //   @include color(#f66);
        // }
      }
    }
  }
}
</style>
