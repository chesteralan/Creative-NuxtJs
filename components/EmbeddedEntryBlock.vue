<template>
  <component :is="getContentType" :content="getContentFields" />
</template>

<script>

export default {
  name: 'EmbeddedEntryBlock',
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
      let contentType = 'Blank'
      switch (this.content.data.target.sys.type) {
        case 'Entry':
          contentType = this.content.data.target.sys.contentType.sys.id
          break
        case 'Link':
          contentType = this.content.data.target.sys.type
          break
        default:
          if (this.$root.context.isDev) {
            // console.log('EmbeddedEntryBlock: Unknown', this.content.data.target.sys)
          }
          break
      }
      return contentType
    },
    getContentFields () {
      let contentFields = ''
      switch (this.content.data.target.sys.type) {
        case 'Entry':
          contentFields = this.content.data.target.fields
          break
        case 'Link':
          contentFields = this.content.data.target
          break
        default:
          if (this.$root.context.isDev) {
            // console.log('EmbeddedEntryBlock: Unknown', this.content.data.target.sys)
          }
          break
      }
      return contentFields
    }
  },
  created () {
    if (this.$root.context.isDev) {
      // console.log('EmbeddedEntryBlock', this.content)
    }
  }
}
</script>
