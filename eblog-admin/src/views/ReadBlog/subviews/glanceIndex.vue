<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    max-height="1000"
  >
    <el-table-column
      fixed
      prop="id"
      label="Id"
      width="100"
    />
    <el-table-column
      prop="topic"
      label="Topic"
      width="200"
    />
    <el-table-column
      prop="title"
      label="Title"
      width="200"
    />
    <el-table-column
      prop="date"
      label="Date"
      width="200"
    />
    <el-table-column
      prop="article"
      label="Article"
      min-width="200"
      height="50"
    />
    <el-table-column
      fixed="right"
      label="Operations"
      width="120"
    >
      <template #default="scope">
        <el-button
          link
          type="danger"
          size="default"
          @click="handleDelete(scope)"
          >Delete</el-button
        >
        <el-button
          link
          type="primary"
          size="default"
          @click="handleEdit(scope)"
          >Edit</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    handleEdit (scope) {
      this.$router.push({
        path: '/readBlog/edit',
        query: {
          index: scope.$index
        }
      })
    },
    handleDelete (scope) {
      if (confirm('sure?')) {
        this.$store.dispatch('Blog/removeBlog', { id: scope.row.id })
        setTimeout(() => {
          if (this.$store.getters['Blog/getRemoveState']) {
            alert('delete success')
          } else {
            alert('delete fail because the topic contains blogs')
          }
          this.loadData()
        }, 3000)
      }
    },
    loadData () {
      this.$store.dispatch('Blog/loadBlogs')
      this.tableData = this.$store.getters['Blog/getBlogs']
    }
  },
  created () {
    this.loadData()
  },
  watch: {
    '$store.state.Blog.blogs': {
      handler () {
        this.tableData = this.$store.getters['Blog/getBlogs']
      },
      deep: true
    }
  }
}
</script>
