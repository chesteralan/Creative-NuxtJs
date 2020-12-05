<template>
  <div id="page-top">
    <component :is="formatModuleName(item.nodeType)" v-for="(item,index) in currentPage.body" :key="index" :content="item" />
    <Footer />
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
  },
  methods: {
    formatModuleName (text) {
      return text.split('-').map((w) => {
        return w[0].toUpperCase() + w.substr(1).toLowerCase()
      }).join('')
    }
  }
}
</script>
