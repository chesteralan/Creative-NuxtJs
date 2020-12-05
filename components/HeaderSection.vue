<template>
  <component :is="rootComponent" :id="getSlug" :style="headerStyle">
    <div class="container h-100">
      <div class="row h-100 align-items-center justify-content-center text-center">
        <div class="col-lg-10 align-self-end">
          <component :is="HTagComponent" class="text-white font-weight-bold">
            {{ getTitle }}
          </component>
          <hr v-if="hasDescripton" class="divider my-4">
        </div>
        <div class="col-lg-8 align-self-baseline">
          <component :is="formatModuleName(item.nodeType)" v-for="(item,i) in getDescripton" :key="i" :content="item" />
        </div>
      </div>
    </div>
  </component>
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
    rootComponent () {
      return (this.content.isHeader === true) ? 'HeaderRoot' : 'SectionRoot'
    },
    HTagComponent () {
      return (this.content.isHeader === true) ? 'H1Root' : 'H3Root'
    },
    getTitle () {
      return this.content.title
    },
    getSlug () {
      return this.content.slug || 'header'
    },
    getDescripton () {
      return this.content.description.content
    },
    hasDescripton () {
      return (this.content.description.content.length > 0)
    },
    getBgImage () {
      return this.content.backgroundImage.fields.file.url.fields.file.url
    },
    getBgColor () {
      return this.content.backgroundColor
    },
    headerStyle () {
      let style = ''
      if (typeof this.content.backgroundImage !== 'undefined') {
        style += `background-image: url(${this.getBgImage});`
      }
      if (typeof this.content.backgroundColor !== 'undefined') {
        style += `background-color:${this.getBgColor};`
      }
      return style
    }
  },
  created () {
    // console.log('HeaderSection', this.content)
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

<style scoped>
header p {
  color: #FFF;
}
section hr.divider {
  border-color: #FFF;
}
</style>
