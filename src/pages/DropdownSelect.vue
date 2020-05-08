<template>
  <div  class="black-box">
    <div class="dropdown">
  <div class="dropdown__selected">
    <div class="old-text">France</div>
    <div class="new-text" data-text="Country">Just to fill the gap</div>
    <svg
      t="1582611929385"
      class="chevron"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="902"
      width="26"
      height="26"
      fill="currentColor"
    >
      <path
        d="M316.16 366.08 512 561.92 707.84 366.08 768 426.666667 512 682.666667 256 426.666667 316.16 366.08Z"
        p-id="903"
      ></path>
    </svg>
  </div>
  <ul class="dropdown__options">
    <li class="selected">France</li>
    <li>Germany</li>
    <li>United Kingdom</li>
  </ul>
</div>

  </div>
</template>

<script>
export default {
  pageName: '下拉框',
  data () {
    return {

    }
  },
  mounted () {
    let sleep = time => new Promise(resolve => setTimeout(resolve, time));
let dropdown = document.querySelector(".dropdown");
let oldText = document.querySelector(".old-text");
let newText = document.querySelector(".new-text");
let dropdownOptions = document.querySelectorAll(".dropdown__options li");
dropdown.addEventListener("click", async () => {
  if (!dropdown.classList.contains("open")) {
    dropdown.classList.add("open");
  } else {
    dropdown.classList.add("close");
    await sleep(600);
    dropdown.className = "dropdown";
    oldText.textContent = newText.dataset.text;
  }
});
dropdownOptions.forEach(option => {
  option.addEventListener("click", e => {
    let selected = e.target;
    newText.dataset.text = selected.textContent;
    dropdownOptions.forEach(option => option.classList.remove("selected"));
    selected.classList.add("selected");
  });
});

  }
}
</script>

<style lang='scss' scoped>

.dropdown {
  --arrow-color: #8fa1b5;
  --ease-in-out-quartic: cubic-bezier(0.77, 0, 0.175, 1);
  display: inline-block;
  line-height: 1;
  background: transparent;
  border-radius: 16px 16px 0 0;
  cursor: pointer;
  filter: drop-shadow(0 60px 50px rgba(0, 0, 0, 0.15));
  overflow: hidden;
  user-select: none;
  transform: rotate(0) translateY(25%) translateZ(0);

  &__selected {
    position: relative;
    z-index: 1;
    width: 216px;
    padding: 21.6px 0 21.6px 28.8px;
    font-size: 100%;
    line-height: inherit;
    background: white;
    border-radius: 16px;

    &::before {
      position: absolute;
      content: "";
      top: 50%;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 50%;
      background: white;
      border-radius: 16px 16px 0 0;
      transform: scaleY(0);
      transform-origin: top;
    }

    .new-text {
      position: absolute;
      color: transparent;
      overflow: hidden;
      line-height: 1.5;
      transform: translateY(-83%);
      text-align: left;
      &::before {
        position: absolute;
        content: attr(data-text);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: black;
        opacity: 0;
        white-space: nowrap;
      }
    }

    .chevron {
      position: absolute;
      top: 30%;
      right: 12%;
      color: var(--arrow-color);
    }
  }

  &__options {
    display: block;
    padding: 0;
    margin: 0;
    list-style-type: none;
    background: white;
    border-radius: 0 0 16px 16px;
    filter: brightness(0.95);
    pointer-events: none;
    transform: translateY(-100%);

    li {
      position: relative;
      padding: 21.6px 0 21.6px 28.8px;
      text-align:left;
      &.selected::before {
        position: absolute;
        content: "";
        top: 47%;
        left: 5%;
        width: 3.6px;
        height: 3.6px;
        background: black;
        border-radius: 50%;
      }
    }
  }

  &.open {
    pointer-events: none;

    .dropdown__selected {
      &::before {
        animation: reveal-border 0.1s forwards;
      }

      .chevron {
        animation: flip-up 0.3s forwards;
      }
    }

    .dropdown__options {
      pointer-events: auto;
      animation: slide-down 0.6s forwards var(--ease-in-out-quartic);
    }
  }
  .old-text{
    text-align:left;
  }
  &.close {
    .dropdown__selected {
      &::before {
        transform: scaleY(1);
        animation: hide-border 0.3s 0.4s forwards;
      }

      .old-text {
        
        animation: fade-out 0.4s forwards;
      }

      .new-text::before {
        animation: fade-up-in 0.6s forwards;
      }

      .chevron {
        animation: flip-down 0.3s forwards;
      }
    }

    .dropdown__options {
      animation: slide-up 0.6s forwards var(--ease-in-out-quartic);
    }
  }
}

@keyframes reveal-border {
  to {
    transform: scaleY(1);
  }
}

@keyframes flip-up {
  to {
    transform: scaleY(-1);
  }
}

@keyframes slide-down {
  to {
    transform: translateY(0);
  }
}

@keyframes hide-border {
  to {
    transform: scaleY(0);
  }
}

@keyframes fade-out {
  to {
    opacity: 0;
  }
}

@keyframes fade-up-in {
  from {
    opacity: 1;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes flip-down {
  from {
    transform: scaleY(-1);
  }

  to {
    transform: scaleY(1);
  }
}

@keyframes slide-up {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-100%);
  }
}

</style>
