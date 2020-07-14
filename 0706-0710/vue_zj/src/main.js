// 打包入口文件
import Vue from 'vue'
import App from './App'
import router from './router'

//引入ant-design
import Antd from 'ant-design-vue';//{ DatePicker }
import 'ant-design-vue/dist/antd.css';
//导入全局样式表
import './assets/css/global.css'


require('@/mock/mock.js')

Vue.use(router);
Vue.use(Antd);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
}).$mount('#app')

