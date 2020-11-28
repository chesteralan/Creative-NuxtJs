<template>
  <component :is="getContentType" :content="getContentFields" />
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    getContentType () {
      return this.content.data.target.sys.contentType.sys.id
    },
    getContentFields () {
      return this.content.data.target.fields
    }
  },
  created () {
    // console.log(this.content)
  }
}
</script>
