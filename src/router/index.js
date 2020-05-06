/*
 * @Author: shetia
 * @Date: 2020-05-06 14:22:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-06 16:20:11
 * @Description: file content
 */
import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)
let routes = [
  {
    meta: {
      title: '主页'
    },
    path: '/',
    name: 'index',
    redirect: '/home',
    component: resolve => require(['@/pages/home.vue'], resolve)
  },
]
let coms = require.context('../pages', true, /\.vue$/)
coms.keys().forEach(path => {
  const reqCom = coms(path) // 获取每个组件
  const name = path.split('/')[1].split('.')[0] // 获取组件名称
  routes.push({
    meta: {
      title: name
    },
    path: `/${name}`,
    name,
    component: reqCom.default
  })
})
export default new Router({
  routes 
})
