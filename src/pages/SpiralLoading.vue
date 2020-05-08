<template>
  <div  class="black-box">
<div class="loading">
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
</div>
  </div>
</template>

<script>
export default {
  pageName: '螺旋加载',
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>

.loading{
  @include vertical-center;
}
.circle {
  $circle-count: 60;
  $circle-diameter: 0.5em;
  $ring-radius: 4em;
  $duration: 3s;
  position: absolute;
  width: $circle-diameter;
  height: $circle-diameter;
  border-radius: 50%;
  background: white;
  opacity: 0;
  animation: move-to-center $duration ease-in-out infinite;

  @for $i from 1 through $circle-count {
    &:nth-child(#{$i}) {
      $ratio: $i / $circle-count;
      // Make a ring of circles, and move them to center;
      transform: rotate($ratio * 720deg) translateX($ring-radius);
      // Then stagger the animation, and it becomes a spiral.
      animation-delay: $ratio * $duration;
    }
  }
}

@keyframes move-to-center {
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

</style>
