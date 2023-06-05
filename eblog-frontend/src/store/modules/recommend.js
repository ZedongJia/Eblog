import { requireLinkParts } from '@/api/linkPart'
export default {
  state: {
    linkParts: [],
    labelList: []
  },
  getters: {
    getLinkParts (state) {
      return state.linkParts
    },
    getLinkPartsByLabel: (state) => (label) => {
      return state.linkParts.filter((item) => item.label === label)
    },
    getLabelList (state) {
      return state.labelList
    }
  },
  mutations: {
    updateLinkParts (state, newLinkParts) {
      state.linkParts = newLinkParts
      this.commit('updateLabelList')
    },
    updateLabelList (state) {
      state.labelList = []
      const data = state.linkParts
      const temp = []
      for (let i = 0; i < data.length; i++) {
        if (!temp.includes(data[i].label)) {
          temp.push(data[i].label)
        }
      }
      for (let i = 0; i < temp.length; i++) {
        state.labelList.push({
          label: temp[i],
          linkList: data.filter((item) => item.label === temp[i])
        })
      }
    }
  },
  actions: {
    loadLinkParts ({ commit }) {
      requireLinkParts().then((response) => {
        commit('updateLinkParts', response.data)
      }).catch(() => {
        console.error('can not find the linkPart')
      })
    }
  },
  modules: {
  }
}
