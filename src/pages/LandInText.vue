<template>
  <div  class="black-box landin-text">
    <p class="landIn">
      Ano hi watashitachi mada shiranai no Fushigi no monogatari desu.
    </p>
  </div>
</template>

<script>

export default {
  pageName: '交错文本',
  data() {
    return {}
  },
  mounted() {
  let landInTexts = document.querySelectorAll('.landIn')
      landInTexts.forEach((landInText) => {
        let letters = landInText.textContent.split('')
        landInText.textContent = ''
        letters.forEach((letter, i) => {
          let span = document.createElement('span')
          span.textContent = letter
          // span.style.animationDelay = `${i * 0.05}s`
          setTimeout(()=>{
            landInText.append(span)
          }, i * 100)
        })
      })
  },
}
</script>

<style lang="scss" >
// @import url('https://fonts.googleapis.com/css?family=Lora:400,400i,700');

.landin-text {
  background-image: linear-gradient(
      rgba(16, 16, 16, 0.8),
      rgba(16, 16, 16, 0.8)
    ),
    url(../assets/images/buDT4YS6zUMfHst.jpg);
  background-size: cover;
}

p {
  margin: 0 9em;
  font-size: 2em;
  font-weight: 600;
}

.landIn {
  display: flex;
  flex-wrap: wrap;
  line-height: 1.8;
  color: white;
  font-family: Lora, serif;
  white-space: pre;
  text-align: center;
  span {
    animation: landInAni 0.8s ease-out both;
  }
}

@keyframes landInAni {
  from {
    opacity: 0;
    transform: translateY(-20%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
