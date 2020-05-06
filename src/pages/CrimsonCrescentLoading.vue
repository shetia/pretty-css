<template>
  <div class="black-box">
    <div class="loading"></div>
  </div>
</template>

<script>
export default {
  pageName: '猩红之月',
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
// body {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: black;
// }

.loading {
  position: relative;
  width: 8em;
  height: 8em;
  background: transparent;
  border-radius: 50%;
  box-shadow: inset 0.5em -0.5em crimson;
  animation: spin 2s linear infinite;
  // overflow: hidden;
  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: tr;
    border-radius: inherit;
    box-shadow: inherit;
  }

  &::before {
    
    filter: blur(5px);
  }

  &::after {
    filter: blur(10px);
  }
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}

</style>
