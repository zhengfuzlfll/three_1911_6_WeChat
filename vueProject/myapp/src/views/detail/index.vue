<template>
  <!-- <div class="box">
    <header class="header">详情页</header>
    <div class="content">详情页</div>
  </div> -->
  <div class="container detail">
    <div class="box">
      <header class="header">详情</header>
      <div class="content">
        <img :src="proimg" alt="">
        <h1>{{ proname }}</h1>
        <div>{{'￥' + price }}</div>
        <div>{{ note }}</div>
      </div>
    </div>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import Vue from 'vue'
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant'
import { getDetailData } from '@/api/detail.js'
Vue.use(GoodsAction)
Vue.use(GoodsActionIcon)
Vue.use(GoodsActionButton)
export default {
  data () {
    return {
      proid: '',
      proimg: '',
      proname: '',
      price: '',
      note: ''
    }
  },
  methods: {
    // onClickIcon () {

    // },
    // onClickButton () {

    // }
  },
  mounted () {
    console.log('this', this.$route.params)
    const { proid } = this.$route.params
    getDetailData({
      url: '/pro/detail',
      data: {
        proid
      }
    }).then(res => {
      console.log('详情页数据', res)
      const { proid, proimg, proname, price, note } = res.data.data
      this.proid = proid
      this.proimg = proimg
      this.proname = proname
      this.price = price
      this.note = note
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
