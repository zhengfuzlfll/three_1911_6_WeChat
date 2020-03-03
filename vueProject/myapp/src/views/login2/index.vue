<template>
  <div class='box'>
    <header class='header'>登录</header>
    <div class='content'>
      <van-form @submit="onSubmit">
        <van-field
          v-model="tel"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Form } from 'vant'
Vue.use(Form)
export default {
  data () {
    return {
      password: '123456',
      tel: '18813007814'
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>

<style lang='scss' scoped>
form{
  width: 100%;
  van-field{
    width: 100rem;
    height: 50px;
  }
}
</style>
