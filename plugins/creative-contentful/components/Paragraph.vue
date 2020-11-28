<template>
  <p>{{ value }}</p>
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
  data () {
    return {
      value: ''
    }
  },
  mounted () {
    for (const i in this.content.content) {
      this.value += this.content.content[i].value
    }
  },
  created () {
    // console.log('paragraph', this.content)
  }
}
</script>
