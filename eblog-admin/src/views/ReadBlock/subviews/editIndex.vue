<template lang="">
  <el-form
    v-if="!isNull"
    label-position="top"
    label-width="100px"
    :model="block"
    style="margin: 0 auto; max-width: 800px"
  >
    <el-form-item label="Topic">
      <el-input v-model="block.topic" />
    </el-form-item>
    <el-form-item label="Label">
      <el-input v-model="block.label" />
    </el-form-item>
    <el-form-item label="Intro">
      <el-input
        autosize
        type="textarea"
        v-model="block.intro"
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
      block: [],
      isNull: false
    }
  },
  methods: {
    submitEdit () {
      if (
        this.block.id === '' ||
        this.block.topic === '' ||
        this.block.intro === '' ||
        this.block.label === ''
      ) {
        alert('please check')
      } else {
        this.$store.dispatch('Block/editBlock', {
          id: this.block.id,
          topic: this.block.topic,
          label: this.block.label,
          intro: this.block.intro
        })
        setTimeout(() => {
          if (this.$store.getters['Block/getUpdateState']) {
            alert('update success')
          } else {
            alert('update fail')
          }
        }, 3000)
      }
    },
    goBack () {
      this.$router.push({
        path: '/readBlock/glance'
      })
    }
  },
  created () {
    this.block = this.$store.getters['Block/getBlockByIndex'](this.index)
    if (this.block === undefined) {
      this.$router.push({
        path: '/readBlock/glance'
      })
      this.isNull = true
    }
  }
}
</script>
<style lang=""></style>
