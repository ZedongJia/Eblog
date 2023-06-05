import { deleteBlog, insertBlog, selectBlog, updateBlog } from '@/api/blog'

export default {
  namespaced: true,
  state: {
    blogs: [],
    updateSuccess: false,
    addSuccess: false,
    removeSuccess: false
  },
  getters: {
    getBlogs (state) {
      return state.blogs
    },
    getBlogByIndex: (state) => (index) => {
      if (state.blogs.length === 0) {
        return undefined
      }
      return state.blogs[index]
    },
    getUpdateState (state) {
      return state.updateSuccess
    },
    getAddState (state) {
      return state.addSuccess
    },
    getRemoveState (state) {
      return state.removeSuccess
    }
  },
  mutations: {
    updateBlogs (state, newBlogs) {
      state.blogs = newBlogs
    }
  },
  actions: {
    loadBlogs ({ commit }) {
      selectBlog().then((response) => {
        commit('updateBlogs', response.data)
      }).catch(() => {
        console.error('error in requiring Blogs')
      })
    },
    editBlog ({ state }, params) {
      state.updateSuccess = false
      updateBlog(params).then(() => {
        state.updateSuccess = true
      }).catch(() => {
        console.error('error in updating')
      })
    },
    addBlog ({ state }, params) {
      state.addSuccess = false
      insertBlog(params).then(() => {
        state.addSuccess = true
      }).catch(() => {
        console.error('err in inserting')
      })
    },
    removeBlog ({ state }, params) {
      state.removeSuccess = false
      deleteBlog(params).then(() => {
        state.removeSuccess = true
      }).catch(() => {
        console.error('error in deleting')
      })
    }
  },
  modules: {
  }
}
