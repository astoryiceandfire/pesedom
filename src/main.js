// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueLazyload from 'vue-lazyload'
// import { Message } from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
// Vue.component(Message.name, Message);

// Vue.prototype.$message = Message;
Vue.use(VueLazyload)
Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
 render: h => h(App)
})
