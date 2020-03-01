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
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in bannerlist" :key="index">
          <img v-lazy="item" />
        </van-swipe-item>
      </van-swipe>
      <!-- 列表商品 -->
      <van-card
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload, Card } from 'vant'
import { getBannerlist } from '@/api/home.js'
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Card)
export default {
  data () {
    return {
      bannerlist: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },
  mounted () {
    getBannerlist({
      url: '/pro/banner'
    }).then(res => {
      console.log('首页-轮播图', res)
      // res.data.map(item => {
      //   item += 'http://daxun.kuboy.top'
      //   return ''
      // })
      /* 对于复合类型的变量，变量名不指向数据，
      而是指向数据所在的地址。const命令只是保证变
      量名指向的地址不变，并不保证该地址的数据不变，
      所以将一个对象声明为常量必须非常小心。 */
      const arr = [] // 引用类型，地址没有发生改变，用const
      res.data.map(item => {
        arr.push('http://daxun.kuboy.top' + item)
        return ''
      })
      this.bannerlist = arr
      console.log('this.bannerlist', this.bannerlist)
    })
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
