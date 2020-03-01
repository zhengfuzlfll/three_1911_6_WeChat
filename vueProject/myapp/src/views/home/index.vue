<template>
  <div class="box">
    <header class="header">
      <ul>
        <li>
          <!-- <img src="https://res.darryring.com/wapimg/common/logo2.png" alt /> -->
          logo
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
      <!-- 添加下拉刷新 -->
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <!-- 下拉加载 -->
        <van-list   v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-card
            v-for = "(item, index) in prolist"
            :key = "index"
            :price="item.price"
            :desc="item.note"
            :title="item.proname"
            :thumb="item.proimg"
          />
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload, Card, PullRefresh, Toast, List } from 'vant'
import { getBannerlist, getProlist } from '@/api/home.js'
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Card)
Vue.use(PullRefresh)
Vue.use(Toast)
Vue.use(List)
export default {
  data () {
    return {
      bannerlist: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ],
      prolist: [],
      isLoading: false, // true表示现在正在下拉刷新状态中
      pageCode: 1,
      finished: false, // true表示没有更多数据了
      loading: false // true表示正在上拉加载下一页数据
    }
  },
  mounted () {
    /* 轮播图 */
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
      // res.data.map(item => {
      //   arr.push('http://daxun.kuboy.top' + item)
      //   return ''
      // })
      res.data.data.map(item => {
        arr.push('http://daxun.kuboy.top' + item)
        return ''
      })
      this.bannerlist = arr
      console.log('this.bannerlist', this.bannerlist)
    })

    /* 列表数据 */
    getProlist({
      url: '/pro'
    }).then(res => {
      console.log('列表页', res.data)
      // this.prolist = res.data
      this.prolist = res.data.data
    })
  },
  methods: {
    // 下拉刷新
    onRefresh () {
      console.log('下拉刷新')
      this.isLoading = true // 正在加载
      getProlist({
        url: '/pro'
      }).then(res => {
        console.log('列表页', res.data)
        // this.prolist = res.data
        this.prolist = res.data.data
        this.pageCode = 1 // 页码重置
        this.isLoading = false // 下拉刷新完毕
        this.finished = false // 表示可以继续上拉finished显示没有数据了
        Toast('刷新完成')
      })
    },
    // 下拉加载
    onLoad () {
      console.log('下拉加载')
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
