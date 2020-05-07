<template>
  <div   class="black-box">
    <button class="new-button button-anon-pen">
      <span>Start Coding</span>
    </button>
  </div>
</template>

<script>
export default {
  pageName: '彩色边框',
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.button-anon-pen {
    border:none;
    padding: 0;
    text-align: center;
    position: relative;
    background-image: linear-gradient(115deg,#4fcf70,#fad648,#a767e5,#12bcfe,#44ce7b);
    border-radius: 6px;
    box-sizing: border-box;
    color: #fff;
    display: block;
    z-index: 2;
    overflow: hidden;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    span{
      padding: 12px;
      display: inline-block;
      font-size: 1.1rem;
      align-items: center;
      background: #000;
      border-radius: 3px;
      display: block;
      justify-content: center;
      margin: 3px;
      box-sizing: border-box;
      height: 100%;
      transition: background .5s ease;
    }
    &:hover {
      animation: Sidebar_rainbowBorder-dkMw3 .5s linear infinite;
    }
}
@keyframes Sidebar_rainbowBorder-dkMw3{
  0%, 100% {
      background-image: linear-gradient(115deg,#4fcf70,#fad648,#a767e5,#12bcfe);
  }
  25% {
      background-image: linear-gradient(115deg,#fad648,#a767e5,#12bcfe,#4fcf70);
  }
  50% {
      background-image: linear-gradient(115deg,#a767e5,#12bcfe,#4fcf70,#fad648);
  }
  75% {
      background-image: linear-gradient(115deg,#12bcfe,#4fcf70,#fad648,#a767e5);
  }
}
</style>

