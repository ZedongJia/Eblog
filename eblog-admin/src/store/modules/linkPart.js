import { deleteLinkPart, insertLinkPart, selectLinkPart, updateLinkPart } from '@/api/linkPart'

export default {
  namespaced: true,
  state: {
    linkParts: [],
    updateSuccess: false,
    addSuccess: false,
    removeSuccess: false
  },
  getters: {
    getLinkParts (state) {
      return state.linkParts
    },
    getLinkPartByIndex: (state) => (index) => {
      if (state.linkParts.length === 0) {
        return undefined
      }
      return state.linkParts[index]
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
    updateLinkParts (state, newlinkParts) {
      state.linkParts = newlinkParts
    }
  },
  actions: {
    loadLinkParts ({ commit }) {
      selectLinkPart().then((response) => {
        commit('updateLinkParts', response.data)
      }).catch(() => {
        console.error('error in requiring linkParts')
      })
    },
    editLinkPart ({ state }, params) {
      state.updateSuccess = false
      updateLinkPart(params).then(() => {
        state.updateSuccess = true
      }).catch(() => {
        console.error('error in updating')
      })
    },
    addLinkPart ({ state }, params) {
      state.addSuccess = false
      insertLinkPart(params).then(() => {
        state.addSuccess = true
      }).catch(() => {
        console.error('err in inserting')
      })
    },
    removeLinkPart ({ state }, params) {
      state.removeSuccess = false
      deleteLinkPart(params).then(() => {
        state.removeSuccess = true
      }).catch(() => {
        console.error('error in deleting')
      })
    }
  },
  modules: {
  }
}
