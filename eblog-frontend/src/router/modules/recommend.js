import Recommend from '@/views/recommend/rIndex.vue'
import Detail from '@/views/recommend/components/detailIndex.vue'

export default {
  name: 'recommend',
  path: '/recommend',
  redirect: '/recommend/detail',
  component: Recommend,
  children: [
    {
      name: 'detail',
      path: 'detail',
      component: Detail,
      props (route) {
        return {
          label: route.query.label,
          part: route.query.part
        }
      }
    }
  ]
}
