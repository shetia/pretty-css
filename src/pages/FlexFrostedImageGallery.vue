<template>
  <div class="black-box">
    <main>
      <section class="slides">
        <div class="slide">
          <div class="content">
            <h2>Slide 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div class="slide">
          <div class="content">
            <h2>Slide 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div class="slide">
          <div class="content">
            <h2>Slide 3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div class="slide">
          <div class="content">
            <h2>Slide 4</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div class="slide">
          <div class="content">
            <h2>Slide 5</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  pageName: '弹性画廊',
  data() {
    return {}
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>


.slides {
  $slide-bgs: url('~@/assets/images/cnKl1Ykd5rZCVwm.jpg'),
              url('~@/assets/images/uXF1Kx7lzELB6wf.jpg'),
              url('~@/assets/images/FLnzi5Kq4tkRZSm.jpg'),
              url('~@/assets/images/buDT4YS6zUMfHst.jpg'),
              url('~@/assets/images/cqyJiYlRwnTeHmj.jpg');

  display: flex;
  width: 100%;
  height: 600px;

  .slide {
    position: relative;
    flex: 1;
    cursor: pointer;
    filter: grayscale(1);
    transition: 0.5s ease-in-out;

    @for $i from 1 through length($slide-bgs) {
      &:nth-child(#{$i}) {
        background: nth($slide-bgs, $i) center / cover;

        &:hover {
          flex-grow: length($slide-bgs);
          filter: grayscale(0);

          .content {
            opacity: 1;
            transform: scaleX(1);
            transition: 0.5s 0.4s;
          }
        }
      }
    }

    .content {
      position: absolute;
      bottom: 0;
      margin: 2.5em;
      padding: 2em;
      font-family: Lora, serif;
      text-shadow: 0 2px 2px black;
      color: white;
      box-shadow: 0 0.3px 0.7px rgba(0, 0, 0, 0.126),
        0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224),
        0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(2px);
      opacity: 0;
      transform: scaleX(0);
      transition: 0.5s;
    }
  }
}
</style>
