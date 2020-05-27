<template>
  <div  class='black-box '>
    <h3 class="total">分数: {{total}}</h3>
    <div class="box-2048" @touchstart.stop.prevent="startHandler" @touchend.stop.prevent="endHandler" >
      <div class="row" v-for="(item, index) in list" :key="index">
        <div class="row-item" :style="{'--bg-color': filterNum(subItem)}" v-for="(subItem, subIndex) in item" :key="subIndex">
          <span class="word" v-if="subItem !== 0">
            {{ subItem }}
          </span>
        </div>
      </div>
    </div>
    <!-- 方向键 -->
    <div class="direction-box">
      <div class='direction'>
        <div class="key top" @click="haul({y: 1})" title="上">
          <i class="el-icon-caret-left"></i>
        </div>
        <div class="key left" @click="haul({x: -1})" title="左">
          <i class="el-icon-caret-left"></i>
        </div>
        <div class="key bottom" @click="haul({y: -1})" title="下">
          <i class="el-icon-caret-left"></i>
        </div>
        <div class="key right" @click="haul({x: 1})"  title="右">
          <i class="el-icon-caret-left"></i>
        </div>
        <div class="center" @click="renew" title="重新开始">
          <i class="el-icon-refresh"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  pageName: '2048',
  data () {
    return {
      list: [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
      ],
      move: {
        x: 0,
        y: 0
      },
      isOk: false,
      isTouch: false,
      coord: {  // touchstart坐标
        x: 0,
        y: 0
      },
      timer: Date.now()
    }
  },
  mounted () {
    this.randomBase()
    document.addEventListener('keydown', this.keyDownHandler)
  },
  computed : {
    total () {
      let num = this.list.reduce((a,b) => {
        return a + b.reduce((t,n)=> t+n)
      }, 0)
      return num
    }
  },
  watch: {
    list (n) {
      let max = 0
      n.forEach(item => {
        max = Math.max(...item, max)
      })
      if (max === 2048 && !this.isOk) {
        this.$message.success('恭喜您达到2048!')
        this.isOk = true
      }
    }
  },
  methods: {
    // 触摸开始, 储存开始位置坐标
    startHandler (e) {
      let x = e.targetTouches[0] && e.targetTouches[0].pageX || 0
      let y = e.targetTouches[0] && e.targetTouches[0].pageY || 0
      this.coord = {
        x,
        y
      }
    },
    // 触摸结束, 计算滑动方向
    endHandler (e) {
      let x = e.changedTouches[0] && e.changedTouches[0].pageX || 0
      let y = e.changedTouches[0] && e.changedTouches[0].pageY || 0

      let xDiff = this.coord.x - x
      let yDiff = this.coord.y - y
      // 是否水平方向移动
      let isX = Math.abs(xDiff) > Math.abs(yDiff)
      // 是否正方向
      let isJust = (isX && xDiff < 0) || (!isX && yDiff > 0)
      this.move = {
        x: isX ? (isJust ? 1 : -1) : 0,
        y: !isX ? (isJust ? 1 : -1) : 0
      }
      this.merge()
    },
    // 按键
    haul (direction) {
      let move = {
        x: 0,
        y: 0
      }
      for(let prop in move){
        if(direction[prop]){
          move[prop] = direction[prop]
        }
      }
      this.move = move
      this.merge()
    },
    // 重新开始
    renew () {
      let list = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
      ]
      this.$set(this, 'list', list)
      this.isOk = false
      this.randomBase()
    },
    // 方向键
    keyDownHandler (e) {
      let key = {
        w: 1,           // 上
        s: -1,          // 下
        a: -1,          // 左
        d: 1,           // 右
        ArrowUp: 1,     // 上
        ArrowDown: -1,  // 下
        ArrowLeft: -1,  // 左
        ArrowRight: 1   // 右
      }[e.key]
      let direction = {
        w: 'y',          // 上
        s: 'y',          // 下
        a: 'x',          // 左
        d: 'x',          // 右
        ArrowUp: 'y',    // 上
        ArrowDown: 'y',  // 下
        ArrowLeft: 'x',  // 左
        ArrowRight: 'x'  // 右
      }[e.key]
      let move = {
        x: 0,
        y: 0
      }
      if (direction && key) {
        move[direction] = key
        this.move = move
        this.merge()
      }
    },
    // 随机生成2, 4, 加入到list
    randomBase () {
      let arr = [2, 4]
      let num = arr[Math.round(Math.random())]
      let empty = []
      this.list.forEach((item, i) => {
        item.forEach((subItem, j) => {
          if(this.list[i][j] === 0){
            empty.push([i, j])
          }
        })
      })
      let len = empty.length
      if(len < 1) {
        if(!this.isSame(this.list)){
          if (Date.now() - this.timer > 3000) {
              this.$message({
                type: 'error',
                message: '游戏结束',
                center: true
              })
              this.timer = Date.now()
          }
        }
        return
      }
      let randomNum = Math.floor(Math.random() * len)
      let ij = empty[randomNum]
      this.$set(this.list[ij[0]], [ij[1]], num)
    },
    // 把同一方向的相邻相同值的合并
    merge () {
      let list = JSON.parse(JSON.stringify(this.list))
      // 默认左为正方向, 其他方向先把方向转成向左的
      if (this.move.x === 1){ // 右  需转两下
        list = this.rotateMatrix(list, 2)
      } else if (this.move.y === 1){ // 上 需转三下
        list = this.rotateMatrix(list, 3)
      } else if (this.move.y === -1) { // 下 需转一下
        list = this.rotateMatrix(list, 1)
      }

      // 合并
      for(let x = 0; x < 4; x++){
        let item = list[x]
        // 把有值的靠边
        for(let i = 0; i < 3; i++){
          let k = i + 1
          if(!item[i]){
            while(!list[x][k] && k < 4){
              k++
            }
            if (k < 4){
              list[x][i] = list[x][k]
              list[x][k] = 0
            }
          }
        }
        // 把相同的合并
        for(let i = 0; i < 3; i++){
          let j = i + 1
          if(item[i] === item[j]){
            item[i] = item[i] * 2
            item[j] = 0
          } else {
            j++
          }
        }
        // 合并完后把有值得靠边
        for(let i = 0; i < 3; i++){
          let k = i + 1
          if(!item[i]){
            while(!list[x][k] && k < 4){
              k++
            }
            if (k < 4){
              list[x][i] = list[x][k]
              list[x][k] = 0
            }
          }
        }
      }

      // 再转回来
      if (this.move.x === 1){ // 右  需转两下
        list = this.rotateMatrix(list, 2)
      } else if (this.move.y === 1){ // 上 需转1下
        list = this.rotateMatrix(list, 1)
      } else if (this.move.y === -1) { // 下 需转三下
        list = this.rotateMatrix(list, 3)
      }
      this.list = list
      // 再随机生成2, 4, 加入到list
      setTimeout(() => {
        this.randomBase()
      }, 500)
    },
    // 旋转矩阵
    rotateMatrix (list, num) {
      // 顺时针旋转矩阵90°
      let rotate = function () {
        for(let i = 0; i < 2; i++){
          [list[i], list[3 - i]] = [list[3 - i], list[i]]
        }
        for(let i = 0; i < 4; i++){
          for(let j = 0; j < i; j++){
            [list[i][j], list[j][i]] = [list[j][i], list[i][j]]
          }
        }
      }
      
      // 选转几次就调用几次
      for(let k = 0; k < num; k++){
        rotate()
      }
      return list
    },
    // 判断矩阵每个元素相邻是否有相等的
    isSame (list) {
      for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
          if((i+1 < 4 && list[i][j] === list[i + 1][j]) || (j + 1 < 4 && list[i][j] ===list[i][j + 1])){
            return true
          }
        }
      }
      return false
    },
    // 根据数值 修改颜色数值 用于方块颜色
    filterNum (num) {
      return 2048 - (num * 20)
    }
  },
  beforeDestroy(){
    // 页面销毁 清除监听键盘事件
    document.removeEventListener('keydown', this.keyDownHandler)
  }
}
</script>

<style lang='scss' scoped>
.total{
  font-size: 24px;
  font-weight: 600;
  color: yellowgreen;
}
.box-2048{
  width: 240px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ccc;
  padding: 12px;
  border-radius: 5px;
  margin: 10px auto;
  user-select: none;
  .row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .row-item{
      --bg-color: 20;
      background: #fff;
      text-align: center;
      flex-shrink: 0;
      width: 50px;
      height: 50px;
      border-radius: 5px;
      line-height: 50px;
      background: hsl(var(--bg-color), 78%, 80%);
      font-size: 20px;
      font-weight: 600;
      transition:all 0.25s;
      animation: showAni 0.5s;
    }
  }
}
@keyframes showAni {
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1);
  }
}
// 方向键
.direction-box{
  @include flex-center;
  .direction{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background:#ccc;
    position:relative;
    transform: rotate(45deg);
    box-shadow: 0px 0px 10px #fff;
    overflow: hidden !important;
    @include flex-center;
    .center{
      @include flex-center;
      transition: all .25s;
      width: 70px;
      height: 70px;
      background: #fff;
      z-index: 10;
      border-radius: 50%;
      box-shadow: 0px 0px 10px #aaa, 0px 0px 10px #ccc inset;
      transform:rotate(270deg);
      font-size: 16px;
      cursor: pointer;
      padding: 17px;
      box-sizing: border-box;
      &:hover{
        transform: rotate(0deg);
      }
      i{
        color: #999;
        font-weight: 600;
        box-shadow: none;
      }
    }
    .key{
      --hsl-two: 75%;
      --hsl-three: 80%;
      --hsl-x: 70;
      --hsl-y: 160;
      width: 150px;
      height: 150px;
      position: absolute;
      top: -50%;
      left: -50%;
      transform-origin: right bottom;
      cursor: pointer;
      transition: all .5s;
      z-index: 1;
      >i{
        position:absolute;
        bottom: 25px;
        right: 25px;
        transform: rotate(45deg);
        box-shadow: none;
      }
      &.top{
        background: #a3f5da;
      }
      &.left{
        background: #e7f5a3;
        transform: rotate(-90deg);
      }
      &.bottom{
        background: #a3f5da;
        transform: rotate(180deg);
      }
      &.right{
        background: #e7f5a3;
        transform: rotate(90deg);
      }
      &:hover{
        // --hsl-three: 60%;
        // --hsl-two: 55%;
      }
    }

  }
}
</style>
