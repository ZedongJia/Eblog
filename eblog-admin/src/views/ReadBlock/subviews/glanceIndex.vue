<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
        >
          <el-breadcrumb>
            <el-breadcrumb-item :to="{ path: '/' }">Glance</el-breadcrumb-item>
            <el-breadcrumb-item>Edit</el-breadcrumb-item>
          </el-breadcrumb>
          <div style="flex-grow: 1" />
          <span style="margin: 0 20px; line-height: 32px;">deleteType: </span>
          <el-button
            @click="switchForce"
            :type="deleteAlert"
            >{{ forceDelete ? 'DeleteForce' : 'Delete' }}
          </el-button>
        </el-menu>
      </el-header>
      <el-main>
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
            prop="label"
            label="Label"
            width="100"
          />
          <el-table-column
            prop="intro"
            label="Intro"
            min-width="200"
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
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      forceDelete: false,
      deleteAlert: 'primary'
    }
  },
  methods: {
    switchForce () {
      this.forceDelete = !this.forceDelete
    },
    handleEdit (scope) {
      this.$router.push({
        path: '/readBlock/edit',
        query: {
          index: scope.$index
        }
      })
    },
    handleDelete (scope) {
      if (confirm('sure?')) {
        this.$store.dispatch('Block/removeBlock', {
          id: scope.row.id,
          force: this.forceDelete
        })
        setTimeout(() => {
          if (this.$store.getters['Block/getRemoveState']) {
            alert('delete success')
          } else {
            alert('delete fail because the topic contains blogs')
          }
          this.loadData()
        }, 3000)
      }
    },
    loadData () {
      this.$store.dispatch('Block/loadBlocks')
      this.tableData = this.$store.getters['Block/getBlocks']
    }
  },
  created () {
    this.loadData()
  },
  watch: {
    '$store.state.Block.blocks': {
      handler () {
        this.tableData = this.$store.getters['Block/getBlocks']
      },
      deep: true
    },
    forceDelete () {
      this.deleteAlert = this.forceDelete ? 'danger' : 'primary'
    }
  }
}
</script>
