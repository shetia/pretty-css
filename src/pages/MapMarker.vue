<template>
  <div  class='map-marker'>
    <div class="marker">
      <div class="pin"></div>
      <div class="shadow"></div>
    </div>
  </div>
</template>

<script>
export default {
  pageName: '地图标记',
  data () {
    return {

    }
  },
  mounted () {

  }
}
</script>

<style lang='scss' scoped>
.map-marker{
  @include flex-center;
}
.marker {
  position: relative;
  --marker-radius: 20px;
  --marker-diameter: calc(var(--marker-radius) * 2);
  --marker-color: #eb2f06;

  .pin {
    position: relative;
    z-index: 1;
    width: var(--marker-diameter);
    height: var(--marker-diameter);
    background: var(--marker-color);
    border-radius: 50% 50% 0 50%;
    // 用蒙版做一个有洞的戒指。
    mask: radial-gradient(
      transparent calc(var(--marker-radius) / 2),
      grey calc(var(--marker-radius) / 2 + 0.5px)
    );
    transform: rotate(45deg);
  }

  .shadow {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--marker-radius);
    height: var(--marker-radius);
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    transform: translate(50%, -10%) rotateX(60deg);

    &::before {
      position: absolute;
      content: "";
      width: var(--marker-diameter);
      height: var(--marker-diameter);
      background: transparent;
      border: 1px solid var(--marker-color);
      border-radius: inherit;
      opacity: 0;
      transform: scale(0);
      animation: pulse 1s infinite;
    }
  }
}

@keyframes pulse {
  50% {
    opacity: 1;
  }

  to {
    transform: scale(1.2);
  }
}

</style>
