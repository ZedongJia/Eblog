import { requireBlogs } from '@/api/blog'

export default {
  state: {
    blogs: [],
    findBlogs: []
  },
  getters: {
    getBlogs (state) {
      return state.blogs
    },
    getFindBlogs (state) {
      return state.findBlogs
    }
  },
  mutations: {
    updateBlogs (state, newBlogs) {
      state.blogs = newBlogs
    },
    updateFindBlogs (state, prompt) {
      if (prompt === '') {
        state.findBlogs = []
      } else {
        state.findBlogs = state.blogs.filter((item) => item.title.includes(prompt))
      }
    }
  },
  actions: {
    loadBlogsByTopicId ({ commit }, topicId) {
      // 请求topic的博客
      let newBlogs = []
      const params = { topicId: topicId }
      requireBlogs(params).then((response) => {
        newBlogs = response.data
        commit('updateBlogs', newBlogs)
      }).catch(() => {
        console.error('can not find resource of blogs')
      })
    }
  },
  modules: {
  }
}
