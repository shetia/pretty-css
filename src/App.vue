<!--
 * @Descripttion:
 * @version:
 * @Author: shetia
 * @Date: 2020-05-19 20:10:43
 * @LastEditors: somebody
 * @LastEditTime: 2020-05-20 20:24:14
-->
<template>
  <div id="app">
    <el-container>
      <el-header>
        <i class="icon-home el-icon-s-home" @click="$router.push('/')"></i>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <!-- <el-footer></el-footer> -->
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss" scoped>
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
}
.el-header{
  top: 0px;
  box-shadow: 0px 4px 10px #fff;
}
.el-footer{
  bottom: 0px;
  box-shadow: 0px -4px 10px #fff;
}
.el-main {
  background-color: #fff;
  color: #666;
  text-align: center;
  overflow: auto;
}
.el-button {
  margin-bottom: 12px !important;
}
.icon-home{
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
  min-height: 100%;
  background: #333;
  padding: 12px;
  box-sizing: border-box;
  text-align: center;
}
</style>
