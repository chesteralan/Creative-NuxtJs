<template>
  <div class="col-lg-3 col-md-6 text-center">
    <div class="mt-5">
      <i :class="itemIcon" />
      <h3 class="h4 mb-2">
        {{ itemTitle }}
      </h3>
      <p class="text-muted mb-0">
        <component :is="formatModuleName(item.nodeType)" v-for="(item,i) in itemDescription" :key="i" :content="item" />
      </p>
    </div>
  </div>
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
      case 'featuresItem':
        this.itemTitle = this.entry.fields.title
        this.itemDescription = this.entry.fields.description.content
        this.itemIcon = this.entry.fields.iconClass || ''
        break
    }
  },
  data () {
    return {
      entry: {},
      itemTitle: '',
      itemDescription: '',
      itemIcon: ''
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
    formatModuleName (text) {
      return text.split('-').map((w) => {
        return w[0].toUpperCase() + w.substr(1).toLowerCase()
      }).join('')
    }
  }
}
</script>
