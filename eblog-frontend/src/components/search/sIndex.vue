<template lang="">
  <div class="search-box">
    <canvas
      class="search-icon"
      width="32"
      height="32"
    >
    </canvas>
    <input type="text" placeholder="Query for what" v-model="prompt" />
    <button @click="emitPrompt">Go</button>
  </div>
</template>
<script setup>
import { ref, defineEmits, onMounted } from 'vue'
// 绘制icon

onMounted(() => {
  const canvas = document.getElementsByClassName('search-icon')[0]
  const painter = canvas.getContext('2d')
  painter.strokeStyle = 'black'
  painter.lineWidth = 4
  painter.arc(11, 11, 9, 0, Math.PI * 2, false)
  painter.stroke()
  painter.lineCap = 'round'
  painter.beginPath()
  painter.moveTo(22, 22)
  painter.lineTo(31, 31)
  painter.stroke()
  painter.closePath()
})
// 处理prompt
const prompt = ref('')
const emits = defineEmits(['getPrompt'])

function emitPrompt () {
  emits('getPrompt', prompt.value)
}

</script>
<style lang="css">
.search-box {
  z-index: 100;
  position: relative;
  width: 48px;
  height: 48px;
}

.search-icon {
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(8px, -50%);
  width: 32px;
  height: 32px;
}

.search-box input {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-120%, 0);
  width: 0px;
  height: 48px;
  font-size: 20px;
  border-radius: 5px 0 0 5px;
  transition: 1s;
}

.search-box button {
  cursor: pointer;
  z-index: 200;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-100%, 0);
  opacity: 0;
  width: 0px;
  height: 48px;
  font-size: 20px;
  border-radius: 0 5px 5px 0;
  background-color: rgb(220, 216, 216);
  transition: 1s;
}

.search-box:hover input, .search-box input:focus {
  padding-left: 1em;
  width: 240px;
  background-color: rgb(220, 216, 216);
}

.search-box:hover button, .search-box input:focus ~button {
  width: 48px;
  opacity: 1;
}

.search-box button:hover {
  background-color: rgb(169, 166, 166);
}

</style>
