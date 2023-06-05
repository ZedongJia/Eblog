import { deleteBlock, insertBlock, selectBlock, updateBlock } from '@/api/block'

export default {
  namespaced: true,
  state: {
    blocks: [],
    updateSuccess: false,
    addSuccess: false,
    removeSuccess: false
  },
  getters: {
    getBlocks (state) {
      return state.blocks
    },
    getBlockByIndex: (state) => (index) => {
      if (state.blocks.length === 0) {
        return undefined
      }
      return state.blocks[index]
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
    updateBlocks (state, newBlocks) {
      state.blocks = newBlocks
    }
  },
  actions: {
    loadBlocks ({ commit }) {
      selectBlock().then((response) => {
        commit('updateBlocks', response.data)
      }).catch(() => {
        console.error('error in requiring blocks')
      })
    },
    editBlock ({ state }, params) {
      state.updateSuccess = false
      updateBlock(params).then(() => {
        state.updateSuccess = true
      }).catch(() => {
        console.error('error in updating')
      })
    },
    addBlock ({ state }, params) {
      state.addSuccess = false
      insertBlock(params).then(() => {
        state.addSuccess = true
      }).catch(() => {
        console.error('err in inserting')
      })
    },
    removeBlock ({ state }, params) {
      state.removeSuccess = false
      deleteBlock(params).then(() => {
        state.removeSuccess = true
      }).catch(() => {
        console.error('error in deleting')
      })
    }
  },
  modules: {
  }
}
