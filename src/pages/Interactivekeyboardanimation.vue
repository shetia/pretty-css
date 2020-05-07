<template>
  <div class="black-box">
    <div class="case">
      <!-- First row -->
      <div class="key" data-key="escape">esc</div>
      <div class="key" data-key="1"></div>
      <div class="key" data-key="2"></div>
      <div class="key" data-key="3"></div>
      <div class="key" data-key="4"></div>
      <div class="key" data-key="5"></div>
      <div class="key" data-key="6"></div>
      <div class="key" data-key="7"></div>
      <div class="key" data-key="8"></div>
      <div class="key" data-key="9"></div>
      <div class="key" data-key="0"></div>
      <div class="key" data-key="-"></div>
      <div class="key" data-key="="></div>
      <div class="key xxl" data-key="backspace"></div>
      <div class="key" data-key="help">ins</div>
      <div class="key" data-key="home"></div>
      <!-- Second row -->
      <div class="key large" data-key="tab"></div>
      <div class="key" data-key="q"></div>
      <div class="key" data-key="w"></div>
      <div class="key" data-key="e"></div>
      <div class="key" data-key="r"></div>
      <div class="key" data-key="t"></div>
      <div class="key" data-key="y"></div>
      <div class="key" data-key="u"></div>
      <div class="key" data-key="i"></div>
      <div class="key" data-key="o"></div>
      <div class="key" data-key="p"></div>
      <div class="key" data-key="["></div>
      <div class="key" data-key="]"></div>
      <div class="key large" data-key="\"></div>
      <div class="key" data-key="delete">del</div>
      <div class="key" data-key="end"></div>
      <!-- Third row -->
      <div class="key xl" data-key="capslock">caps</div>
      <div class="key" data-key="a"></div>
      <div class="key" data-key="s"></div>
      <div class="key" data-key="d"></div>
      <div class="key" data-key="f"></div>
      <div class="key" data-key="g"></div>
      <div class="key" data-key="h"></div>
      <div class="key" data-key="j"></div>
      <div class="key" data-key="k"></div>
      <div class="key" data-key="l"></div>
      <div class="key" data-key=";"></div>
      <div class="key" data-key="'"></div>
      <div class="key xl" data-key="enter">return</div>
      <div class="key" data-key="f15">pause</div>
      <div class="key" data-key="pageup">pg up</div>
      <!-- Fourth row -->
      <div class="key xxl" data-key="shiftleft">shift</div>
      <div class="key" data-key="z"></div>
      <div class="key" data-key="x"></div>
      <div class="key" data-key="c"></div>
      <div class="key" data-key="v"></div>
      <div class="key" data-key="b"></div>
      <div class="key" data-key="n"></div>
      <div class="key" data-key="m"></div>
      <div class="key" data-key=","></div>
      <div class="key" data-key="."></div>
      <div class="key" data-key="/"></div>
      <div class="key xxl" data-key="shiftright">shift</div>
      <div class="key" data-key="arrowup">▲</div>
      <div class="key" data-key="pagedown">pg dn</div>
      <!-- Fifth row -->
      <div class="key medium" data-key="controlleft">ctrl</div>
      <div class="key medium" data-key="meta">win</div>
      <div class="key medium" data-key="altleft">alt</div>
      <div class="key huge" data-key=" "></div>
      <div class="key medium" data-key="altright">alt</div>
      <div class="key medium" data-key="fn"></div>
      <div class="key medium" data-key="controlright">ctrl</div>
      <div class="key" data-key="arrowleft">◀</div>
      <div class="key" data-key="arrowdown">▼</div>
      <div class="key" data-key="arrowright">▶</div>
    </div>
  </div>
</template>

<script>
export default {
  pageName: '发光键盘',
  data() {
    return {}
  },
  mounted() {
    const keysArr = [...document.querySelectorAll('.key')]

    const getKey = (event) => {
      const parsedKey = event.key.toLowerCase().replace('\\', '\\\\')
      const parsedCode = event.code.toLowerCase()
      const element =
        document.querySelector(`[data-key="${parsedCode}"]`) ||
        document.querySelector(`[data-key="${parsedKey}"]`)

      return element
    }

    document.addEventListener('keydown', (event) => {
      const key = getKey(event)
      if (key) {
        key.classList.add('active')
      }
    })

    document.addEventListener('keyup', (event) => {
      const key = getKey(event)
      if (key) {
        key.classList.remove('active')
      }
    })

    document.addEventListener('mousedown', (event) => {
      if (event.target.dataset.key) {
        event.target.classList.add('active')
      }
    })

    document.addEventListener('mouseup', (event) => {
      if (event.target.dataset.key) {
        event.target.classList.remove('active')
      }
    })

    document.addEventListener('touchstart', (event) => {
      if (event.target.dataset.key) {
        event.target.classList.add('active')
      }
    })

    document.addEventListener('touchend', (event) => {
      if (event.target.dataset.key) {
        event.target.classList.remove('active')
      }
    })

    const animate = (element) => {
      const hueColor = Math.floor(Math.random() * (360 - 0 + 1)) + 0
      const color = `hsla(${hueColor}, 100%, 50%, 50%)`
      const textColor = `hsl(${hueColor}, 100%, 50%)`
      const textShadow = `0 0 0.80em ${color}, 0 0 1.60em ${color}, 0 0 4em ${color}`
      const boxShadow = `-3px 3px 4px ${color}, 3px -3px 4px ${color}, 3px 3px 4px ${color}, -3px -3px 4px ${color}, 0 0 10px ${color}`

      const keyIndex = keysArr.indexOf(element)
      const animatedKeysRight = keysArr.slice(keyIndex)
      const animatedKeysLeft = keysArr.slice(0, keyIndex)

      const transitionHandler = (event) => {
        event.target.style.boxShadow = 'none'
        event.target.style.color = null
        event.target.style.textShadow = 'none'
        event.target.removeEventListener('transitionend', transitionHandler)
      }

      animatedKeysRight.forEach((keyEl, i) => {
        setTimeout(() => {
          keyEl.addEventListener('transitionend', transitionHandler)
          keyEl.style.boxShadow = boxShadow
          keyEl.style.color = textColor
          keyEl.style.textShadow = textShadow
        }, i * 35)
      })

      animatedKeysLeft.forEach((keyEl, j) => {
        const i = animatedKeysLeft.length - j
        setTimeout(() => {
          keyEl.addEventListener('transitionend', transitionHandler)
          keyEl.style.boxShadow = boxShadow
          keyEl.style.color = textColor
          keyEl.style.textShadow = textShadow
        }, i * 35)
      })
    }

    document.addEventListener('keydown', (event) => {
      const key = getKey(event)

      if (key) {
        animate(key)
      }
    })

    document.addEventListener('click', (event) => {
      if (event.target.dataset.key) {
        animate(event.target)
      }
    })

    window.addEventListener('load', () => {
      const key = document.querySelector(`[data-key="enter"]`)
      animate(key)
    })
  },
}
</script>

<style lang="scss" scoped>


.case {
  background-color: #463973;
  border-color: #2e2640;
  border-radius: 5px;
  border-style: solid;
  border-width: 8px 10px 15px 10px;
  display: inline-grid;
  grid-template-columns: repeat(36, 1fr);
  grid-template-rows: repeat(5, 1fr);
  height: 320px;
  padding: 5px;
  user-select: none;
  width: 1000px;
}

.key {
  border-color: #382e59 #2e2640;
  border-radius: 2px;
  border-style: solid;
  border-width: 3px 5px 8px 5px;
  color: #bbadd9;
  display: block;
  font-family: sans-serif;
  font-size: 9px;
  font-weight: 800;
  grid-column-end: span 2;
  margin: 3px;
  padding-top: 2px;
  padding: 5px;
  text-align: center;
  text-transform: uppercase;
  transition: all 50ms ease-out;
  will-change: box-shadow, color, text-shadow;
}

.key:empty::before {
  content: attr(data-key);
}

.active {
  transform: perspective(1200px) translateZ(-90px);
}

.medium {
  grid-column-end: span 3;
}

.large {
  grid-column-end: span 4;
}

.xl {
  grid-column-end: span 5;
}

.xxl {
  grid-column-end: span 6;
}

.xxxl {
  grid-column-end: 7;
}

.huge {
  grid-column-end: span 12;
}
</style>
