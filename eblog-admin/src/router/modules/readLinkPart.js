import ReadLinkPart from '@/views/ReadLinkPart/rIndex.vue'
import Glance from '@/views/ReadLinkPart/subviews/glanceIndex.vue'
import Edit from '@/views/ReadLinkPart/subviews/editIndex.vue'
import Add from '@/views/ReadLinkPart/subviews/addIndex.vue'
export default {
  path: '/readLinkPart',
  redirect: '/readLinkPart/glance',
  component: ReadLinkPart,
  children: [
    {
      path: 'glance',
      component: Glance
    },
    {
      path: 'edit',
      component: Edit,
      props (store) {
        return {
          index: store.query.index
        }
      }
    },
    {
      path: 'add',
      component: Add
    }
  ]
}
