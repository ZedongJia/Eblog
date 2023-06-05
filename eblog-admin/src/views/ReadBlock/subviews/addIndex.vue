<template lang="">
  <el-form
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
      @click="submitAdd"
      >Add</el-button
    >
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      block: {
        topic: '',
        label: '',
        intro: ''
      }
    }
  },
  methods: {
    submitAdd () {
      if (
        this.block.topic === '' ||
        this.block.intro === '' ||
        this.block.label === ''
      ) {
        alert('please check')
      } else {
        this.$store.dispatch('Block/addBlock', {
          topic: this.block.topic,
          label: this.block.label,
          intro: this.block.intro
        })
        setTimeout(() => {
          if (this.$store.getters['Block/getAddState']) {
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
