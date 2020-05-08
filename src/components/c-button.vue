<template>
  <div class="c-button">
    <!-- 单线 -->
    <button
      :data-text="dataText"
      class="btn btn-ghost btn-border-stroke  btn-text-float-up"
      :class="[type]"
      v-if="mold === 'single'"
    >
      <div class="btn-borders">
        <div class="border-top"></div>
        <div class="border-right"></div>
        <div class="border-bottom"></div>
        <div class="border-left"></div>
      </div>
      <span class="btn-text">
        <slot></slot>
      </span>
    </button>
    <!-- 多线 -->
    <button
      class="mbtn mbtn-ghost mbtn-border-stroke"
      :class="[type]"
      v-else-if="mold === 'multiple'"
    >
      <div class="btn-borders-group">
        <div class="border-top"></div>
        <div class="border-right"></div>
        <div class="border-bottom"></div>
        <div class="border-left"></div>
      </div>
      <div class="btn-borders-group">
        <div class="border-top"></div>
        <div class="border-right"></div>
        <div class="border-bottom"></div>
        <div class="border-left"></div>
      </div>
      <div class="btn-borders-group">
        <div class="border-top"></div>
        <div class="border-right"></div>
        <div class="border-bottom"></div>
        <div class="border-left"></div>
      </div>
      <span class="btn-text">
        <slot></slot>
      </span>
    </button>
    <!-- 闪光 -->
    <button
      class="btn btn-ghost btn-shine"
      :class="[type]"
      v-else-if="mold === 'flash'"
    >
      <slot></slot>
    </button>
    <!-- 彩色 -->
    <button class="new-button button-anon-pen" v-else-if="mold === 'colours'">
      <span>
        <slot></slot>
      </span>
    </button>
    <!-- 滚动 -->
    <button class="rollbtn rollbtn-gradient" v-else-if="mold === 'roll'">
      <span>
        <slot></slot>
      </span>
    </button>
    <!-- 蛇形边框 -->
    <button class="btn btn-snake-border" :class="[type]"  v-else-if="mold === 'snake'">
      <div class="btn-borders">
        <div class="border-top"></div>
        <div class="border-right"></div>
        <div class="border-bottom"></div>
        <div class="border-left"></div>
      </div>
      <span class="btn-text">
        <slot></slot>
      </span>
    </button>
    <!-- 粒子 -->
    <button class="particlebtn  particlebtn-bubbles"  :class="[type]"  v-else-if="mold === 'particle'">
      <slot></slot>
    </button>
    <!-- 其他 -->
    <button class="btn btn-ghost" :class="[type]" v-else>
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  pageName: '线框按钮',
  name: 'cButton',
  props: {
    mold: {
      type: String,
      default: 'single', // single multiple flash colours roll snake particle
    },
    dataText: {
      type: String,
      default: 'start',
    },
    type: {
      type: String,
      default: 'primary',
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.btn {
  --hue: 170;
  --ease-in-duration: 0.25s;
  --ease-in-exponential: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  --ease-out-duration: 0.65s;
  --ease-out-delay: var(--ease-in-duration);
  --ease-out-exponential: cubic-bezier(0.19, 1, 0.22, 1);
  position: relative;
  padding: 1rem 3rem;
  font-size: 1rem;
  line-height: 1.5;
  color: white;
  text-decoration: none;
  background-color: hsl(var(--hue), 100%, 41%);
  border: 1px solid hsl(var(--hue), 100%, 41%);
  outline: transparent;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: 0.25s;
  &:hover {
    background: hsl(var(--hue), 100%, 31%);
  }

  &.primary {
    --hue: 171;
  }
  &.danger {
    --hue: 20;
  }
  &.info {
    --hue: 30;
  }
  &.purple {
    --hue: 240;
  }
  &.blue {
    --hue: 190;
  }
  &.yellow {
    --hue: 60;
  }
  &.pink {
    --hue: 330;
  }
  &-ghost {
    color: hsl(var(--hue), 100%, 41%);
    background-color: transparent;
    border-color: hsl(var(--hue), 100%, 41%);

    &:hover {
      color: white;
    }
  }

  &-border-stroke {
    border-color: hsla(var(--hue), 100%, 41%, 0.35);

    .btn-borders {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .border-top {
        position: absolute;
        top: 0;
        width: 100%;
        height: 1px;
        background: hsl(var(--hue), 100%, 41%);
        transform: scaleX(0);
        transform-origin: left;
      }

      .border-right {
        position: absolute;
        right: 0;
        width: 1px;
        height: 100%;
        background: hsl(var(--hue), 100%, 41%);
        transform: scaleY(0);
        transform-origin: bottom;
      }

      .border-bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: hsl(var(--hue), 100%, 41%);
        transform: scaleX(0);
        transform-origin: left;
      }

      .border-left {
        position: absolute;
        left: 0;
        width: 1px;
        height: 100%;
        background: hsl(var(--hue), 100%, 41%);
        transform: scaleY(0);
        transform-origin: bottom;
      }

      // when unhover, ease-out left, bottom; ease-in right, top

      .border-left {
        transition: var(--ease-out-duration) var(--ease-out-delay)
          var(--ease-out-exponential);
      }
      .border-bottom {
        transition: var(--ease-out-duration) var(--ease-out-delay)
          var(--ease-out-exponential);
      }

      .border-right {
        transition: var(--ease-in-duration) var(--ease-in-exponential);
      }
      .border-top {
        transition: var(--ease-in-duration) var(--ease-in-exponential);
      }
    }

    &:hover {
      color: hsl(var(--hue), 100%, 41%);
      background: transparent;

      .border-top,
      .border-bottom {
        transform: scaleX(1);
      }
      .border-left,
      .border-right {
        transform: scaleY(1);
      }

      // when hover, ease-in left, bottom; ease-out right, top

      .border-left {
        transition: var(--ease-in-duration) var(--ease-in-exponential);
      }
      .border-bottom {
        transition: var(--ease-in-duration) var(--ease-in-exponential);
      }

      .border-right {
        transition: var(--ease-out-duration) var(--ease-out-delay)
          var(--ease-out-exponential);
      }
      .border-top {
        transition: var(--ease-out-duration) var(--ease-out-delay)
          var(--ease-out-exponential);
      }
    }
  }

  &-text-float-up {
    &::after {
      position: absolute;
      content: attr(data-text);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transform: translateY(35%);
      transition: 0.25s ease-out;
    }

    // when hover, ease-in top-text; ease-out bottom-text

    .btn-text {
      display: block;
      transition: 0.75s 0.1s var(--ease-out-exponential);
    }
    &:hover {
      // when hover, ease-in bottom-text; ease-out top-text
      .btn-text {
        opacity: 0;
        transform: translateY(-25%);
        transition: 0.25s ease-out;
      }

      &::after {
        opacity: 1;
        transform: translateY(0);
        transition: 0.75s 0.1s var(--ease-out-exponential);
      }
    }
  }

  // 闪光
  &-shine {
    color: hsl(var(--hue), 100%, 31%);

    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        hsla(var(--hue), 100%, 41%, 0.5),
        transparent
      );
      transform: translateX(-100%);
      transition: 0.6s;
    }

    &:hover {
      background: transparent;
      box-shadow: 0 0 20px 10px hsla(var(--hue), 100%, 41%, 0.5);
    }

    &:hover::before {
      transform: translateX(100%);
    }
  }
  // 蛇形
      // 蛇形
    &-snake-border {
      .btn-borders {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .border-top {
          position: absolute;
          top: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, transparent, white);
          animation: moveHorizontally 2s linear infinite;
        }

        .border-right {
          position: absolute;
          right: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, white);
          animation: moveVertically 2s 1s linear infinite;
        }

        .border-bottom {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(to left, transparent, white);
          animation: moveHorizontally 2s linear reverse infinite;
        }

        .border-left {
          position: absolute;
          left: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(to top, transparent, white);
          animation: moveVertically 2s 1s linear reverse infinite;
        }
      }
    }
}
// 蛇形动画

@keyframes moveHorizontally {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(100%);
  }
}

@keyframes moveVertically {
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(100%);
  }
}

.c-button {
  display: inline-block;
  margin: 12px;
  .mbtn {
    --hue: attr(data-hue);
    --ease-in-duration: 0.25s;
    --ease-out-duration: 0.65s;
    --ease-out-delay: var(--ease-in-duration);
    position: relative;
    padding: 1rem 3rem;
    font-size: 1rem;
    line-height: 1.5;
    color: white;
    text-decoration: none;
    background-color: hsl(var(--hue), 100%, 41%);
    border: 1px solid hsl(var(--hue), 100%, 41%);
    outline: transparent;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    transition: 0.25s;

    &:hover {
      background: hsl(var(--hue), 100%, 31%);
    }

    &.primary {
      --hue: 171;
    }
    &.danger {
      --hue: 20;
    }
    &.info {
      --hue: 30;
    }
    &.purple {
      --hue: 240;
    }
    &.blue {
      --hue: 190;
    }
    &.yellow {
      --hue: 60;
    }
    &.pink {
      --hue: 330;
    }
    &-ghost {
      color: hsl(var(--hue), 100%, 41%);
      background-color: transparent;
      border-color: hsl(var(--hue), 100%, 41%);

      &:hover {
        color: white;
      }
    }

    &-border-stroke {
      border-color: transparent;

      .btn-borders-group {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        border: 1px solid hsla(var(--hue), 100%, 41%, 0.35);

        &:nth-child(1) {
          left: -8px;
          padding: 0 8px;
        }

        &:nth-child(2) {
          top: -8px;
          padding: 8px 0;
        }

        &:nth-child(3) {
          top: -4px;
          left: -4px;
          padding: 4px;
        }

        .border-top {
          position: absolute;
          top: 0;
          width: 100%;
          height: 1px;
          background: hsl(var(--hue), 100%, 41%);
          transform: scaleX(0);
          transform-origin: left;
        }

        .border-right {
          position: absolute;
          right: 0;
          width: 1px;
          height: 100%;
          background: hsl(var(--hue), 100%, 41%);
          transform: scaleY(0);
          transform-origin: bottom;
        }

        .border-bottom {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 1px;
          background: hsl(var(--hue), 100%, 41%);
          transform: scaleX(0);
          transform-origin: left;
        }

        .border-left {
          position: absolute;
          left: 0;
          width: 1px;
          height: 100%;
          background: hsl(var(--hue), 100%, 41%);
          transform: scaleY(0);
          transform-origin: bottom;
        }

        // when unhover, ease-in top, right; ease-out bottom, left

        .border-left {
          transition: var(--ease-out-duration) var(--ease-out-delay)
            cubic-bezier(0.2, 1, 0.2, 1);
        }

        .border-bottom {
          transition: var(--ease-out-duration) var(--ease-out-delay)
            cubic-bezier(0.2, 1, 0.2, 1);
        }

        .border-right {
          transition: var(--ease-in-duration) cubic-bezier(1, 0, 0.8, 0);
        }

        .border-top {
          transition: var(--ease-in-duration) cubic-bezier(1, 0, 0.8, 0);
        }
      }

      &:hover {
        color: hsl(var(--hue), 100%, 41%);
        background: transparent;

        .border-top,
        .border-bottom {
          transform: scaleX(1);
        }

        .border-left,
        .border-right {
          transform: scaleY(1);
        }

        // when hover, ease-in bottom, left; ease-out top, right

        .border-left {
          transition: var(--ease-in-duration) cubic-bezier(1, 0, 0.8, 0);
        }

        .border-bottom {
          transition: var(--ease-in-duration) cubic-bezier(1, 0, 0.8, 0);
        }

        .border-right {
          transition: var(--ease-out-duration) var(--ease-out-delay)
            cubic-bezier(0.2, 1, 0.2, 1);
        }

        .border-top {
          transition: var(--ease-out-duration) var(--ease-out-delay)
            cubic-bezier(0.2, 1, 0.2, 1);
        }
      }
    }
  }
}

// 彩色
.button-anon-pen {
  border: none;
  padding: 0;
  text-align: center;
  position: relative;
  background-image: linear-gradient(
    115deg,
    #4fcf70,
    #fad648,
    #a767e5,
    #12bcfe,
    #44ce7b
  );
  border-radius: 6px;
  box-sizing: border-box;
  color: #fff;
  display: block;
  z-index: 2;
  overflow: hidden;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  span {
    padding: 8px 16px;
    display: inline-block;
    font-size: 14px;
    align-items: center;
    background: #444;
    border-radius: 3px;
    display: block;
    justify-content: center;
    margin: 3px;
    box-sizing: border-box;
    height: 100%;
    transition: background 0.5s ease;
  }
  &:hover {
    animation: Sidebar_rainbowBorder-dkMw3 0.5s linear infinite;
  }
}
@keyframes Sidebar_rainbowBorder-dkMw3 {
  0%,
  100% {
    background-image: linear-gradient(
      115deg,
      #4fcf70,
      #fad648,
      #a767e5,
      #12bcfe
    );
  }
  25% {
    background-image: linear-gradient(
      115deg,
      #fad648,
      #a767e5,
      #12bcfe,
      #4fcf70
    );
  }
  50% {
    background-image: linear-gradient(
      115deg,
      #a767e5,
      #12bcfe,
      #4fcf70,
      #fad648
    );
  }
  75% {
    background-image: linear-gradient(
      115deg,
      #12bcfe,
      #4fcf70,
      #fad648,
      #a767e5
    );
  }
}

// 滚动
.rollbtn {
  position: relative;
  padding: 8px 16px;
  font-family: Lato, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: black;
  text-decoration: none;
  background-color: white;
  border: transparent;
  outline: transparent;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  animation: glow 8s linear infinite;
  z-index: 2;
  span {
    z-index: 1;
    position: relative;
  }
  &-gradient {
    color: white;
    background: linear-gradient(90deg, #00dbde, #fc00ff, #00dbde);
    background-size: 300%;
    border-radius: 2em;
    z-index: 1;
    &::before {
      position: absolute;
      content: '';
      top: -5px;
      left: -5px;
      bottom: -5px;
      right: -5px;
      z-index: 0;
      background: inherit;
      background-size: inherit;
      border-radius: 4em;
      opacity: 0;
      transition: 0.5s;
    }
    &:hover {
      &:before {
        opacity: 1;
        filter: blur(10px);
        animation: glow 8s linear infinite;
      }
    }
  }
}

@keyframes glow {
  to {
    background-position: 300%;
  }
}

// 粒子
@function sample($list) {
  @return nth($list, random(length($list)));
}

@function bubbles($color, $count: 16) {
  $bubbles: ();
  // define your own bubbles here!
  $bubble-types: (
    radial-gradient(circle, $color 20%, transparent 20%),
    radial-gradient(circle, transparent 20%, $color 20%, transparent 30%)
  );
  @for $i from 1 through $count {
    $bubbles: append($bubbles, sample($bubble-types), comma);
  }
  @return $bubbles;
}

@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}

@function random_sizes($count: 16) {
  $sizes: ();
  @for $i from 1 through $count {
    $sizes: append(
      $sizes,
      (random_range(10, 20) * 1%) (random_range(10, 20) * 1%),
      comma
    );
  }
  @return $sizes;
}

.particlebtn {
  --hue: 190;
  --btn-bg-color: hsl(var(--hue), 100%, 50%);
  --btn-bg-color-darker: hsl(var(--hue), 100%, 45%);
  position: relative;
  padding: 0.75rem 1.5rem;
  margin: 1rem;
  font-size: 1rem;
  font-family: Lato, sans-serif;
  line-height: 1.5;
  color: white;
  text-decoration: none;
  background-color: var(--btn-bg-color);
  border: 1px solid var(--btn-bg-color);
  border-radius: 4px;
  box-shadow:
  0 0.1px 0.7px hsl(var(--hue), 50%, 50%),
  0 0.1px 1.7px hsl(var(--hue), 30%, 50%),
  0 0.3px 3.1px hsl(var(--hue), 100%, 50%),
  0 0.4px 5.6px hsl(var(--hue), 60%, 50%),
  0 0.8px 10.4px hsl(var(--hue), 10%, 50%),
  0 2px 25px hsl(var(--hue), 80%, 50%)
;
  outline: transparent;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: 0.25s;

  &.pink {
    --hue: 330;
  }
  &.primary {
    --hue: 171;
  }
  &.danger {
    --hue: 20;
  }
  &.info {
    --hue: 30;
  }
  &.purple {
    --hue: 240;
  }
  &.blue {
    --hue: 190;
  }
  &.yellow {
    --hue: 60;
  }
  &-bubbles {
    overflow: visible;
    transition: transform ease-in 0.1s, background-color ease-in 0.1s,
      box-shadow ease-in 0.25s;

    &::before {
      position: absolute;
      content: "";
      left: -2em;
      right: -2em;
      top: -2em;
      bottom: -2em;
      transition: ease-in-out 0.5s;
      background-repeat: no-repeat;
      background-image: bubbles(var(--btn-bg-color));
      background-size: random_sizes();
      background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%,
        65% 30%, 80% 32%, 15% 60%, 83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%,
        64% 70%, 80% 71%;
      animation: bubbles ease-in-out 0.75s forwards;
    }

    &:active {
      transform: scale(0.95);
      background: var(--btn-bg-color-darker);

      &::before {
        // when the clicked mouse is up, trigger the animation.
        animation: none;
        background-size: 0;
      }
    }
  }
}

@keyframes bubbles {
  0% {
    background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%,
      65% 30%, 80% 32%, 15% 60%, 83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%,
      64% 70%, 80% 71%;
  }

  50% {
    background-position: 10% 44%, 0% 20%, 15% 5%, 30% 0%, 42% 0%, 62% -2%,
      75% 0%, 95% -2%, 0% 80%, 95% 55%, 7% 100%, 24% 100%, 41% 100%, 55% 95%,
      68% 96%, 95% 100%;
  }

  100% {
    background-position: 5% 44%, -5% 20%, 7% 5%, 23% 0%, 37% 0, 58% -2%, 80% 0%,
      100% -2%, -5% 80%, 100% 55%, 2% 100%, 23% 100%, 42% 100%, 60% 95%, 70% 96%,
      100% 100%;
    background-size: 0% 0%;
  }
}

</style>
