<template lang="">
  <el-form
    v-if="!isNull"
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
      @click="submitEdit"
      >Edit</el-button
    >
    <el-button
      type="primary"
      @click="goBack"
      >Back</el-button
    >
  </el-form>
</template>
<script>
export default {
  props: ['index'],
  data () {
    return {
      blog: {
        topic: '',
        title: '',
        article: ''
      },
      isNull: false
    }
  },
  methods: {
    submitEdit () {
      if (
        this.blog.topic === '' ||
        this.blog.title === '' ||
        this.blog.article === ''
      ) {
        alert('please check')
      } else {
        this.$store.dispatch('Blog/editBlog', {
          id: this.blog.id,
          topic: this.blog.topic,
          title: this.blog.title,
          article: this.blog.article
        })
        setTimeout(() => {
          if (this.$store.getters['Blog/getUpdateState']) {
            alert('update success')
          } else {
            alert('update fail')
          }
        }, 3000)
      }
    },
    goBack () {
      this.$router.push({
        path: '/readBlog/glance'
      })
    }
  },
  created () {
    this.blog = this.$store.getters['Blog/getBlogByIndex'](this.index)
    if (this.blog === undefined) {
      this.$router.push({
        path: '/readBlog/glance'
      })
      this.isNull = true
    }
  }
}
</script>
<style lang=""></style>
