<template>
  <div  class='black-box tabs'>
    <div class="tabs-left">
      <div class="block-warp">
        <div id="marker" :style="{'width': `${markerWidth}px`,'top': `${markerTop}px`}"></div>
        <div class="warp-item">Home</div>
        <div class="warp-item">About</div>
        <div class="warp-item">Component</div>
        <div class="warp-item">Methods</div>
        <div class="warp-item">Contact</div>
        <div class="warp-item">Link</div>
      </div>
    </div>
    <div class="tabs-right">
        <div class="block-warp">
        <div id="marker2" :style="{'width': `${marker2Width}px`,'left': `${marker2Left}px`}"></div>
        <div class="warp-item2">Home</div>
        <div class="warp-item2">About</div>
        <div class="warp-item2">Component</div>
        <div class="warp-item2">Methods</div>
        <div class="warp-item2">Contact</div>
        <div class="warp-item2">Link</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  pageName: '导航tabs',
  data () {
    return {
      markerWidth: 77,
      markerTop: 0,
      marker2Width: 77,
      marker2Left: 0
    }
  },
  mounted () {
    this.marker()
    this.marker2()
  },
  methods: {
    marker () {
      let items = document.querySelectorAll('.warp-item')
      let indicator = (e) => {
        this.markerWidth = e.offsetWidth
        this.markerTop = e.offsetTop
      }
      items.forEach(item => {
        item.addEventListener('mouseover', e => {
          indicator(e.target)
        })
      })
    },
    marker2 () {
      let items = document.querySelectorAll('.warp-item2')
      let indicator = (e) => {
        this.marker2Width = e.offsetWidth
        this.marker2Left = e.offsetLeft
      }
      items.forEach(item => {
        item.addEventListener('mouseover', e => {
          indicator(e.target)
        })
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.tabs{
  display:flex;
  &-left{
    width: 50%;
    display:flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    .block-warp{
      position:relative;
      z-index: 9;
      display:flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .warp-item{
        font-size: 24px;
        line-height: 50px;
        font-family: consolas;
        cursor: pointer;
        padding: 0px 12px;
      }
      #marker{
        position: absolute;
        top: 0px;
        width: 77px;
        z-index: -1;
        height: 50px;
        background:skyblue;
        border-radius: 4px;
        transition: all 0.2s;
      }
    }
  }
  &-right{
    width: 50%;
    display:flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    .block-warp{
      position:relative;
      z-index: 9;
      display:flex;
      justify-content: center;
      align-items: center;    
      .warp-item2{
        font-size: 24px;
        line-height: 50px;
        font-family: consolas;
        cursor: pointer;
        padding: 0px 12px;
      }
      #marker2{
        position: absolute;
        left: 0px;
        bottom: 0px;
        z-index: -1;
        width: 77px;
        height: 5px;
        background:rgb(165, 31, 98);
        border-radius: 4px;
        transition: all 0.25s;
      }
    }
  }
}
</style>
