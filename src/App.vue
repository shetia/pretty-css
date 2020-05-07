<template>
  <div id="app">
    <el-container>
      <el-header>
        <i class="el-icon-s-home" @click="$router.push('/')"></i>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
#app{
  height: 100%;
}
.el-container{
  height: 100%;
  justify-content: space-between;
}
.el-header,
.el-footer {
  background-color: #333;
  text-align: left;
  color: #333;
  line-height: 60px;
  flex-shrink: 0;
  position: sticky;
  top: 0px;
}
.el-main {
  background-color: #fff;
  color: #666;
  text-align: center;
}
.el-button {
  margin-bottom: 12px !important;
}
i{
  font-size: 28px;
  color: #fff;
  cursor: pointer;
  transition: all 0.25s;
  &:hover{
    color:#00b9d1;
     box-shadow: 0 6px 3px -4px #00b9d1;
  }
}
.black-box{
  height: 100%;
  background: #333;
  padding: 12px;
  box-sizing: border-box;
  text-align: center;
}
</style>
