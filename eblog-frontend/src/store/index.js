import { createStore } from 'vuex'
import Home from './modules/home'
import Block from './modules/block'
import Blog from './modules/blog'
import Recommend from './modules/recommend'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Home,
    Block,
    Blog,
    Recommend
  }
})
