<template lang="">
  <el-form
    label-position="top"
    label-width="100px"
    :model="linkPart"
    style="margin: 0 auto; max-width: 800px"
  >
    <el-form-item label="Label">
      <el-input v-model="linkPart.label" />
    </el-form-item>
    <el-form-item label="Part">
      <el-input v-model="linkPart.part" />
    </el-form-item>
    <el-form-item label="Content">
      <el-input
        autosize
        type="textarea"
        v-model="linkPart.content"
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
      linkPart: []
    }
  },
  methods: {
    submitAdd () {
      if (
        this.linkPart.id === '' ||
        this.linkPart.label === '' ||
        this.linkPart.part === '' ||
        this.linkPart.content === ''
      ) {
        alert('please check')
      } else {
        this.$store.dispatch('LinkPart/addLinkPart', {
          label: this.linkPart.label,
          part: this.linkPart.part,
          content: this.linkPart.content
        })
        setTimeout(() => {
          if (this.$store.getters['LinkPart/getAddState']) {
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
