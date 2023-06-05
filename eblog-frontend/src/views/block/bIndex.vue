<template>
  <div
    id="block"
    class="layout flex-row"
  >
    <div class="search">
      <Search @getPrompt="receivePrompt"></Search>
    </div>
    <Card
      style="flex: 0 100%"
      static
    >
      <h1 class="title">~ Memory Block ~</h1>
    </Card>
    <div
      v-if="isNull"
      class="loading"
    >
      糟糕，好像没有你想要的板块，要不要换个prompt试一试？
    </div>
    <transition-group
      v-else
      name="left"
    >
      <Card
        v-for="(block, index) in blocks"
        :key="block.id"
        style="flex: 0 0 30%"
      >
        <h2>{{ block.topic }}</h2>
        <p>{{ block.intro }}</p>
        <button @click="toBlog(index)">>>Go</button>
      </Card>
    </transition-group>
  </div>
</template>
<script setup>
// 导入引用
import { watch, ref, onBeforeUnmount, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const router = useRouter()

// 处理分栏区
// 获取分栏数据
// 初始化分栏数据
store.dispatch('loadBlocks')
const blocks = computed(() => store.getters.getBlocks)
// 跳转
function toBlog (index) {
  router.push({
    name: 'blog',
    query: {
      topicId: blocks.value[index].id
    }
  })
}

// 处理搜索
function receivePrompt (prompt) {
  store.commit('updateBlocks', prompt)
}

// 处理无数据情况显示
const isNull = ref(false)
// 初次判断
if (blocks.value.length === 0) {
  isNull.value = true
} else {
  isNull.value = false
}
watch(blocks, () => {
  if (blocks.value.length === 0) {
    isNull.value = true
  } else {
    isNull.value = false
  }
})

// 退出当前页面, 数据恢复
onBeforeUnmount(() => {
  store.commit('updateBlocks', '')
})
</script>
<style lang="css" scoped>
#block h2 {
  margin: 32px;
  height: 64px;
  font-size: 20px;
  text-align: center;
}

#block p {
  margin: 30px 30px 80px 30px;
  text-indent: 2em;
}

#block button {
  cursor: pointer;
  position: absolute;
  right: 5%;
  bottom: 5%;
  width: 60px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.25s;
}

#block button:hover {
  color: white;
  background-color: gray;
  border-radius: 20px 5px 20px 5px;
}
</style>
