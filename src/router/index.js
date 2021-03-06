/*
 * @Author: shetia
 * @Date: 2020-05-06 14:22:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-08 16:09:43
 * @Description: file content
 */
import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)
// 重写push方法, 避免跳到同一页面报错
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
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
// 动态引入
let coms = require.context('../pages', true, /\.vue$/)
coms.keys().forEach(path => {
  const reqCom = coms(path) // 获取每个组件
  const name = path.split('/')[1].split('.')[0] // 获取组件名称
  routes.push({
    meta: {
      title: reqCom.default.pageName || name
    },
    path: `/${name}`,
    name,
    component: reqCom.default
  })
})
export default new Router({
  mode: 'hash',
  routes 
})
