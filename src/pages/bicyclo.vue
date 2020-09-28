<template>
  <div  class='black-box bicyclo'>
    <div class=circle></div>
    <div class=circle></div>
    <svg>
      <filter id="wave">
        <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" seed="2">
          <animate attributeName="baseFrequercy" dur="60s" values="0.02; 0.05; 0.02" repeatCount="indefinite"></animate>
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="60"></feDisplacementMap>
      </filter>
    </svg>
  </div>
</template>

<script>
export default {
  pageName: '双环',
  data () {
    return {

    }
  },
  mounted () {

  }
}
</script>

<style lang='scss' scoped>
.bicyclo{
  display: flex;
  justify-content: center;
  align-items: center;
  .circle{
    position: relative;
    width: 600px;
    height: 600px;
    filter: url(#wave) blur(1px);
    &:nth-child(2)::before{
      animation-delay: -2.5s;
    }
    &:before{
      content:'';
      position: absolute;
      top: 100px;
      left: 100px;
      bottom: 100px;
      right: 100px;
      border:20px solid #fff;
      border-radius: 100%;
      box-shadow: 0px 0px 10px #fff, 0px 0px 20px #fff inset;
    }
    &:before{
      content:'';
      position: absolute;
      top: 100px;
      left: 100px;
      bottom: 100px;
      right: 100px;
      border:20px solid #fff;
      border-radius: 100%;
      box-shadow: 0px 0px 50px #0f0, 0px 0px 50px #0f0 inset;
      -webkit-box-reflect: below 20px linear-gradient(transparent, transparent, #0002);
      animation: borderChange 5s linear infinite;
      transition: all 10s;
      @keyframes borderChange{
        0%{
          box-shadow: 0px 0px 50px #0f0, 0px 0px 50px #0f0 inset;
          filter: hue-rotate(0deg);
          transform: scale(1);
        }
        20%{
          box-shadow: 0px 0px 60px #0f0, 0px 0px 60px #0f0 inset;
        }
        40%{
          box-shadow: 0px 0px 40px #0f0, 0px 0px 40px #0f0 inset;
        }
        50%{
          transform: scale(1.1);
        }
        60%{
          box-shadow: 0px 0px 80px #0f0, 0px 0px 80px #0f0 inset;
        }
        80%{
          box-shadow: 0px 0px 100px #0f0, 0px 0px 100px #0f0 inset;
        }
        100%{
          box-shadow: 0px 0px 50px #0f0, 0px 0px 50px #0f0 inset;
          filter: hue-rotate(360deg);
          transform: scale(1);
        }
      }
    }
  }
  svg{
    width: 0px;
    height: 0px;
  }
}
</style>
