<template>
  <a class="portfolio-box" href="#">
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
  },
  data () {
    return {
      entry: {},
      title: '',
      image: ''
    }
  },
  computed: {
    getId () {
      return this.content.sys.id
    }
  },
  created () {
    // console.log('GalleryItem', this.content)
  }
}
</script>
