import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './modules/home'
import Block from './modules/block'
import Blog from './modules/blog'
import Recommend from './modules/recommend'
import About from './modules/about'

const routes = [
  Home,
  Block,
  Blog,
  About,
  Recommend
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
