<template>
  <div  class='black-box'>
  <div class="scene">
  <img class="scene__bg" width="800px" height="800px" src="../assets/images/cnKl1Ykd5rZCVwm.jpg" />
  <div class="cube">
    <div class="cube__face cube__face--front">
    </div>
    <div class="cube__face cube__face--back"></div>
    <div class="cube__face cube__face--right">
    </div>
    <div class="cube__face cube__face--left"></div>
    <div class="cube__face cube__face--top"></div>
    <div class="cube__face cube__face--bottom">
    </div>
  </div>
</div>

  </div>
</template>

<script>
export default {
  pageName: '3D立方',
  data () {
    return {

    }
  },
  mounted () {

  }
}
</script>

<style lang='scss' scoped>

.scene {
  width: 200px;
  height: 200px;
  margin: 100px auto;
  .scene__bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    object-fit: cover;
    filter: blur(20px);
  }
}

.cube {
  --cube-width: 200px;

  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotateX(70deg) rotateZ(60deg);

  .cube__face {
    position: absolute;
    width: var(--cube-width);
    height: var(--cube-width);
    background: url('../assets/images/cnKl1Ykd5rZCVwm.jpg');
    border: 1px solid rgba(0, 0, 0, 0.1);
    object-fit: cover;
    background-size:cover;
    .cube__face__bg {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .cube__face--front {
    transform: rotateY(0deg) translateZ(calc(var(--cube-width) / 2));

    .cube__face__bg {
      transform: rotateZ(0.75turn);
    }
  }

  .cube__face--right {
    transform: rotateY(90deg) translateZ(calc(var(--cube-width) / 2));

    .cube__face__bg {
      transform: rotateZ(-0.25turn);
    }
  }

  .cube__face--back {
    transform: rotateY(180deg) translateZ(calc(var(--cube-width) / 2));
  }

  .cube__face--left {
    transform: rotateY(-90deg) translateZ(calc(var(--cube-width) / 2));
  }

  .cube__face--top {
    transform: rotateX(90deg) translateZ(calc(var(--cube-width) / 2));
  }

  .cube__face--bottom {
    transform: rotateX(-90deg) translateZ(calc(var(--cube-width) / 2));
  }
}

</style>
