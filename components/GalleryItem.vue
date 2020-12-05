<template>
  <a class="portfolio-box" :href="getLink" :target="getTarget">
    <img class="img-fluid" :src="image" :alt="title">
    <div class="portfolio-box-caption">
      <div class="project-name">{{ title }}</div>
    </div>
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
    this.title = this.entry.fields.name
    this.image = this.entry.fields.image.fields.file.url
    if (typeof this.entry.fields.link !== 'undefined') {
      this.link = this.entry.fields.link.fields
    }
  },
  data () {
    return {
      entry: {},
      title: '',
      image: '',
      link: {
        link: '#',
        newPage: false
      }
    }
  },
  computed: {
    getId () {
      return this.content.sys.id
    },
    getLink () {
      return this.link.link
    },
    getTarget () {
      return (this.link.newPage === true) ? '_blank' : '_top'
    }
  },
  created () {
    // console.log('GalleryItem', this.content)
  }
}
</script>
