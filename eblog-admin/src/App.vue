<template lang="">
  <div class="common-layout">
    <el-container>
      <el-header>
        <h1 style="height: 60px; line-height: 60px">eblog后台管理系统</h1>
      </el-header>
      <el-container>
        <el-aside width="200px"
          ><el-menu
            :default-active="path"
            class="el-menu-vertical-demo"
            router
          >
            <el-sub-menu index="/readBlock/glance">
              <template #title>block</template>
              <el-menu-item index="/readBlock/glance">
                <span>查看block</span>
              </el-menu-item>
              <el-menu-item index="/readBlock/add">
                <span>插入block</span>
              </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="/readBlog/glance">
              <template #title>blog</template>
              <el-menu-item index="/readBlog/glance">
                <span>查看blog</span>
              </el-menu-item>
              <el-menu-item index="/readBlog/add">
                <span>插入blog</span>
              </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="/readLinkPart/glance">
              <template #title>linkPart</template>
              <el-menu-item index="/readLinkPart/glance">
                <span>查看blog</span>
              </el-menu-item>
              <el-menu-item index="/readLinkPart/add">
                <span>插入blog</span>
              </el-menu-item>
            </el-sub-menu>
          </el-menu></el-aside
        >
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      path: ''
    }
  },
  mounted () {
    const temp = window.location.hash.split('/')
    this.path = '/' + temp[1] + '/' + temp[2]
  }
}
</script>
<style lang=""></style>
