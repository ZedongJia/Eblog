<template lang="">
  <div
    id="r-screen"
    class="layout"
  >
    <div v-if="isNull">
      <h1 class="title loading">哎呦，这里好像什么也没有呀</h1>
    </div>
    <div
      v-else
      class="flex-row"
    >
      <div
        v-for="(cluster, index) in clusterList"
        :key="cluster.id"
        :class="cluster.classType"
        :style="cluster.pos"
        v-show="cluster.isShow"
      >
        <Cluster
          :data-index="index"
          @click="showList"
          :label="cluster.label"
          :data="cluster.linkList"
          :type="cluster.type"
        >
        </Cluster>
      </div>
      <button
        id="backward"
        @click="goBack"
        v-if="isDetail"
      >
        back
      </button>
      <div
        v-if="isDetail"
        class="main"
      >
        <router-view v-slot="{ Component, route }">
          <transition
            name="fade"
            mode="out-in"
          >
            <component
              :is="Component"
              :key="route.path"
            ></component>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>
<script setup>
import Cluster from './components/clusterIndex.vue'

import { ref, onMounted, computed, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
// 判断是否切换
const isDetail = ref(false)
const labelIndex = ref(0)
// 判断是否为空
const isNull = ref(true)
//  cluster数据初始化
// 请求
store.dispatch('loadLinkParts')
// 获取
const labelList = computed(() => store.getters.getLabelList)
const clusterList = ref([])

// 监听labelList
watch(
  labelList,
  () => {
    if (labelList.value.length !== 0) {
      clusterList.value = labelList.value.map((item) => {
        return {
          classType: 'area',
          type: 'cluster',
          isShow: true,
          pos: 'top: 0; left: 0',
          ...item
        }
      })
      randomPositionAndScreenheight()
    }
  },
  { deep: true }
)

// cluster随机位置
function randomPositionAndScreenheight () {
  const len = clusterList.value.length
  // 判断是否有数据
  if (len - 0 === 0) {
    return
  }
  isNull.value = false
  // 20~80
  const intervalX = 60 / len
  // 20~
  const intervalY = 20
  for (let i = 0; i < clusterList.value.length; i++) {
    const genX = Math.random() * (intervalX - 10) + 20 + intervalX * i
    const genY = Math.random() * (intervalY - 10) + 20 + intervalY * i
    clusterList.value[i].pos = 'top: ' + genY + '%; left: ' + genX + '%;'
  }
  // 显示高度
  document.getElementById('r-screen').style.height =
    Math.max(10 * 5 * len, 600) + 'px'
}

// 清空样式
function clearStyle () {
  for (let i = 0; i < clusterList.value.length; i++) {
    clusterList.value.pos = ''
  }
  document.getElementById('r-screen').removeAttribute('style')
}

// 显示List函数
function showList (e) {
  // 清除样式
  clearStyle()
  const index = e.target.dataset.index
  labelIndex.value = index
  for (let i = 0; i < clusterList.value.length; i++) {
    if (i - index !== 0) {
      clusterList.value[i].isShow = false
    } else {
      clusterList.value[i].classType = 'attach-left'
      clusterList.value[i].type = 'list'
    }
  }
  isDetail.value = true
}

// 返回cluster模式
function goBack () {
  for (let i = 0; i < clusterList.value.length; i++) {
    clusterList.value[i].isShow = false
  }
  isDetail.value = false
  // 生成随机位置
  randomPositionAndScreenheight()
  setTimeout(() => {
    for (let i = 0; i < clusterList.value.length; i++) {
      clusterList.value[i].isShow = true
      clusterList.value[i].classType = 'area'
      clusterList.value[i].type = 'cluster'
    }
  }, 500)
}
// 初始化位置
onMounted(() => {
  randomPositionAndScreenheight()
})
</script>
<style lang="css">
.area {
  position: absolute;
  left: 50%;
  top: 200px;
  transform: translate(-50%, -50%);
}

.attach-left {
  flex: 0 0 20%;
}
.main {
  flex: 0 0 80%;
}

#backward {
  cursor: pointer;
  position: absolute;
  top: 5%;
  left: 95%;
  width: 64px;
  height: 32px;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px gray;
  transition: 0.5s;
}
#backward:hover {
  color: white;
  font-size: 18px;
  background-color: black;
}
</style>
