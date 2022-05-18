<template>
  <div class="btn">
    <e-button></e-button>
    <e-button type="sure" @click="click('sure')"></e-button>
    <e-button type="cancel" @click="click('cancel')"></e-button>
    <e-button type="sure" disabled @click="click('disabled')"></e-button>
    <e-button type="cancel" disabled></e-button>
    <e-button size="small"></e-button>
    <e-button size="small" type="sure"></e-button>
    <e-button size="small" type="cancel"></e-button>
    <br />
    <e-switch></e-switch>
    <e-switch v-model="val"></e-switch>
    <e-switch v-model="val1" disabled></e-switch>
  </div>
</template>
<script>
import eButton from "./button.vue";
import eSwitch from "./switch.vue";
export default {
  name: "App",
  components: {
    eButton,
    eSwitch,
  },
  data() {
    return { val: true, val1: true };
  },
  methods: {
    click(item) {
      alert(item);
    },
  },
};
</script>
<style lang="less">
.btn > * {
  margin: 10px 0;
}
</style>
