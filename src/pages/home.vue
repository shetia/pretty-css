<template>
  <div>
    <template  v-for="(item, index) in pages">
      <el-button type="primary" v-if="!item.isHide" :key="index" @click="goPage(item)">{{ item.name }}</el-button>
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
  },
}
</script>

<style lang="scss" scoped></style>
