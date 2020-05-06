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
body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.gauges {
  display: flex;
}

.gauge {
  margin: 1rem;
}
</style>
