import ReadBlock from '@/views/ReadBlock/rIndex.vue'
import Glance from '@/views/ReadBlock/subviews/glanceIndex.vue'
import Edit from '@/views/ReadBlock/subviews/editIndex.vue'
import Add from '@/views/ReadBlock/subviews/addIndex.vue'
export default {
  path: '/readBlock',
  redirect: '/readBlock/glance',
  component: ReadBlock,
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
