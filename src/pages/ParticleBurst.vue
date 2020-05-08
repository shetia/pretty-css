<template>
  <div  class='black-box'>
    <div class="particle" v-for="(item,index) in 200" :key="index"></div>
  </div>
</template>

<script>
export default {
  pageName: '颗粒破裂',
  data () {
    return {

    }
  },
  mounted () {

  }
}
</script>

<style lang='scss' scoped>
.particle {
  $d: 10px;
  $total: 500;
  $time: 3s;
  position: absolute;
  width: $d;
  height: $d;
  border-radius: 50%;
  animation: shoot $time ease-out infinite;

  @for $i from 1 through $total {
    &:nth-child(#{$i}) {
      $t: $time - 2s + random(2000) * 1ms;

      background: hsl(random(360), 100%, 70%);
      transform: translate(random(100) * 1vw, random(100) * 1vh);
      animation-duration: $t;
      animation-delay: -0.01 * random(100) * $t; // execute animation in advance
    }
  }
}

@keyframes shoot {
  from {
    transform: translate(50vw, 50vh); // middle of the scene
  }

  to {
    opacity: 0;
  }
}

</style>
