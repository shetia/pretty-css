<template>
  <div>
    <ul>
      <li><a href="#">home</a></li>
      <li><a href="#">archives</a></li>
      <li><a href="#">tags</a></li>
      <li><a href="#">categories</a></li>
      <li><a href="#">about</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  pageName: '填充文本',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
// https://picular.co/bluemoon

@import url('https://fonts.googleapis.com/css?family=Raleway:400,400i,700');

body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #1a1e23;
}

ul {
  display: flex;
  flex-direction: column;
  align-items: start;
  list-style-type: none;

  li {
    padding: 6px 0;

    a {
      --fill-color: #198ce6;
      position: relative;
      display: block;
      padding: 4px 0;
      font-family: Raleway, sans-serif;
      font-size: 3em;
      font-weight: 700;
      text-decoration: none;
      text-transform: uppercase;
      -webkit-text-stroke: 2px var(--fill-color);
      background: linear-gradient(
        90deg,
        var(--fill-color) 0%,
        var(--fill-color) 100%
      );
      background-size: 0;
      background-position: left;
      background-repeat: no-repeat;
      color: transparent;
      background-clip: text;
      transition: 0.5s linear;

      &:hover {
        background-size: 100%;
      }
    }
  }
}
</style>
