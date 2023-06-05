import ReadBlog from '@/views/ReadBlog/rIndex.vue'
import Glance from '@/views/ReadBlog/subviews/glanceIndex.vue'
import Edit from '@/views/ReadBlog/subviews/editIndex.vue'
import Add from '@/views/ReadBlog/subviews/addIndex.vue'
export default {
  path: '/readBlog',
  redirect: '/readBlog/glance',
  component: ReadBlog,
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
