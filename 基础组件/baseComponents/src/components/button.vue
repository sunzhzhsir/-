<template>
  <input
    type="button"
    :value="val"
    @click="click"
    :disabled="disabled"
    :class="[type, size]"
  />
</template>
<script>
export default {
  name: "eButton",
  props: {
    val: {
      type: String,
      default: "提交",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>
<style lang="less" scoped>
input {
  width: 100%;
  line-height: 30px;
  font-size: 18px;
  text-align: center;
  border: 1px solid #202020;
  border-radius: 20px;
  color: #202020;
  user-select: none;
  background-color: #fff;
  &.sure {
    color: #fff;
    border: 1px solid @Aa;
    background-color: @Aa;
  }
  &.cancel {
    color: @Aa;
    border: 1px solid @Aa;
    background-color: #fff;
  }
  &.small {
    width: auto;
    line-height: 20px;
    padding: 0 10px;
    border-radius: 10px;
  }
  &[disabled] {
    opacity: 0.5;
  }
}
</style>
