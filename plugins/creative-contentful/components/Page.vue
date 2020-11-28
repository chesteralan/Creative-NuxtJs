<template>
  <div id="page-top">
    <component :is="item.nodeType" v-for="(item,index) in currentPage.body" :key="index" :content="item" />
  </div>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      default: ''
    }
  },
  computed: {
    currentPage () {
      return this.$store.getters.getPageBySlug(this.slug)
    }
  }
}
</script>
