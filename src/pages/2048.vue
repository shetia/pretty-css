<template>
  <div  class='black-box '>
    <h3 class="total">分数: {{total}}</h3>
    <div class="box-2048">
      <div class="row" v-for="(item, index) in list" :key="index">
        <div class="row-item" :style="{'--bg-color': parseInt(2048 - subItem * 20)}" v-for="(subItem, subIndex) in item" :key="subIndex">
          <span class="word" v-if="subItem !== 0">
            {{ subItem }}
          </span>
        </div>
      </div>
    </div>
    <c-button @click.native="renew">重新开始</c-button>
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
      isOk: false
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
    // 重新开始
    renew () {
      let list = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
      ]
      this.$set(this, 'list', list)
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
        if(this.loop) clearTimeout(this.loop)
        this.loop = setTimeout(() => {
          if(!this.isSame(this.list)){
            this.$message.error('游戏结束')
          }
        }, 300);
        return
      }
      let randomNum = Math.floor(Math.random() * len)
      let ij = empty[randomNum]
      this.$set(this.list[ij[0]], [ij[1]], num)
    },
    // 合并
    merge () {
      let list = JSON.parse(JSON.stringify(this.list))
      if (this.move.x === 1){ // 右  需转两下
        list = this.rotateMatrix(list, 2)
      } else if (this.move.y === 1){ // 上 需转三下
        list = this.rotateMatrix(list, 3)
      } else if (this.move.y === -1) { // 下 需转一下
        list = this.rotateMatrix(list, 1)
      }

      for(let x = 0; x < 4; x++){
        let item = list[x]
        // 把有值得靠边
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
      setTimeout(() => {
        this.randomBase()
      }, 500)
    },
    // 旋转矩阵
    rotateMatrix (list, num) {
      for(let k = 0; k < num; k++){
        rotate()
      }
      // 顺时针旋转矩阵90°
      function rotate () {
        for(let i = 0; i < 2; i++){
          [list[i], list[3 - i]] = [list[3 - i], list[i]]
        }
        for(let i = 0; i < 4; i++){
          for(let j = 0; j < i; j++){
            [list[i][j], list[j][i]] = [list[j][i], list[i][j]]
          }
        }
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
    }
  },
  beforeDestroy(){
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
</style>
