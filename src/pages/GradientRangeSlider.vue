<template>
  <div class="black-box">
    <input
      type="range"
      name="range"
      class="gradient-range"
      value="0"
      min="0"
      max="100"
      v-model="value"
    />
    {{value}}
  </div>
</template>

<script>
export default {
  pageName: '滑块',
  data() {
    return {
      value: 0
    }
  },
  mounted() {
    const colorStopMap = {
      green: 0,
      blue: 20,
      yellow: 40,
      crimson: 60,
    }
    let gradientRange = document.querySelector('.gradient-range')
    gradientRange.classList.add(Object.entries(colorStopMap)[0][0])
    gradientRange.addEventListener('input', () => {
      for (const colorStop of Object.entries(colorStopMap)) {
        let [colorClass, colorStopValue] = colorStop
        if (Number(gradientRange.value) >= colorStopValue) {
          gradientRange.classList.add(colorClass)
        } else {
          gradientRange.classList.remove(colorClass)
        }
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.gradient-range {
  $slider-colors: (
    (green, #70c1b3, 0%),
    (blue, #247ba0, 25%),
    (yellow, #f3ffbd, 50%),
    (crimson, #ff1654, 100%)
  );
  $gradient-color: (45deg);
  @each $color, $rgb, $color-stop in $slider-colors {
    $gradient-color: append($gradient-color, $rgb $color-stop, comma);
  }

  width: 16em;
  height: 2px;
  background: linear-gradient($gradient-color);
  appearance: none;
  outline: none;

  &::-webkit-slider-thumb {
    width: 2em;
    height: 2em;
    background: #0a112d;
    border: 2px solid;
    border-radius: 50%;
    appearance: none;
    cursor: grab;
    transition: border 1s;

    &:active {
      cursor: grabbing;
    }
  }

  @each $color, $rgb, $color-stop in $slider-colors {
    &.#{$color}::-webkit-slider-thumb {
      border-color: $rgb;
    }
  }
}
</style>
