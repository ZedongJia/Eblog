import { requireBlocks } from '@/api/block'

export default {
  state: {
    blocks: [],
    blockData: []
  },
  getters: {
    getBlocks (state) {
      return state.blocks
    }
  },
  mutations: {
    updateBlocksData (state, newBlocks) {
      state.blocks = newBlocks
      state.blockData = newBlocks
    },
    updateBlocks (state, prompt) {
      if (prompt === '') {
        state.blocks = state.blockData
      } else {
        state.blocks = state.blockData.filter((item) => item.topic.includes(prompt))
      }
    }
  },
  actions: {
    loadBlocks ({ commit }) {
      let newBlocks = []
      // 调用api从后端获取
      requireBlocks().then((response) => {
        newBlocks = response.data
        commit('updateBlocksData', newBlocks)
      }).catch(() => {
        console.error('can not find resource of blocks')
      })
    }
  },
  modules: {
  }
}
