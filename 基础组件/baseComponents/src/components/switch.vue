<!-- 开关按钮 -->
<template>
  <span
    class="switch"
    :class="{ active: isActive }"
    :disabled="disabled"
    :readonly="readonly"
    @click="click"
  ></span>
</template>
<script>
import vModel from "../mixin/mixin.js";
export default {
  name: "eSwitch",
  mixins: [vModel],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    onClick: Function,
  },
  computed: {
    isActive() {
      return this.value;
    },
  },
  watch: {
    value(val) {
      this.$emit("change", val);
    },
  },
  methods: {
    async click() {
      if (this.disabled || this.readonly) return;
      if (this.onClick) {
        const result = await this.onClick(!this.value, this);
        if (typeof result === "boolean") {
          this.value = result;
          return;
        }
      }
      this.value = !this.value;
    },
  },
};
</script>
<style lang="less" scoped>
.switch {
  display: inline-block;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background-color: #eee;
  position: relative;
  &[disabled],
  &[readonly] {
    cursor: none;
    pointer-events: none;
    opacity: 0.6;
  }
  &::before {
    content: "";
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    left: 1px;
    top: 1px;
    bottom: 0;
    transition: all 0.3s;
  }

  &.active {
    background-color: #3c71ff;
  }
  &.active::before {
    left: 21px;
  }
}
</style>
