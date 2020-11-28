<template>
  <header class="masthead" :style="headerStyle">
    <div class="container h-100">
      <div class="row h-100 align-items-center justify-content-center text-center">
        <div class="col-lg-10 align-self-end">
          <h1 class="text-uppercase text-white font-weight-bold">
            {{ getTitle }}
          </h1>
          <hr class="divider my-4">
        </div>
        <div class="col-lg-8 align-self-baseline">
          <component :is="item.nodeType" v-for="(item,index) in getDescripton" :key="index" :content="item" class="text-white-75 font-weight-light mb-5" />
        </div>
      </div>
    </div>
  </header>
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
    getDescripton () {
      return this.content.description.content
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
  }
}
</script>
