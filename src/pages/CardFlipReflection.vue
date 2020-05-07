<template>
  <div>
    <div class="scene">
  <div class="card">
    <div class="card__face card__face--front">
      <img src="@/assets/images/cnKl1Ykd5rZCVwm.jpg" />
    </div>
    <div class="card__face card__face--back">
      <img src="@/assets/images/cqyJiYlRwnTeHmj.jpg" />
    </div>
  </div>
  <div class="card">
    <div class="card__face card__face--front">
      <img src="@/assets/images/FLnzi5Kq4tkRZSm.jpg" />
    </div>
    <div class="card__face card__face--back">
      <img src="@/assets/images/buDT4YS6zUMfHst.jpg" />
    </div>
  </div>
  <div class="card">
    <div class="card__face card__face--front">
      <img src="@/assets/images/uXF1Kx7lzELB6wf.jpg" />
    </div>
    <div class="card__face card__face--back">
      <img src="@/assets/images/RtVq2wxQYySDb8L.jpg" />
    </div>
  </div>
</div>

  </div>
</template>

<script>
export default {
  pageName: '翻转卡片',
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
// Thanks to https://3dtransforms.desandro.com/card-flip
.scene {
  width: 1000px;
  display: flex;
  justify-content: space-between;
  perspective: 800px;

  .card {
    position: relative;
    width: 240px;
    height: 300px;
    color: white;
    cursor: pointer;
    transition: 1s ease-in-out;
    transform-style: preserve-3d;

    &:hover {
      transform: rotateY(0.5turn);
    }

    .card__face {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      transition: 1s ease-in-out;
      -webkit-box-reflect: below 0
        linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4));
      // [ above | below | right | left ]? <length>? <image>?  方位+偏移量+遮罩层
      img {
        width: 240px;
        height: 300px;
        object-fit: cover;
      }

      &--back {
        transform: rotateY(0.5turn);
      }
    }
  }
}

</style>
