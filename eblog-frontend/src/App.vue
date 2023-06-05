<template>
  <Nav></Nav>
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
  <Footer></Footer>
</template>
<script setup>
// 组件导入
import Nav from '@/components/nav/nIndex.vue'
import Footer from '@/components/footer/fIndex.vue'

</script>
