<template>
  <div>
    <button class="login">
      <span>login</span>
      <div class="loader">
        <div class="line-scale-pulse-out-rapid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <svg class="tick" width="30px" height="30px" stroke="white" fill="none">
        <polyline points="2,10 12,18, 28,2"></polyline>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  pageName: '登录按钮',
  data() {
    return {}
  },
  mounted() {
    let sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))
    let btn = document.querySelector('.login')
    btn.addEventListener('click', async () => {
      btn.classList.add('loading')
      await sleep(3000)
      btn.classList.add('success')
    })
  },
}
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  width: 10em;
  height: 4em;
  color: #eee;
  font-family: Lato, sans-serif;
  font-size: 1.5em;
  text-align: center;
  text-transform: uppercase;
  background: #1f1e1e;
  border: none;
  border-radius: 4em;
  outline: none;
  box-shadow: 0 1.4px 2.8px rgba(0, 0, 0, 0.141),
    0 3.3px 6.7px rgba(0, 0, 0, 0.202), 0 6.3px 12.5px rgba(0, 0, 0, 0.25),
    0 11.2px 22.3px rgba(0, 0, 0, 0.298), 0 20.9px 41.8px rgba(0, 0, 0, 0.359),
    0 50px 100px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.5s;

  .loader {
    position: absolute;
    top: 1.3em;
    right: 0.5em;
    width: 3em;
    height: 0.5em;
    opacity: 0;
    transition: opacity 0.3s 0.3s;

    .line-scale-pulse-out-rapid div {
      display: inline-flex;
      width: 4px;
      height: 35px;
      margin: 2px;
      border-radius: 2px;
      background-color: white;
      animation: line-scale-pulse-out-rapid 0.9s -0.5s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78);

      &:nth-child(2),
      &:nth-child(4) {
        animation-delay: -0.25s;
      }

      &:nth-child(1),
      &:nth-child(5) {
        animation-delay: 0s;
      }
    }
  }

  .tick {
    position: absolute;
    left: 1.5em;
    bottom: 1.2em;
    opacity: 0;
    stroke: #eee;
    stroke-width: 5px;
    stroke-dasharray: 36px;
    stroke-dashoffset: 36px;
    transition: opacity 0.3s;
  }

  &.loading {
    width: 4em;
    color: transparent;
    pointer-events: none;
    user-select: none;

    .loader {
      opacity: 1;
    }
  }

  &.success {
    .loader {
      opacity: 0;
    }

    .tick {
      opacity: 1;
      animation: show-tick 0.8s 0.4s forwards;
    }
  }
}

@keyframes line-scale-pulse-out-rapid {
  from,
  90% {
    transform: scaleY(1);
  }

  80% {
    transform: scaleY(0.3);
  }
}

@keyframes show-tick {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
