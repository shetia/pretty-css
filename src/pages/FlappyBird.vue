<template>
  <div  class='black-box'>
    <div class="scene" ref="bgRef" @click="jump" :style="{'background-position-x': bgX}">
      <span class="score">得分: {{score}}</span>
      <!-- 小鸟 -->
      <div class="bird" :style="{'top': bird.top, 'left': bird.left}" ref="birdRef" ></div>
      <div class="mask"  v-if="!isStart || end">
        <h2 class="game-over" v-if="end">游戏结束</h2>
        <h2 class="start-btn" @click.stop="start" v-if="!isStart">点击开始</h2>
        <h2 class="again-btn" @click.stop="again" v-if="end">重新开始</h2>
      </div>
      <template v-for="(item, index) in pillarList">
        <div class="pillar" ref="pillarRef" v-if="isStart" :key="index" :style="{'left': pillarX(item) + 'px', '--up-height': item.randomH + 'px'}">
          <div class="pillar-up"></div>
          <div class="pillar-down"></div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  pageName: '像素鸟',
  data () {
    return {
      score: 0,
      initloop: null,
      gameloop: null,
      bgX: 0,
      skyx: 0,
      birds: {
        stepx: 52, // 
        stepy: 0,  //
        x: 0,     // 水平位置
        y: 0,     // 垂直位置
      },
      bird: {
        top: '130px', // 垂直位置
        left: '49%'   // 水平位置
      },
      isStart: true,
      end: false,
      flying: true,
      randomH: 150,
      total: 1200,
      pillarList: [
        {x: 300,  randomH: 50 + Math.ceil(Math.random() * 200)},
        {x: 600,  randomH: 50 + Math.ceil(Math.random() * 200)},
        {x: 900,  randomH: 50 + Math.ceil(Math.random() * 200)},
        {x: 1200, randomH: 50 + Math.ceil(Math.random() * 200)},
        {x: 1500, randomH: 50 + Math.ceil(Math.random() * 200)},
      ]
    }
  },
  mounted () {
    this.init()
    
  },
  methods:{
    init () {
      this.isStart = false
      this.end = false
      this.bgX = 0
      // 初始化小鸟
      let birds = {
        stepx: 52,
        stepy: 0,
        x: 500,
        y: 130
      }
      this.birds = birds
      this.bird.left = '49%'
      this.initloop = setInterval(() => {
        this.skyx -= 2
        this.bgX = this.skyx + 'px'
        birds.stepy += 1 //小鸟下落
        birds.y += birds.stepy
        if (birds.stepy >= 15) {
          //小鸟运动
          birds.stepy = -15 //小鸟飞起
          birds.y += birds.stepy
        }
        this.bird.top = birds.y + 'px'
      }, 30)
    },
    start () {
      this.flying = true
      this.pillarList = [
        {x: 300,  randomH: 50 + Math.ceil(Math.random() * 200)},
        {x: 600,  randomH: 50 + Math.ceil(Math.random() * 200)},
        {x: 900,  randomH: 50 + Math.ceil(Math.random() * 200)},
        {x: 1200, randomH: 50 + Math.ceil(Math.random() * 200)},
        {x: 1500, randomH: 50 + Math.ceil(Math.random() * 200)},
      ]
      this.game()
    },
    again(){
      this.init()
    },
    over () {
      clearInterval(this.gameloop)
    },
    // 柱子的位置
    pillarX (item) {
      let last = 1500 - item.x
      let x = parseInt(this.total) - last
      if(x < -50){
        x = 1500 + x
      }
      return x
    },
    game(){
      clearInterval(this.initloop)
      this.bird.left = '50px'
      this.birds.stepy = 0  // 初始化
      this.total = 1500
      this.isStart = true
      this.gameloop = setInterval(() => {
        if(this.flying){
          this.skyx -= 5
          this.bgX = this.skyx + 'px'
          this.birds.y += this.birds.stepy
          this.birds.stepy += 1 //小鸟下落
          this.total -= 5    // 柱子移动
          if(this.total < -50){
            this.total = 1450
          }
          // 检测小鸟是否碰撞
          if(this.birds.y < 0 || this.birds.y >= 500 || this.isCrash()){
            this.flying = false
            this.end = true
            clearInterval(this.gameloop)
          }
          // 设置小鸟位置
          this.bird.top = this.birds.y + 'px'
        }
      }, 30)
    },
    //检测小鸟是否碰柱子
    isCrash () {
      let y = this.birds.y
      let doms = this.$refs.pillarRef || []
      for(let item of doms){
        if(item.offsetLeft <= 50 && item.offsetLeft >=0){
          let up = item.children && item.children[0]
          if(up.offsetHeight > y || up.offsetHeight + 120 < y){
            return true
          }
          // 统计分数
          if(item.offsetLeft == 0){
            this.score++
          }
        }
      }
      return false
    },
    // 小鸟跳
    jump () {
      this.birds.stepy = -10
    },

  }
}
</script>

<style lang='scss' scoped>
.scene{
  width: 1200px;
  height: 500px;
  border:1px solid #ccc;
  margin: 10px auto;
  background: url('~@/assets/images/sky.png') bottom;
  background-size: cover;
  position: relative;
  overflow: hidden;
  text-align: center;
  user-select: none;
  // 分数
  .score{
    position: absolute;
    top: 10px;
    font-size: 30px;
    color: #fff;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
  }
  // 小鸟
  .bird{
    background: url('~@/assets/images/bird1.png') no-repeat;
    // background-color: red;
    position: absolute;
    top: 130px;
    width: 30px;
    height: 30px;
    left: 49%;
    
    z-index: 99;
  }
  // 开始按钮
  .again-btn,
  .start-btn{
    font-weight: bold;
    font-size: 32px;
    color: #fff;
    cursor: pointer;
    top: 290px;
    position: absolute;
    left: 50%;
    margin-left: -60px;
    z-index: 9;
    
  }
  .start-btn{
    animation: bound 0.3s ease-in-out 0s infinite alternate;
  }
  .game-over{
    position: absolute;
    font-size: 42px;
    font-family: 幼圆;
    font-weight: 600;
    top: 50%;
    left: 50%;
    color: red;
    transform: translate(-50%, -50%);
  }
  // 蒙层
  .mask{
    background: rgba(0,0,0,.5);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }
  // 柱子
  .pillar{
    position: absolute;
    top:0px;
    left: 300px;
     width: 50px;
     height: 100%;
    //  border: 1px solid #ccc;
     display:flex;
     justify-content: space-between;
     flex-direction: column;
     --up-height: 180px;
     transition: all 0s;
    .pillar-up{
      width: 100%;
      height: var(--up-height);
      background: url('~@/assets/images/pipe2.png')  no-repeat bottom;
      background-size: 98%;
      // background-color: #999;
    }
    .pillar-down{
      width: 100%;
      height: calc(100% - var(--up-height) - 150px);
      background: url('~@/assets/images/pipe1.png') no-repeat top;
      // background-color: #999;
      background-size: 98%;
    }
  }
}

@keyframes bound{
    0%{
        transform: scale(1);
    }
    25%{
        transform: scale(0.8);
    }
    50%{
        transform: scale(1.2);
    }
    100%{
        transform: scale(1.5);
        color: #09f;
    }
}
</style>
