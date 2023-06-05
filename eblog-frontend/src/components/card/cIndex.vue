<template lang="">
  <div
    :class="{
      card: !props.static && !props.listItem,
      static: props.static,
      'list-item': props.listItem,
      round: round
    }"
    @mouseenter="handleEnter"
    @mouseleave="handleLeave"
  >
    <slot></slot>
  </div>
</template>
<script setup>
import { defineEmits, defineProps } from 'vue'
const props = defineProps({
  static: Boolean,
  listItem: Boolean,
  round: Boolean
})
// 处理事件
const emits = defineEmits(['mouseenter', 'mouseleave'])
function handleEnter (e) {
  emits('mouseenter', e)
}
function handleLeave (e) {
  emits('mouseleave', e)
}
</script>
<style lang="css">
.card {
  position: relative;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  transition: 0.25s;
}

.list-item {
  position: relative;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  transition: 0.25s;
}

.static {
  position: relative;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  transition: 0.25s;
}

.round {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  text-align: center;
}

.card:hover {
  box-shadow: 0 0 5px 1px gray;
}

.list-item:hover {
  transform: translate(-5%, 0);
  padding-left: 10px;
  font-size: 20px;
  color: gray;
  border-radius: 20px 5px 20px 5px;
  box-shadow: 0 0 5px 1px gray;
}
</style>
