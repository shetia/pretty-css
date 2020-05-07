<template>
  <div class="home">
    <template  v-for="(item, index) in pages">
      <c-button v-if="!item.isHide" :key="index"  @click.native="goPage(item)" :type="randomColor()" :dataText="item.name" :mold="randomMod()">{{ item.name }}</c-button>
    </template>
  </div>
</template>

<script>
let coms = require.context('../pages', true, /\.vue$/)
let pages = []
coms.keys().forEach((path) => {
  const reqCom = coms(path)
  const pathName = path.split('/')[1].split('.')[0]
  setTimeout(() => {
    pages.push({
      path: pathName,
      name: (reqCom.default && reqCom.default.pageName) || pathName,
      isHide: (reqCom.default && reqCom.default.isHide) || false,
    })
  })
})
export default {
  pageName: '首页',
  isHide: true,
  data() {
    return {
      pages: pages,
    }
  },
  methods: {
    goPage(item) {
      this.$router.push(item.path)
    },
    randomColor () {
      let arr = ['primary', 'danger', 'info', 'purple', 'blue', 'yellow']
      let len = arr.length
      let random = Math.floor(Math.random() * len) + 1
      let str = arr[random]
      return str
    },
    randomMod () {
      let arr = ['single', 'multiple', 'flash']
      let len = arr.length
      let random = Math.floor(Math.random() * len) + 1
      let str = arr[random]
      return str
    }
  },
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  background: #444;
}
</style>
