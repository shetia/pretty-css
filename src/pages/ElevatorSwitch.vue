<template>
  <div class="black-box elevator-switch">
    <ul class="panel">
      <li>
        <label class="switch"><input type="radio"
                 name="number" />
          <div class="switch__number">1</div>
        </label>
      </li>
      <li>
        <label class="switch"><input type="radio"
                 name="number" />
          <div class="switch__number">2</div>
        </label>
      </li>
      <li>
        <label class="switch"><input type="radio"
                 name="number" />
          <div class="switch__number">3</div>
        </label>
      </li>
      <li>
        <label class="switch"><input type="radio"
                 name="number" />
          <div class="switch__number">4</div>
        </label>
      </li>
      <li>
        <label class="switch"><input type="radio"
                 name="number" />
          <div class="switch__number">5</div>
        </label>
      </li>
      <li>
        <label class="switch"><input type="radio"
                 name="number" />
          <div class="switch__number">6</div>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  pageName: "电梯开关",
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.elevator-switch{
  @include center;
}
.panel {
  @include center;
  position: relative;
  width: 250px;
  padding: 20px 0;
  flex-wrap: wrap;
  background: linear-gradient(black, #0c0c0c);
  border: 3px solid black;
  border-radius: 10px;
  overflow: hidden;
  list-style-type: none;

  &::before {
    position: absolute;
    content: "";
    bottom: -50%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
    pointer-events: none;
  }

  li {
    margin: 15px;

    .switch {
      position: relative;
      cursor: pointer;
      user-select: none;

      input[type="radio"] {
        position: absolute;
        appearance: none;

        &:checked ~ .switch__number {
          color: white;
          text-shadow: 0 0 10px rgb(38, 148, 228), 0 0 10px rgb(38, 148, 228);
          background: black;
          border: 3px solid white;
          box-shadow: 0 0 10px rgba(38, 148, 228, 0.5),
            0 0 20px rgba(38, 148, 228, 0.5), 0 0 30px rgba(38, 148, 228, 0.5);
        }
      }

      .switch__number {
        @include center;
        width: 60px;
        height: 60px;
        font-size: 30px;
        color: #222;
        background: #101010;
        border: 3px solid black;
        border-radius: 10px;
        transition: 0.5s;
      }
    }
  }
}
</style>
