<template>
  <div class="code-box">
    <div class="code-input">
      <label for="result">支付密码</label>
      <div class="chars">
        <input type="text" maxlength="1" class="char" />
        <input type="text" maxlength="1" class="char" />
        <input type="text" maxlength="1" class="char" />
        <input type="text" maxlength="1" class="char" />
        <input type="text" maxlength="1" class="char" />
        <input type="text" maxlength="1" class="char" />
      </div>
      <input type="text" class="result" name="result" hidden />
    </div>
  </div>
</template>

<script>
export default {
  pageName: '密码输入',
  data() {
    return {}
  },
  mounted() {
    let chars = document.querySelectorAll('.chars .char')
    let result = document.querySelector('.result')
    chars.forEach((char) => {
      char.addEventListener('keyup', (e) => {
        if (char.value.toString().length === 1 || e.code === 'Space') {
          char.nextElementSibling?.focus()
        }
        if (e.code === 'Backspace') {
          char.previousElementSibling?.focus()
        }
        let value = Array.from(chars)
          .map((char) => char.value)
          .join('')
        result.setAttribute('value', value)
      })
    })
  },
}
</script>

<style lang="scss" scoped>
.code-box{
  @include flex-center;
}
.code-input {
  --text-color: var(--secondary-color-darkest);
  --underline-color: var(--secondary-color);
  --underline-focus-color: var(--info-color);

  max-width: 240px;

  .chars {
    display: flex;

    .char {
      // https://stackoverflow.com/questions/42421361/input-button-elements-not-shrinking-in-a-flex-container
      min-width: 0;
      margin-right: 9px;
      line-height: 2;
      text-align: center;
      color: var(--text-color);
      background: transparent;
      border: 1px solid var(--underline-color);
      border-width: 0 0 1px 0;
      border-radius: 0;
      outline: none;
      appearance: none;
      transition: 0.3s;

      &:focus {
        border-color: var(--underline-focus-color);
      }
    }
  }
}
</style>
