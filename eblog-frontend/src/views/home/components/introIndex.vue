<template lang="">
  <div :class="{ intro: !props.static, static: props.static }">
    <slot></slot>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  static: Boolean
})
</script>
<style lang="css" scoped>
.intro {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 250px;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px gray;
  transition: 1s;
  background-color: white;
}

.static {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 250px;
  line-height: 2em;
  font-size: 20px;
  color: white;
  border-radius: 10px;
  transition: 1s;
}
</style>
