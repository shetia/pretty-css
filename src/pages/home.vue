<template>
  <div class="home">
    <div class="search">
      <el-input v-model="keyword" placeholder="请输入关键字搜索" @keyup.enter.native="search"/>
    </div>
    <div>
      <template  v-for="(item, index) in pages">
        <c-button 
          v-if="!item.isHide" 
          :key="index"  
          @click.native="goPage(item)" 
          :type="randomColor" 
          :dataText="item.name" 
          :mold="randomMod">
            {{ item.name }}
          </c-button>
      </template>
    </div>
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
      keyword: ''
    }
  },
  computed : {
    randomColor () {
      let arr = ['primary', 'danger', 'info', 'purple', 'blue', 'yellow']
      let len = arr.length
      let random = Math.floor(Math.random() * len) + 1
      let str = arr[random]
      return str
    },
    randomMod () {
      let arr = ['single', 'multiple', 'colours', 'flash']
      let len = arr.length
      let random = Math.floor(Math.random() * len) + 1
      let str = arr[random]
      return str
    }
  },
  watch: {
    keyword (n) {
      if(!n){
        this.pages = pages
      }
    }
  },
  methods: {
    goPage(item) {
      this.$router.push(item.path)
    },
    search () {
      let list = pages.filter(item => {
        return item.name.includes(this.keyword)
      })
      this.pages = list
    }
  },
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  background: #444;
  .search{
    position:fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
