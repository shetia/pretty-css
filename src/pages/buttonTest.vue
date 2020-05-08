<template>
  <div  class="black-box">
    <template v-for="(item, index) in list">
      <c-button :key="index" :type="randomColor()"  :mold="item">按钮</c-button>
    </template>
  </div>
</template>

<script>
export default {
  pageName: '按钮',
  data () {
    return {
      list: ['single', 'multiple', 'colours', 'flash', 'roll', 'snake', 'particle']
    }
  },
  methods: {
    randomColor () {
      let arr = ['primary', 'danger', 'info', 'purple', 'blue', 'yellow', 'pink']
      let len = arr.length
      let random = Math.floor(Math.random() * len) + 1
      let str = arr[random]
      return str
    },
  }
}
</script>

<style lang='scss' scoped>

</style>
