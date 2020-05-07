<template>
  <div  class="black-box">
    <ul class="float-text-menu">
      <li><a href="#" data-text="Home">Home</a></li>
      <li><a href="#" data-text="Archives">Archives</a></li>
      <li><a href="#" data-text="Tags">Tags</a></li>
      <li><a href="#" data-text="Categories">Categories</a></li>
      <li><a href="#" data-text="About">About</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  pageName: '文字跳动',
  data () {
    return {

    }
  },
  mounted () {
    let floatTextMenuLinks = document.querySelectorAll(".float-text-menu li a");
    floatTextMenuLinks.forEach(link => {
      let letters = link.textContent.split("");
      link.textContent = "";
      letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.transitionDelay = `${i / 20}s`;
        span.dataset.text = letter;
        link.append(span);
      });
    });

  }
}
</script>

<style lang='scss' scoped>
.float-text-menu {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  font-size: 16px;
  li {
    a {
      display: flex;
      padding: 6px;
      color: white;
      font-family: Lato, sans-serif;
      text-decoration: none;
      overflow: hidden;
      span {
        position: relative;
        transition:all 0.3s;
        &:before {
          content: attr(data-text);
          position: absolute;
          transform: translateY(130%);
        }
      }
      &:hover {
        color: red;
        span {
          transform: translateY(-130%);
        }
      }
    }
  }
}
</style>
