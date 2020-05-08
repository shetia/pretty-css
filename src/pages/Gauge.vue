<template>
  <div class="black-box">
    <div class="gauges">
      <a
        class="gauge gauge-primary"
        href="#"
        style="--gauge-value:900;--gauge-max-value:1000;"
      ></a>
      <a
        class="gauge gauge-secondary"
        href="#"
        style="--gauge-value:800;--gauge-max-value:1000;"
      ></a>
      <a
        class="gauge gauge-success"
        href="#"
        style="--gauge-value:700;--gauge-max-value:1000;"
      ></a>
      <a
        class="gauge gauge-info"
        href="#"
        style="--gauge-value:600;--gauge-max-value:1000;"
      ></a>
      <a
        class="gauge gauge-warning"
        href="#"
        style="--gauge-value:500;--gauge-max-value:1000;"
      ></a>
      <a
        class="gauge gauge-danger"
        href="#"
        style="--gauge-value:400;--gauge-max-value:1000;"
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  pageName: '环形进度',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>


// .gauge {
//     --gauge-value: 500;
//     --gauge-max-value: 1000;
//     --percentage: calc(var(--gauge-value) / var(--gauge-max-value) * 100%);
//     --bg-color: white;
//     --gauge-color: var(--primary-color);
//     --gauge-color-lighter: var(--primary-color-lighter);
//     --text-color: black;
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 90px;
//     height: 90px;
//     color: var(--text-color);
//     background: conic-gradient(var(--gauge-color) var(--percentage),var(--gauge-color-lighter) 0);
//     border-radius: 50%;
//     counter-reset: value var(--gauge-value);
//     margin:12px;
//     &::before {
//       position: absolute;
//       content: counter(value);
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       width: 90%;
//       height: 90%;
//       background: var(--bg-color);
//       border-radius: inherit;
//     }
//     &.gauge-primary {
//       --gauge-color: var(--primary-color);
//       --gauge-color-lighter: var(--primary-color-lighter);
//     }
//     &.gauge-secondary {
//       --gauge-color: var(--secondary-color);
//       --gauge-color-lighter: var(--secondary-color-lighter);
//     }
//     &.gauge-success {
//       --gauge-color: var(--success-color);
//       --gauge-color-lighter: var(--success-color-lighter);
//     }
//     &.gauge-info {
//       --gauge-color: var(--info-color);
//       --gauge-color-lighter: var(--info-color-lighter);
//     }
//     &.gauge-warning {
//       --gauge-color: var(--warning-color);
//       --gauge-color-lighter: var(--warning-color-lighter);
//     }
//     &.gauge-danger {
//       --gauge-color: var(--danger-color);
//       --gauge-color-lighter: var(--danger-color-lighter);
//     }
// }
.gauges {
  @include flex-center;
  .gauge{
    margin: 12px;
  }
}

</style>
