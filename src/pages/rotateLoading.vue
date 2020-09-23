<template>
  <div  class='black-box'>
    <div class="loading-bg">
      <div class="loading-box">
        <span v-for="(num, i) in 20" :key="i" :style="{'--i': i + 1}"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  pageName: '旋转加载',
  data () {
    return {

    }
  },
  mounted () {

  }
}
</script>

<style lang='scss' scoped>
.black-box{
  width: 100%;
  height: 100%;
  .loading-bg{
    width: 100%;
    height: 100%;
    background: #082a09;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: bgchange 10s linear infinite;
    @keyframes bgchange {
      0%{
        filter: hue-rotate(0deg);
      }
      100%{
        filter: hue-rotate(360deg);
      }
    }
    .loading-box{
      width: 120px;
      height: 120px;
      position:relative;
      span{
        position:absolute;
        top: 0px;
        left: 0px;
        transform:rotate(calc(18deg * var(--i)));
        transform-origin: 60px 60px;
        &:before{
          content: '';  
          position: absolute;
          top: 0px;
          left: 0px;
          width: 20px;
          height: 20px;
          border-radius: 100%;
          background: #4ae89b;
          box-shadow: 0px 0px 10px #4ae89b,
                      0px 0px 20px #4ae89b,
                      0px 0px 40px #4ae89b,
                      0px 0px 60px #4ae89b,
                      0px 0px 80px #4ae89b,
                      0px 0px 100px #4ae89b;
          animation: loading 2s linear infinite;
          animation-delay: calc(0.1s * var(--i));
          @keyframes loading {
            0%{
              transform: scale(1);
            }
            90%, 
            100%{
              transform: scale(0);
            }
          }
        }
      }
    }
  }
}
</style>
