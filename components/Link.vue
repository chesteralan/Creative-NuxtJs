<template>
  <nuxt-link v-if="isNuxtLink" :to="linkUrl" class="js-scroll-trigger" :class="className" :target="target">
    {{ linkName }}
  </nuxt-link>
  <a v-else :href="linkUrl" class="js-scroll-trigger" :class="className" :target="target">
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
    switch (this.getEntryType(this.entry)) {
      case 'link':
        this.linkName = this.entry.fields.name
        this.linkUrl = this.entry.fields.link
        this.target = (this.entry.fields.newPage === true) ? '_blank' : '_top'
        this.className = this.entry.fields.className || 'nav-link'
        break
      case 'pages':
        this.linkName = this.entry.fields.menuName || this.entry.fields.pageTitle
        this.linkUrl = '/' + this.entry.fields.pageSlug
        this.isNuxtLink = true
        break
      case 'contactSection':
        this.linkName = this.entry.fields.menuName || this.entry.fields.title
        this.linkUrl = '/#' + (this.entry.fields.slug || this.getId)
        break
      case 'featuresSection':
        this.linkName = this.entry.fields.menuName || this.entry.fields.title
        this.linkUrl = '/#' + (this.entry.fields.slug || this.getId)
        break
      case 'gallerySection':
        this.linkName = this.entry.fields.menuName || this.entry.fields.title
        this.linkUrl = '/#' + (this.entry.fields.slug || this.getId)
        break
      case 'headerSection':
        this.linkName = this.entry.fields.menuName || this.entry.fields.title
        this.linkUrl = '/#' + (this.entry.fields.slug || this.getId)
        break
    }
  },
  data () {
    return {
      entry: {},
      linkName: '',
      linkUrl: '',
      isNuxtLink: false,
      target: '_top',
      className: 'nav-link'
    }
  },
  computed: {
    getId () {
      return this.content.sys.id
    }
  },
  created () {
    // console.log('Link', this.content)
  },
  methods: {
    getEntryType (entry) {
      const id = entry.sys.contentType.sys.id
      return id
    },
    getEntryId (entry) {
      const id = entry.sys.contentType.sys.id
      return id
    }
  }
}
</script>
