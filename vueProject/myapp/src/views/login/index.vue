<template>
  <div class='box'>
    <header class='header'>登录</header>
    <div class='content'>
      <van-form >
        <van-field
          v-model="tel"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
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
import { Form, Field, Button } from 'vant'
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
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
</style>
