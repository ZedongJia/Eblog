<template lang="">
  <div class="layout flex-row-1">
    <h1
      v-if="isNull"
      class="loading"
    >
      糟糕，当前板块好像还没有博客文章，要不换一个板块试试？
    </h1>
    <div
      v-else
      class="flex-row"
    >
      <Card
        id="topic"
        static
      >
        <h1 class="title">{{ blogList[refe].topic }}</h1>
      </Card>
      <transition
        name="fade"
        mode="out-in"
      >
        <div
          id="main"
          :key="blogList[refe].id"
        >
          <h2>{{ blogList[refe].title }}</h2>
          <h3>{{ blogList[refe].date }}</h3>
          <v-md-preview :text="blogList[refe].article"></v-md-preview>
        </div>
      </transition>
      <div id="aside">
        <div class="search">
          <Search @getPrompt="receivePrompt"></Search>
        </div>
        <Card>
          <h2>查找列表</h2>
          <Card
            v-for="(blog, index) in findBlogList"
            :key="blog.id"
            listItem
          >
            <span @click="switchBlogQuick(index)">{{ blog.title }}</span>
          </Card>
        </Card>
        <Card>
          <h2>文章列表</h2>
          <Card
            v-for="(blog, index) in blogList"
            :key="blog.id"
            listItem
          >
            <span @click="switchBlog(index)">{{ blog.title }}</span>
          </Card>
        </Card>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
// 是否有数据
const isNull = ref(true)
const blogList = computed(() => store.getters.getBlogs)
// 处理文章
const refe = ref(0)

// 创建博客数据
// 获取博客
const topicId = computed(() => route.query.topicId)
store.dispatch('loadBlogsByTopicId', topicId.value)
// 监听判断是否有数据流入
watch(blogList, () => {
  if (blogList.value.length !== 0) {
    isNull.value = false
  }
})
// 监听路由的topicId用于刷新页面
watch(topicId, () => {
  // 将查询记录置零
  store.commit('updateFindBlogs', '')
  if (window.location.hash.split('/')[1] === 'blog') {
    store.dispatch('loadBlogsByTopicId', topicId.value)
  }
})

// 处理切换博客按钮
function switchBlog (index) {
  refe.value = index
}

// 处理查找的blog
const findBlogList = computed(() => store.getters.getFindBlogs)

function receivePrompt (prompt) {
  store.commit('updateFindBlogs', prompt)
}

function switchBlogQuick (index) {
  for (let i = 0; i < blogList.value.length; i++) {
    if (blogList.value[i] === findBlogList.value[index]) {
      switchBlog(i)
      return
    }
  }
}
</script>
<style lang="css">
#topic {
  margin: 50px 0;
  flex: 0 80%;
  border-bottom: 1px solid black;
}
#topic::first-letter,
#loading::first-letter {
  font-size: 40px;
}

#main {
  flex: 0 0 70%;
}

#main h2 {
  margin: 10px auto;
  height: 32px;
  line-height: 32px;
  text-align: center;
}

#main h3 {
  margin: 10px auto;
  height: 32px;
  line-height: 32px;
  text-align: center;
}

#aside {
  flex: 0 0 30%;
}
#aside span {
  display: inline-block;
  cursor: pointer;
  width: 100%;
  height: 32px;
  line-height: 32px;
}

#aside h2 {
  margin: 10px auto;
  width: 60%;
  text-align: center;
}
</style>
