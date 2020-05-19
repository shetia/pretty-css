<template>
  <div  class='black-box '>
    <div class="box-2048">
      <div class="row" v-for="(item, index) in list" :key="index">
        <div class="row-item" :style="{'--bg-color': parseInt(2020 - subItem)}" v-for="(subItem, subIndex) in item" :key="subIndex">{{ subItem ? subItem:'' }}</div>
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
        // [0,16,0,2048],
        // [2,32,0,1024],
        // [4,64,512,0],
        // [8,128,256,0],
      ],
      move: {
        x: 0,
        y: 0
      }
    }
  },
  mounted () {
    this.randomBase()
    document.addEventListener('keydown', this.keyDownHandler)
  },
  methods: {
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
        console.log(this.move)
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
        console.log('game over')
        return
      }
      let randomNum = Math.floor(Math.random() * len)
      let ij = empty[randomNum]
      this.$set(this.list[ij[0]], [ij[1]], num)
    },
    // 合并
    merge () {
      // this.move.x 
      // 左
      let list = this.list
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
              this.$set(this.list[x], i, list[x][k])
              this.$set(this.list[x], k, 0)
              list[x][k] = 0
            }
          }
        }
        // 把相同的合并
        for(let i = 0; i < 3; i++){
          let j = i + 1
          if(item[i] === item[j]){
            this.$set(this.list[x], i, item[i] * 2)
            this.$set(this.list[x], j, 0)
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
              this.$set(this.list[x], i, list[x][k])
              this.$set(this.list[x], k, 0)
              list[x][k] = 0
            }
          }
        }
      }
      setTimeout(() => {
        this.randomBase()
      }, 300)
    },
    // 翻转矩阵
    rotateMatrix () {
      
    }
  },
  beforeDestroy(){
    document.removeEventListener('keydown', this.keyDownHandler)
  }
}
</script>

<style lang='scss' scoped>
.box-2048{
  width: 240px;
  height: 240px;
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  background: #ccc;
  padding: 12px;
  border-radius: 5px;
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
      transition:all 1s;
      background: hsl(var(--bg-color), 78%, 80%);
      font-size: 20px;
      font-weight: 600;
    }
  }
}
</style>
