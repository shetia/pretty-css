import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import Element from 'element-ui'
import './style/index.css'
import 'element-ui/lib/theme-chalk/index.css';
import cUi from './components'
Vue.use(cUi)
Vue.use(Element)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
