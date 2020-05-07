import Vue from 'vue'

let coms = require.context('./', true, /\.vue$/)
const install = () => {
  coms.keys().forEach(path => {
    let instance = coms(path)
    let name = path.split('/')[1].split('.')[0]
    Vue.component(name, instance.default || instance)
  })
}

export default {
  install
}
