<template>
  <div  class='input-box'>
    <div class="form-input-material">
  <input
    class="form-control-material"
    type="email"
    name="email"
    id="email"
    placeholder=" "
    autocomplete="off"
  />
  <label for="email">Email</label>
</div>

  </div>
</template>

<script>
export default {
  pageName: '输入框',
  data () {
    return {

    }
  },
  mounted () {

  }
}
</script>

<style lang='scss' scoped>
.input-box{
  @include vertical-center;
}
</style>
