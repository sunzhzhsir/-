export default {
  model: {
    prop: "_value",
    event: "valuechange",
  },
  props: {
    _value: {
      type: String | Boolean | Object | Array,
    },
  },
  data() {
    return {
      value: undefined,
    };
  },
  created() {
    this.value = this._value;
  },
  watch: {
    _value(newValue) {
      this.value = newValue;
    },
    value(val) {
      this.$emit("valuechange", val);
    },
  },
};
