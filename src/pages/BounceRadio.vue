<template>
  <div>
    <form>
      <div class="form-check">
        <input
          type="radio"
          name="gender"
          class="form-check-input bounce"
          id="male"
        />
        <label class="form-check-label" for="male">Male</label>
      </div>
      <div class="form-check">
        <input
          type="radio"
          name="gender"
          class="form-check-input bounce"
          id="female"
        />
        <label class="form-check-label" for="female">Female</label>
      </div>
      <div class="form-check">
        <input
          type="radio"
          name="gender"
          class="form-check-input bounce"
          id="disabled"
          disabled
        />
        <label class="form-check-label" for="disabled">Disabled</label>
      </div>
      <div class="form-check">
        <input
          type="radio"
          name="gender"
          class="form-check-input bounce"
          id="disabled-checked"
          disabled
          checked
        />
        <label class="form-check-label" for="disabled-checked">Default</label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  pageName: '单选框',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.form-check {
  --primary-color: hsl(196, 78%, 61%);
  --secondary-color: hsl(217, 15%, 83%);
  --success-color: hsl(165, 58%, 55%);
  --info-color: hsl(214, 79%, 65%);
  --warning-color: hsl(43, 100%, 66%);
  --danger-color: hsl(354, 81%, 63%);
  --primary-color-darker: hsl(196, 68%, 54%);
  --secondary-color-darker: hsl(215, 13%, 70%);
  --success-color-darker: hsl(165, 55%, 48%);
  --info-color-darker: hsl(214, 68%, 58%);
  --warning-color-darker: hsl(39, 97%, 62%);
  --danger-color-darker: hsl(354, 67%, 56%);
  --primary-color-lighter: hsl(196, 78%, 81%);
  --secondary-color-lighter: hsl(214, 16%, 92%);
  --success-color-lighter: hsl(165, 58%, 75%);
  --info-color-lighter: hsl(214, 79%, 85%);
  --warning-color-lighter: hsl(43, 100%, 86%);
  --danger-color-lighter: hsl(354, 81%, 83%);
  --secondary-color-darkest: hsl(215, 11%, 30%);
  --secondary-color-lightest: hsl(220, 1%, 98%);
  display: flex;
  align-items: center;
  line-height: 32px;
}
.form-check-input[type='radio'] {
  --radio-bg-color: white;
  --border-color: var(--secondary-color);
  --radio-hover-color: var(--secondary-color-darker);
  --radio-checked-color: var(--primary-color);
  --radio-disabled-bg-color: var(--secondary-color-lighter);
  --radio-disabled-checked-color: var(--secondary-color-darker);
  position: relative;
  width: 18px;
  height: 18px;
  margin: 0;
  background: var(--radio-checked-color);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  appearance: none;
  outline: 0;
  transition: 0.3s;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: var(--radio-bg-color);
    border-radius: inherit;
    transform: scale(0);
  }
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: var(--radio-bg-color);
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px var(--border-color);
    transition: 0.2s;
  }
  &:checked {
    &::after {
      transform: scale(0);
    }
    &::before {
      animation: scale-in-smaller 0.1s 0.2s linear forwards;
    }
  }
  &:disabled {
    --radio-bg-color: var(--radio-disabled-bg-color);
    --radio-checked-color: var(--radio-disabled-checked-color);
    cursor: not-allowed;
  }
}
.form-check-input[type='radio'] ~ .form-check-label {
  margin-left: 10px;
  cursor: pointer;
  transition: 0.3s;
}
.form-check-input[type='radio'] {
  &.bounce {
    &:checked {
      &::before {
        animation: scale-in-bounce-smaller 0.3s 0.2s linear forwards;
      }
    }
  }
}

@keyframes scale-in-bounce-smaller {
  50% {
    transform: scale(0.55);
  }

  75% {
    transform: scale(0.45);
  }

  100% {
    transform: scale(0.5);
  }
}
</style>
