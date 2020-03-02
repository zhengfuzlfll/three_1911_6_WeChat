<template>
  <footer class="footer">
    <!-- 底部导航 -->
    <ul>
      <!-- router-link默认被渲染为a标签，使用tag标签生成需要的标签 -->
      <router-link to="/home" tag="li">
        <span class="iconfont icon-yemian-copy-copy-copy-copy"></span>
        <p>首页</p>
      </router-link>
      <router-link to="/kind" tag="li">
        <span class="iconfont icon-leimupinleifenleileibie"></span>
        <p>分类</p>
      </router-link>
      <router-link to="/cart" tag="li">
        <span class="iconfont icon-gouwuche"></span>
        <p>购物车</p>
      </router-link>
      <router-link to="/user" tag="li">
        <span class="iconfont icon-wodedangxuan"></span>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<style lang="scss">
@import "@/lib/reset.scss";
.footer {
  position: fixed;
  bottom: 0;
  ul {
    li {
      /* 声明式导航中，当被点击时 自动生成 router-link-exact-active router-link-active 样式*/
      &.router-link-exact-active.router-link-active {
        @include color(#f66);
      }
    }
  }
}
</style>
