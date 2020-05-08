<template>
  <div class="isometric">
    <div class="layer">
      <template v-for="(item, index) in 4" >
        <img src="@/assets/images/gsETfHjRv9Ma7Bn.webp" :key="index" alt="img" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  pageName: '层叠',
  data() {
    return {}
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.isometric{
  display: flex;
  justify-content: center;
  align-items: center;
}
.layer {
  position: relative;
  width: 360px;
  height: 640px;
  background: rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  transform: rotateX(45deg) rotateZ(-45deg) scale(0.5);

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    display:block;
  }

  &:hover {
    @for $i from 1 through 4 {
      img:nth-child(#{$i}) {
        transform: translateZ(40px * $i);
        opacity: 0.2 + 0.2 * $i;
      }
    }
  }
}
</style>
