<template lang="">
  <div
    :class="{
      cluster: props.type === 'cluster',
      'cluster-list': props.type === 'list'
    }"
    @click="handleClick"
    ref="cluster"
  >
    {{ props.label }}
    <div
      :class="{
        'sub-cluster': props.type === 'cluster',
        'cluster-item': props.type === 'list'
      }"
      v-for="(item, index) in data"
      :key="item.text"
    >
      <p
        :class="{
          'p-center': props.type === 'cluster',
          'p-left': props.type === 'list'
        }"
        :data-index="index"
      >
        {{ item.part }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { computed, watch, defineProps, onMounted, ref, defineEmits } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const emits = defineEmits(['click'])

const cluster = ref(null)
const props = defineProps({
  type: String,
  data: Array,
  label: String
})

const wType = computed(() => props.type)

// 点击事件
function handleClick (e) {
  emits('click', e)
}

// cluster 事件
function showInCircle (e) {
  const conn = e.target.getElementsByClassName('sub-cluster')
  const len = conn.length
  const rotateDeg = 360 / len
  for (let i = 0; i < len; i++) {
    conn[i].style.opacity = 1
    conn[i].style.transform =
      'translate(-50%, -50%) rotateZ(' + rotateDeg * i + 'deg)'
    conn[i].getElementsByTagName('p')[0].style.transform =
      'rotateZ(' + '-' + rotateDeg * i + 'deg)'
  }
}

function showInLine (e) {
  const conn = e.target.getElementsByClassName('sub-cluster')
  const len = conn.length
  for (let i = 0; i < len; i++) {
    conn[i].style.opacity = 0
    conn[i].style.transform = ''
  }
}

// 跳转事件
function jumpTo (e) {
  const index = e.target.dataset.index
  router.push({
    path: '/recommend/detail',
    query: {
      label: props.label,
      part: props.data[index].part
    }
  })
  // 很关键，阻止冒泡
  e.stopPropagation()
}

// 处理type类型转换
function switchType () {
  const dom = cluster.value
  if (props.type === 'cluster') {
    dom.onmouseenter = showInCircle
    dom.onmouseleave = showInLine
    const listItems = dom.getElementsByTagName('div')
    for (let i = 0; i < listItems.length; i++) {
      listItems[i].removeEventListener(onclick, jumpTo)
    }
  } else {
    dom.removeEventListener(onmouseenter, showInCircle)
    dom.removeEventListener(onmouseenter, showInLine)
    const listItems = dom.getElementsByTagName('div')
    for (let i = 0; i < listItems.length; i++) {
      listItems[i].removeAttribute('style')
      listItems[i].getElementsByTagName('p')[0].removeAttribute('style')
      listItems[i].onclick = jumpTo
    }

    // 默认跳转
    if (props.data !== undefined) {
      router.push({
        path: '/recommend/detail',
        query: {
          label: props.label,
          part: props.data[0].part
        }
      })
    }
  }
}

onMounted(() => {
  const dom = cluster.value
  if (props.type === 'cluster') {
    dom.onmouseenter = showInCircle
    dom.onmouseleave = showInLine
  } else {
    const listItems = dom.getElementsByTagName('div')
    for (let i = 0; i < listItems.length; i++) {
      listItems[i].onclick = jumpTo
    }
  }
})

watch(wType, () => {
  switchType()
})
</script>
<style lang="css">
.cluster {
  cursor: pointer;
  z-index: 1;
  position: relative;
  width: 64px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  border-radius: 32px;
  box-shadow: 0 0 5px 1px gray;
  transition: 1s;
}

.sub-cluster {
  z-index: 2;
  pointer-events: none;
  opacity: 0;
  position: absolute;
  transform-origin: 40px 160px;
  top: -80px;
  left: 32px;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  box-shadow: 0 0 5px 1px rgb(69, 69, 69);
  animation: shine 2s linear infinite;
  transition: 1s;
}

@keyframes shine {
  50% {
    box-shadow: 0 0 10px 2px rgb(69, 69, 69);
  }
  100% {
    box-shadow: 0 0 5px 1px rgb(69, 69, 69);
  }
}

.p-center {
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  transform-origin: 50% 50%;
}

.cluster-list {
  position: relative;
  width: 200px;
  line-height: 64px;
  text-align: center;
  font-size: 24px;
  transition: 1s;
}

.p-left {
  cursor: pointer;
  margin-bottom: 10px;
  padding-left: 10px;
  width: 200px;
  height: 64px;
  line-height: 64px;
  text-align: left;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid gray;
  transition: 0.5s;
}

.p-left:hover {
  transform: translate(5%, 0);
  padding-left: 20px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 20px 5px 20px 5px;
  box-shadow: 0 0 5px 1px gray;
  background-color: black;
}
</style>
