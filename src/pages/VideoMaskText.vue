<template>
  <div>
    <video autoplay muted loop preload poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg">
  <!-- <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" /> -->
  <source src="../assets/images/ocean-small.mp4" />
</video>
<h1>ocean</h1>
  </div>
</template>

<script>
export default {
  pageName: 'video层文字',
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
@font-face {
  font-family: Biko;
  src: url("../assets/images/biko-black.woff");
}

// body {
//   display: flex;
//   height: 100vh;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
// }

video,
h1 {
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
}

video {
  object-fit: cover;
}

h1 {
  font-size: 20vw;
  font-family: Biko, sans-serif;
  font-weight: 700;
  line-height: 100vh;
  text-transform: uppercase;
  text-align: center;
  background: white;
  mix-blend-mode: screen;
}

</style>
