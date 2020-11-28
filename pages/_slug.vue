<template>
  <Page v-if="pageExists" :slug="slug" />
  <Page404 v-else :slug="slug" />
</template>

<script>
export default {
  asyncData ({ params, store }) {
    return {
      pageExists: store.getters.isPageBySlug(params.slug),
      slug: params.slug
    }
  }

}
</script>

<style>

</style>
