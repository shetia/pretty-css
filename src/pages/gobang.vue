<template>
  <div class="black-box">
    <div class="chessboard">
      <!-- 棋盘 -->
      <div class="gird-box chessboard-top">
        <div class="gird-row" v-for="(item, index) in list" :key="index">
          <div
            class="gird-column"
            :class="{
              w: subItem && subItem % 2 == 0,
              b: subItem && subItem % 2 == 1,
              cur: subItem && subItem === num || winList.includes(subItem)
            }"
            v-for="(subItem, subIndex) in item"
            :key="subIndex"
            @click="cellHandler(index, subIndex)"
          >
            <span class="text" v-if="subItem">{{ subItem }}</span>
          </div>
        </div>
      </div>
      <!-- 棋盘线 -->
      <div class="gird-box chessboard-bottom">
        <div class="gird-row" v-for="(item, index) in list1" :key="index">
          <div
            class="gird-column"
            v-for="(subItem, subIndex) in item"
            :key="subIndex"
          ></div>
        </div>
      </div>
    </div>
    <div>
      <c-button @click.native="init">重新开始</c-button>
    </div>
  </div>
</template>

<script>
export default {
  pageName: '五子棋',
  data () {
    return {
      list: [],
      list1: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      num: 0,
      isWin: false,
      who: 0,
      myWin: [],
      computerWin: [],
      wins: [],
      count: 0,
      winList: []
    }
  },
  created () {
    this.init()
  },
  methods: {
    // 初始化
    init () {
      let list = []
      let wins= []
      for (let i = 0; i < 15; i++) {
        list[i] = [];
        wins[i] = [];
        for (let j = 0; j < 15; j++) {
          list[i][j] = 0;
          wins[i][j] = [];
        }
      }
      let count = 0; //总共赢的数量572种
      //横向
      for (let a = 0; a < 15; a++) {
        for (let b = 0; b < 11; b++) {
          for (let c = 0; c < 5; c++) {
            wins[a][b + c][count] = 1
          }
          count++;
        }
      }
      //纵向
      for (let a = 0; a < 15; a++) {
        for (let b = 0; b < 11; b++) {
          for (let c = 0; c < 5; c++) {
            wins[b + c][a][count] = 1
          }
          count++;
        }
      }
      //斜 '\'
      for (let a = 0; a < 11; a++) {
        for (let b = 0; b < 11; b++) {
          for (let c = 0; c < 5; c++) {
            wins[a + c][b + c][count] = 1
          }
          count++;
        }
      }
      //反斜 '/'
      for (let a = 0; a < 11; a++) {
        for (let b = 4; b < 15; b++) {
          for (let c = 0; c < 5; c++) {
            wins[a + c][b - c][count] = 1
          }
          count++;
        }
      }
      //我方、计算机方总共可以赢的数量，每在某一方式上可以赢的位置下一颗子，myWin[i]++
      //当myWin[i] == 5,说明我方在这个方式上赢的落子已经达到5颗，说明我方已经赢了
      let myWin = []; //
      let computerWin = [];
      for (let i = 0; i < count; i++) {
        myWin[i] = 0;
        computerWin[i] = 0;
      }

      this.list = list
      this.wins = wins
      this.count = count
      this.myWin = myWin
      this.computerWin = computerWin
      this.isWin = false
      this.num = 0
      this.winList = []
    },
    // 点击棋盘下棋
    cellHandler (x, y) {
      if (this.isWin) {
        let str = this.who % 2 === 0 ? '白棋' : '黑棋'
        this.$message.success(`游戏结束! ${str}获胜`)
        return
      }
      if (this.list[x][y]) {
        return
      }
      this.num++
      this.$set(this.list[x], y, this.num)
      for (let k = 0; k < this.count; k++) {
        //第几种赢法
        if (this.wins[x][y][k]) {
          this.myWin[k]++;
          this.computerWin[k] = 6; //因为我方在这个点上已经落子，所以计算机不可能在这个点上赢，
        }
        if (this.myWin[k] == 5) {
          this.$message.success(`游戏结束! 黑棋获胜`)
          this.isWin = true
          this.who = 1
          return
        }
      }
      this.computerAI()
    },
    // 机器人下
    computerAI () {
      let myScore = []; //我方分数
      let computerScore = []; //计算机分数
      let max = 0; //最大分数
      let x = 0, y = 0; //最大分数点
      let count = 572
      for (let i = 0; i < 15; i++) {
        myScore[i] = [];
        computerScore[i] = [];
        for (let j = 0; j < 15; j++) {
          myScore[i][j] = 0;
          computerScore[i][j] = 0;
        }
      }

      for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
          if (this.list[i][j] == 0) { //每个空闲点上进行计算分数
            for (let k = 0; k < count; k++) { //遍历所有可以赢的，数量
              if (this.wins[i][j][k]) { //可以赢的点进行算分

                if (this.myWin[k] == 1) {
                  myScore[i][j] += 200;
                } else if (this.myWin[k] == 2) {
                  myScore[i][j] += 400;
                } else if (this.myWin[k] == 3) {
                  myScore[i][j] += 2000;
                } else if (this.myWin[k] == 4) {
                  myScore[i][j] += 10000;
                }

                if (this.computerWin[k] == 1) {
                  computerScore[i][j] += 220;
                } else if (this.computerWin[k] == 2) {
                  computerScore[i][j] += 420;
                } else if (this.computerWin[k] == 3) {
                  computerScore[i][j] += 2100;
                } else if (this.computerWin[k] == 4) {
                  computerScore[i][j] += 20000;
                }
              }
            }

            //得出最大分数的点，并赋给u,y
            if (myScore[i][j] > max) {
              max = myScore[i][j];
              x = i;
              y = j;
            } else if (myScore[i][j] == max) {
              if (computerScore[i][j] > computerScore[x][y]) {
                x = i;
                y = j;
              }
            }

            if (computerScore[i][j] > max) {
              max = computerScore[i][j];
              x = i;
              y = j;
            } else if (computerScore[i][j] == max) {
              if (myScore[i][j] > myScore[x][y]) {
                x = i;
                y = j;
              }
            }

          }//所有空闲点上进行计算分数
        }
      }
      this.$set(this.list[x], y, ++this.num)
      for (var k = 0; k < this.count; k++) {
        //第几种赢法
        if (this.wins[x][y][k]) {
          this.computerWin[k]++
          this.myWin[k] = 6
          if (this.computerWin[k] == 5) {
            this.checkWin(this.list)
            this.$message.success(`游戏结束! 白获胜`)
            this.isWin = true
            this.who = 2
            return
          }
        }
      }

    },
    // 检测是否连五珠, 顺便获取赢的数组, 也可用于判断双人对战哪方胜利
    checkWin (list) {
      let total = 0
      let winList = []
      // 水平
      for(let i = 0; i < 15; i++){  // 行
        for(let j = 0; j < 11; j++){ // 列
          total = 0
          let k = j
          let who = list[i][k] && list[i][k] % 2
          winList = []
          while(list[i] && list[i][k] && list[i][k] % 2 === who && k - j < 5){ // 检查五个
            winList.push(list[i][k])
            total++
            k++
          }
          if(total>=5) {
            this.winList = winList
            return true
          }
        }
      }
      // 垂直
      for(let i = 0; i < 15; i++){  // 列
        for(let j = 0; j < 11; j++){ // 行
          total = 0
          let k = j
          let who = list[k][i] && list[k][i] % 2
          winList = []
          while(list[k] && list[k][i] && list[k][i] % 2 === who && k - j < 5){ // 检查五个
            winList.push(list[k][i])
            total++
            k++
          }
          if(total>=5) {
            this.winList = winList
            return true
          }
        }
      }
      // 左斜
      for(let i = 0; i < 11; i++){  // 列
        for(let j = 0; j < 11; j++){ // 行
          total = 0
          let k = 0
          let who = list[i + k][j + k] && list[i + k][j + k] % 2
          winList = []
          while(list[i + k] && list[i + k][j + k] && list[i + k][j + k] % 2 === who && k < 5){ // 检查五个
            winList.push(list[i + k][j + k])
            total++
            k++
          }
          if(total>=5) {
            this.winList = winList
            return true
          }
        }
      }
      // 右斜
      for(let i = 4; i < 15; i++){  // 列
        for(let j = 0; j < 11; j++){ // 行
          total = 0
          let k = 0
          let who = list[i - k][j + k] && list[i - k][j + k] % 2
          winList = []
          while(list[i - k] && list[i - k][j + k] && list[i - k][j + k] % 2 === who && k < 5){ // 检查五个
            winList.push(list[i - k][j + k])
            total++
            k++
          }
          if(total>=5) {
            this.winList = winList
            return true
          }
        }
      }
      return false
    }
  }
}
</script>

<style lang='scss' scoped>
.chessboard {
  background: #d8b796;
  position: relative;
  padding: 12px;
  display: inline-block;
  user-select: none;
  box-shadow: 2px 2px 10px #fff;
  .gird-box {
    display: grid;
    .gird-row {
      display: grid;
      .gird-column {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .text {
          position: relative;
          z-index: 100;
          font-size: 12px;
        }

        &:before {
          content: "";
          width: 92%;
          height: 92%;
          border-radius: 50%;
          position: absolute;
        }
        // 白棋
        &.w {
          &:before {
            background: #fff;
            box-shadow: -3px -2px 6px #333 inset;
          }
        }
        // 黑棋
        &.b {
          &:before {
            background: #000;
            box-shadow: 1px 2px 6px #eee inset;
          }
        }
        &.cur {
          &:before {
            animation: flash 1s linear reverse infinite;
          }
        }
      }
    }
  }
  //棋盘
  .chessboard-top {
    position: relative;
    z-index: 999;
    width: 400px;
    height: 400px;
    position: relative;
    grid-template-rows: repeat(15, 6.66%);
    .gird-row {
      grid-template-columns: repeat(15, 6.66%);
    }
  }
  // 棋盘线
  .chessboard-bottom {
    border-top: 1px solid #333;
    border-left: 1px solid #333;
    width: 375px;
    height: 375px;
    position: absolute;
    top: 24px;
    left: 24px;
    grid-template-rows: repeat(14, 7.14%);
    .gird-row {
      grid-template-columns: repeat(14, 7.14%);
      .gird-column {
        border-bottom: 1px solid #333;
        border-right: 1px solid #333;
      }
    }
  }
}
@keyframes flash {
  0%,
  100% {
    box-shadow: 0px 0px 6px #999 inset, 0px 0px 8px 2px red;
  }
  50% {
    box-shadow: 0px 0px 6px #999 inset, 0px 0px 1px 0px red;
  }
}
</style>
