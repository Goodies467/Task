<template>
  <div class="login_container">
    <div class="header">
      <img src="../assets/img/login-logo.png" alt="logo" class="header_logo" />
      <span class="header_title">中国交建 · 统一监控管理平台</span>
      <p class="header_small">Visualization and Insight for Your Business and Environment</p>
    </div>
    <div class="login_box">
      <!-- 登陆表单 -->
      <a-form id="my_login_form" :form="form" class="login_form" @submit="handleSubmit">
        <!-- 账户名 -->
        <a-form-item>
          <a-input
            v-model="form_user"
            size="large"
            type="text"
            autocomplete="off"
            v-decorator="[
          'userName',
          { rules: [
          { required: true, message: '请输入账户名!' },
          {min: 4, message: '用户名最少4位'},
          ] },
        ]"
            placeholder="账户名"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <!-- 密码 -->
        <a-form-item>
          <a-input
            v-model="form_password"
            size="large"
            type="password"
            autocomplete="off"
            v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码!' }] },
        ]"
            placeholder="密码"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <!-- 按钮 -->
        <a-form-item style="margin-top:30px ">
          <a-button
            size="large"
            type="primary"
            html-type="submit"
            class="login_button"
            @click="login"
          >登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
      console.log(this.form_user)
      console.log(this.form_password)
      if (
        this.form_user == 'administrator' &&
        this.form_password == 'Admin@123'
      ) {
        alert('登录成功')
        this.$router.push('/home')
      } else {
        alert('登录失败')
      }
    },
    //拦截器3
    login(){
      //登录成功后的操作
      localStorage.setItem('user',this.form_user)//把用户信息保存到本地缓存
      let redirect=decodeURIComponent(this.$route.query.redirect || '/')//获得路由携带的参数
      this.$router.push({path:redirect})//路由跳转
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  background-image: url(../assets/img/bg-login.jpg);
  background-size: 100% 100%;
  padding-top: 100px;
}

.login_box {
  padding: 40px 40px 70px 40px;
  background: rgba(0, 0, 0, 0.5);
  width: 400px;
  height: 250px;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login_form {
  font-size: 14px;
}
.login_button {
  padding: 0 15px;
  font-size: 16px;
  height: 40px;
  width: 100%;
}
#my_login_form .login-form {
  max-width: 300px;
}
#my_login_form .login-form-forgot {
  float: right;
}
#my_login_form .login-form-button {
  width: 100%;
}
.header_logo {
  height: 44px;
  vertical-align: top;
  margin-right: 16px;
  border-style: none;
}
.header {
  line-height: 44px;
  text-align: center;
}
.header_title{
    font-size: 33px;
    color: #fff;
    font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
    font-weight: 600;
    position: relative;
    top: 2px;
}
.header_small{
    font-size: 12px;
    color: #fff;
    margin-top: 0;
    margin-bottom: 1em;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
</style>

