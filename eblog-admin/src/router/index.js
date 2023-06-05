import { createRouter, createWebHashHistory } from 'vue-router'
import ReadBlock from './modules/readBlock'
import ReadBlog from './modules/readBlog'
import ReadLinkPart from './modules/readLinkPart'
const routes = [
  {
    path: '/',
    redirect: '/readBlock'
  },
  ReadBlock,
  ReadBlog,
  ReadLinkPart
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
