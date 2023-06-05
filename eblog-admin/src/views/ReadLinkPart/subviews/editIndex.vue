<template lang="">
  <el-form
    v-if="!isNull"
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
      linkPart: [],
      isNull: false
    }
  },
  methods: {
    submitEdit () {
      if (
        this.linkPart.id === '' ||
        this.linkPart.label === '' ||
        this.linkPart.part === '' ||
        this.linkPart.content === ''
      ) {
        alert('please check')
      } else {
        this.$store.dispatch('LinkPart/editLinkPart', {
          id: this.linkPart.id,
          label: this.linkPart.label,
          part: this.linkPart.part,
          content: this.linkPart.content
        })
        setTimeout(() => {
          if (this.$store.getters['LinkPart/getUpdateState']) {
            alert('update success')
          } else {
            alert('update fail')
          }
        }, 3000)
      }
    },
    goBack () {
      this.$router.push({
        path: '/readLinkPart/glance'
      })
    }
  },
  created () {
    this.linkPart = this.$store.getters['LinkPart/getLinkPartByIndex'](this.index)
    if (this.linkPart === undefined) {
      this.$router.push({
        path: '/readLinkPart/glance'
      })
      this.isNull = true
    }
  }
}
</script>
<style lang=""></style>
