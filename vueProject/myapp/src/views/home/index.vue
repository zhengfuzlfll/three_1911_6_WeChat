<template>
  <div class="box">
    <header class="header">
      <ul>
        <li>
          <img src="https://res.darryring.com/wapimg/common/logo2.png" alt />
        </li>
        <li><span class="iconfont icon-sousuo"></span>请输入查找的产品</li>
        <li>消息</li>
      </ul>
    </header>
    <div class="content">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in bannerlist" :key="index">
        <img v-lazy="item" />
      </van-swipe-item>
</van-swipe>

    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload } from 'vant'
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
export default {
  data () {
    return {
      bannerlist: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  }
}
</script>

<style lang="scss">
//自带class
.van-swipe {
  max-height: 180px;
  img {
    width: 100%;
  }
}
</style>
