<template lang="">
  <el-form
    label-position="top"
    label-width="100px"
    :model="blog"
    style="margin: 0 auto; max-width: 800px"
  >
    <el-form-item label="Topic">
      <el-input v-model="blog.topic" />
    </el-form-item>
    <el-form-item label="Title">
      <el-input v-model="blog.title" />
    </el-form-item>
    <el-form-item label="Article">
      <el-input
        autosize
        type="textarea"
        v-model="blog.article"
        resize="none"
      />
    </el-form-item>
    <el-button
      type="primary"
      @click="submitAdd"
      >Add</el-button
    >
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      blog: {
        topic: '',
        title: '',
        article: ''
      }
    }
  },
  methods: {
    submitAdd () {
      if (
        this.blog.topic === '' ||
        this.blog.title === '' ||
        this.blog.article === ''
      ) {
        alert('please check')
      } else {
        this.$store.dispatch('Blog/addBlog', {
          topic: this.blog.topic,
          title: this.blog.title,
          article: this.blog.article
        })
        setTimeout(() => {
          if (this.$store.getters['Blog/getAddState']) {
            alert('insert success')
          } else {
            alert('insert fail')
          }
        }, 3000)
      }
    }
  }
}
</script>
<style lang=""></style>
