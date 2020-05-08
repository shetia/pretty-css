<template>
  <div class="Masonry-callery">
    <div class="masonry">
      <div class="masonry__item block-reveal">
        <img src="@/assets/images/falls/1.jpg" alt="img" />
      </div>
      <div class="masonry__item block-reveal">
        <img src="@/assets/images/falls/2.jpg" alt="img" />
      </div>
      <div class="masonry__item block-reveal">
        <img src="@/assets/images/falls/3.jpg" alt="img" />
      </div>
      <div class="masonry__item block-reveal">
        <img src="@/assets/images/falls/4.jpg" alt="img" />
      </div>
      <div class="masonry__item block-reveal">
        <img src="@/assets/images/falls/5.jpg" alt="img" />
      </div>
      <div class="masonry__item block-reveal">
        <img src="@/assets/images/falls/6.jpg" alt="img" />
      </div>
      <div class="masonry__item block-reveal">
        <img src="@/assets/images/falls/7.jpg" alt="img" />
      </div>
      <div class="masonry__item block-reveal">
        <img src="@/assets/images/falls/8.jpg" alt="img" />
      </div>
      <div class="masonry__item block-reveal">
        <img src="@/assets/images/falls/9.jpg" alt="img" />
      </div>
      <div class="masonry__item block-reveal">
        <img src="@/assets/images/falls/10.jpg" alt="img" />
      </div>
      <div class="masonry__item block-reveal">
        <img src="@/assets/images/falls/11.jpg" alt="img" />
      </div>
      <div class="masonry__item block-reveal">
        <img src="@/assets/images/falls/12.jpg" alt="img" />
      </div>
      <div class="masonry__item block-reveal">
        <img src="@/assets/images/falls/13.jpg" alt="img" />
      </div>
      <div class="masonry__item block-reveal">
        <img src="@/assets/images/falls/14.jpg" alt="img" />
      </div>
      <div class="masonry__item block-reveal">
        <img src="@/assets/images/falls/15.jpg" alt="img" />
      </div>
      <div class="masonry__item block-reveal">
        <img src="@/assets/images/falls/16.jpg" alt="img" />
      </div>
      <div class="masonry__item block-reveal">
        <img src="@/assets/images/falls/17.jpg" alt="img" />
      </div>
      <div class="masonry__item block-reveal">
        <img src="@/assets/images/falls/18.jpg" alt="img" />
      </div>
    </div>
    <div class="loading" v-if="loading">Loading</div>
  </div>
</template>

<script>
export default {
  pageName: '瀑布流',
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    const sizes = ['short', 'tall', 'taller']
    const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
    let masonry = document.querySelector('.masonry')
    masonry.style.opacity = '0'
    let masonryItems = document.querySelectorAll('.masonry__item')
    masonryItems.forEach((item, i) => {
      item.style.setProperty('--i', `${i + 1}`)
      item.setAttribute(sample(sizes), '')
    })
    this.$nextTick(() => {
      masonry.style.opacity = '1'
      this.loading = false
    })
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.Masonry-callery {
  display: flex;
  justify-content: center;
  align-items: center;
}
.masonry {
  --block-color: #434a54;
  --ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  grid-auto-rows: 50px;
  gap: 16px;
  width: 960px;

  &__item {
    position: relative;

    &[short] {
      grid-row: span 2;
    }

    &[tall] {
      grid-row: span 3;
    }

    &[taller] {
      grid-row: span 4;
    }
  }
  .block-reveal {
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      transform: scale(0);
      animation: scale-in 0.9s calc(0.4s + 0.1s * var(--i))
        var(--ease-out-cubic) forwards;
    }

    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      background: var(--block-color);
      opacity: 0;
      transform: translateX(101%);
      animation: slide-left 0.8s calc(0.1s * var(--i)) var(--ease-out-cubic)
        forwards;
    }
  }
}

@keyframes slide-left {
  // use this trick to fix ios bug.
  0.001% {
    opacity: 1;
  }

  50% {
    opacity: 1;
    transform: translateX(0);
  }

  100% {
    opacity: 1;
    transform: translateX(-101%);
  }
}

@keyframes scale-in {
  from {
    transform: scale(0.8);
  }

  to {
    transform: scale(1);
  }
}

</style>
