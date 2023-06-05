import Blog from '@/views/blog/bIndex.vue'

export default {
  name: 'blog',
  path: '/blog',
  component: Blog,
  props (route) {
    if (route.query.topicId === undefined) {
      route.query.topicId = -1
    }
  }
}
