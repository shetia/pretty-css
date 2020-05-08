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
