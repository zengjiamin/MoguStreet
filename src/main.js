import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'

import VueLazyLoad from 'vue-lazyload'
import toast from './components/common/toast'

import FastClick from 'fastclick'
Vue.config.productionTip = false

//作为事件总线
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)

FastClick.attach(document.body)

Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/loading.png'),
  error:require('./assets/img/common/loading_err.jpg')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
