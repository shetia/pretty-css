<template>
  <div class="black-box elastic-love">
    <div class="love-icon">
      <input type="checkbox" id="like-toggle" />
      <label for="like-toggle" class="heart"> </label>
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="ring"></div>
    </div>
  </div>
</template>

<script>
export default {
  pageName: '弹性爱心',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.elastic-love{
display: flex;
  justify-content: center;
  align-items: center;
}
.love-icon {
  --heart-color: #bdc3c7;
  --heart-active-color: var(--danger-color);
  --bg-color: white;

  position: relative;
  width: 16px;
  height: 16px;

  input {
    position: absolute;
    opacity: 0;

    &:checked {
      & ~ * {
        --heart-color: var(--heart-active-color);
      }

      & ~ {
        .heart {
          animation: scale-out-elastic 1.2s ease-out reverse forwards;
        }

        .lines {
          .line::before {
            animation: slide-left-right 0.4s ease-in forwards;
          }
        }

        .ring {
          background: var(--heart-color);
          animation: scale-out-bigger 0.75s cubic-bezier(0, 1, 0.5, 1) forwards;

          &::before {
            animation: scale-out 0.75s cubic-bezier(0, 1, 0.5, 1) forwards;
          }
        }
      }
    }
  }

  .heart {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--heart-color);
    cursor: pointer;
    transform: rotate(-45deg);
    
    &::before,
    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: 50%;
    }

    &::before {
      top: -50%;
      left: 0;
    }

    &::after {
      top:0;
      right: -50%;
    }
  }

  .lines {
    position: absolute;
    top: 4px;
    left:8px;
    z-index: 1;
    width: 16px;
    height: 16px;
    pointer-events: none;
    .line {
      position: absolute;
      top: 0;
      left: 0;
      width: 16px;
      height: 1px;
      opacity: 0.6;

      @for $i from 1 through 6 {
        &:nth-child(#{$i}) {
          transform: rotate($i * 60deg + 30deg) translate(36px);
        }
      }

      &::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--heart-color);
        transform: scaleX(0);
        transform-origin: left;
      }
    }
  }

  .ring {
    position: relative;
    z-index: 0;
    top: -60%;
    left: 0%;
    width: 30px;
    height: 30px;
    background: transparent;
    border-radius: 50%;
    opacity: 0.3;
    pointer-events: none;

    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      // background: var(--bg-color);
      border-radius: inherit;
      transform: scale(0);
      pointer-events: none;
    }
  }
}

@keyframes scale-out-elastic {
  0% {
    transform: rotate(-45deg) scale(1);
  }

  4% {
    transform: rotate(-45deg) scale(1);
  }

  8% {
    transform: rotate(-45deg) scale(1);
  }

  14% {
    transform: rotate(-45deg) scale(1);
  }

  18% {
    transform: rotate(-45deg) scale(1);
  }

  26% {
    transform: rotate(-45deg) scale(1.01);
  }

  28% {
    transform: rotate(-45deg) scale(1.01);
  }

  40% {
    transform: rotate(-45deg) scale(0.98);
  }

  42% {
    transform: rotate(-45deg) scale(0.98);
  }

  56% {
    transform: rotate(-45deg) scale(1.05);
  }

  58% {
    transform: rotate(-45deg) scale(1.04);
  }

  72% {
    transform: rotate(-45deg) scale(0.87);
  }

  86% {
    transform: rotate(-45deg) scale(1.37);
  }

  100% {
    transform: rotate(-45deg) scale(0);
  }
}

@keyframes slide-left-right {
  50% {
    transform: scaleX(1);
    transform-origin: left;
  }

  50.1% {
    transform-origin: right;
  }

  100% {
    transform-origin: right;
  }
}

@keyframes scale-out {
  to {
    transform: scale(1.02);
  }
}

@keyframes scale-out-bigger {
  to {
    transform: scale(1.5);
  }
}
</style>
