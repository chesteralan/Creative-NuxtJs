<template>
  <section :id="getSlug" class="page-section">
    <div class="container">
      <h2 class="text-center mt-0">
        {{ getTitle }}
      </h2>
      <hr class="divider my-4">
      <div v-if="hasItems" class="row">
        <FeaturesItem v-for="item in getItems" :key="item.sys.id" :content="item" />
      </div>
    </div>
  </section>
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
    getTitle () {
      return this.content.title
    },
    getSlug () {
      return this.content.slug
    },
    getItems () {
      return this.content.items
    },
    hasItems () {
      return typeof this.content.items !== 'undefined' && this.content.items.length > 0
    }
  },
  created () {
    // console.log('FeaturesSection', this.content)
  }
}
</script>
