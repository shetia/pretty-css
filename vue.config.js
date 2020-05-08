module.exports = {
  //配置全局样式变量
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/style/mixin.scss";`
      }
    }
  }
}
