<template>
  <nuxt-link v-if="isNuxtLink" :to="linkUrl" class="nav-link js-scroll-trigger" :target="target">
    {{ linkName }}
  </nuxt-link>
  <a v-else :href="linkUrl" class="nav-link js-scroll-trigger" :target="target">
    {{ linkName }}
  </a>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  props: {
    content: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  async fetch () {
    this.entry = await client.getEntry(this.getId)
    switch (this.entry.sys.contentType.sys.id) {
      case 'link':
        this.linkName = this.entry.fields.name
        this.linkUrl = this.entry.fields.link
        this.target = (this.entry.fields.newPage === true) ? '_blank' : '_top'
        break
      case 'pages':
        this.linkName = this.entry.fields.pageTitle
        this.linkUrl = '/' + this.entry.fields.pageSlug
        this.isNuxtLink = true
        break
    }
  },
  data () {
    return {
      entry: {},
      linkName: '',
      linkUrl: '',
      isNuxtLink: false,
      target: '_top'
    }
  },
  computed: {
    getId () {
      return this.content.sys.id
    }
  }
}
</script>
