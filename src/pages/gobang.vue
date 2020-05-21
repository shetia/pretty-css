<template>
  <div  class='black-box'>
    <div class="chessboard">
      <div class="gird-box chessboard-top">
        <div class="gird-row" v-for="(item, index) in list" :key="index">
          <div class="gird-column" :class="{'w': subItem && subItem % 2 == 0, 'b': subItem && subItem % 2 == 1}" v-for="(subItem, subIndex) in item" :key="subIndex" @click="cellHandler(index, subIndex)">
            
            <span class="text" v-if="subItem">{{subItem}}</span>
          </div>
        </div>
      </div>
      <div class="gird-box chessboard-bottom">
        <div class="gird-row" v-for="(item, index) in list1" :key="index">
          <div class="gird-column" v-for="(subItem, subIndex) in item" :key="subIndex" >
          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  pageName: '五子棋',
  data () {
    return {
      list: [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      ],
      list1: [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      ],
      num: 0
    }
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    cellHandler (x, y) {
      if (this.checkWin(this.list)) {
        this.$message.error('游戏结束')
        return 
      }
      this.num++
      this.$set(this.list[x], y, this.num)
      console.log()
    },
    // 判断是否赢了
    checkWin (list) {
      // console.log(list)
      let total = 0
      // 水平
      for(let i = 0; i < 15; i++){  // 行
        for(let j = 0; j < 11; j++){ // 列
          total = 0
          let k = j
          let who = list[i][k] && list[i][k] % 2
          while(list[i][k] && list[i][k] % 2 === who && k - j < 5){ // 检查五个
            total++
            k++
          }
          if(total>=5) return true
        }
      }
      // 垂直
      for(let i = 0; i < 15; i++){  // 列
        for(let j = 0; j < 11; j++){ // 行
          total = 0
          let k = j
          let who = list[k][i] && list[k][i] % 2
          while(list[k][i] && list[k][i] % 2 === who && k - j < 5){ // 检查五个
            total++
            k++
          }
          if(total>=5) return true
        }
      }
      // 左斜
      for(let i = 0; i < 11; i++){  // 列
        for(let j = 0; j < 11; j++){ // 行
          total = 0
          let k = 0
          let who = list[i + k][j + k] && list[i + k][j + k] % 2
          while(list[i + k][j + k] && list[i + k][j + k] % 2 === who && k < 5){ // 检查五个
            total++
            k++
          }
          if(total>=5) return true
        }
      }
      // 右斜
      for(let i = 4; i < 15; i++){  // 列
        for(let j = 0; j < 11; j++){ // 行
          total = 0
          let k = 0
          let who = list[i - k][j + k] && list[i - k][j + k] % 2
          while(list[i - k][j + k] && list[i - k][j + k] % 2 === who && k < 5){ // 检查五个
            total++
            k++
          }
          if(total>=5) return true
        }
      }
      return false
    }
  }
}
</script>

<style lang='scss' scoped>
.chessboard{
  background: hsl(0, 78%, 80%);
  position: relative;
  padding: 12px;
  display: inline-block;
  .gird-box{
    display: grid;
    .gird-row{
      display: grid;
      .gird-column{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .text{
          position: relative;
          z-index: 100;
          font-size: 12px;;
        }
        &.w{
          &:before{
            content: '';
            width: 100%;
            height: 100%;
            background: #fff;
            border-radius: 50%;
            position: absolute;
          }
        }
        &.b{
          &:before{
            content: '';
            width: 100%;
            height: 100%;
            background: #000;
            border-radius: 50%;
            position: absolute;
          }
        }
      }
    }
  }
  //棋盘
  .chessboard-top{
    position: relative;
    z-index: 999;
    // border-top: 1px solid #fff;
    // border-left: 1px solid #fff;
    width: 400px;
    height: 400px;
    position: relative;
    grid-template-rows: repeat(15, 6.66%);
    .gird-row{
      grid-template-columns: repeat(15, 6.66%);
      .gird-column{
        // border-bottom: 1px solid #fff;
        // border-right: 1px solid #fff;
      }
    }
  }
  .chessboard-bottom{
    border-top: 1px solid red;
    border-left: 1px solid red;
    width: 375px;
    height: 375px;
    position: absolute;
    top: 24px;
    left: 24px;
    grid-template-rows: repeat(14, 7.14%);
    .gird-row{
      grid-template-columns: repeat(14, 7.14%);
      .gird-column{
        border-bottom: 1px solid red;
        border-right: 1px solid red;
      }
    }
  }
}
</style>
