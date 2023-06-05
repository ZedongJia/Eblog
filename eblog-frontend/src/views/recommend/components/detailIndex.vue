<template lang="">
  <div
    style="margin: 50px 0"
    class="flex-row-1"
  >
    <Card v-if="isNull">
      <h1 class="title">哎呦，这里好像什么也没有呀</h1>
    </Card>
    <Card
      v-else
      static
    >
      <h1 class="title">{{ props.part }}</h1>
      <Card
        v-for="item in data"
        :key="item.id"
      >
        <h3 class="tip">{{ item.date }}</h3>
        <p class="passage">{{ item.content }}</p>
      </Card>
    </Card>
  </div>
</template>
<script setup>
import { defineProps, ref, watch, computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const props = defineProps({
  label: String,
  part: String
})

const isNull = ref(true)
// 获取数据
const partList = computed(() => store.getters.getLinkPartsByLabel(props.label))
const data = ref([])

// 加载数据
function loadData () {
  if (
    props.part !== undefined &&
    props.label !== undefined &&
    partList.value.length !== 0
  ) {
    isNull.value = false
    data.value = partList.value.filter((item) => item.part === props.part)
  }
}
loadData()
watch(
  props,
  () => {
    loadData()
  },
  { deep: true }
)
watch(
  partList.value,
  () => {
    loadData()
  },
  { deep: true }
)
</script>
<style lang="css"></style>
