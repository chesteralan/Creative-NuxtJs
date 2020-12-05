<template>
  <section id="portfolio">
    <div class="container-fluid p-0">
      <div class="row no-gutters">
        <div v-for="item in galleryItems" :key="item.sys.id" class="col-lg-4 col-sm-6">
          <galleryItem :content="item" />
        </div>
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
    galleryItems () {
      return this.content.items
    }
  },
  created () {
    // console.log('GallerySection', this.content)
  }
}
</script>
