<template>
  <Page :slug="default_page" />
</template>

<script>
import settings from '../content/settings.json'
export default {
  data () {
    return {
      default_page: settings.default_page
    }
  },
  created () {
    // console.log(settings.default_page)
  }
}
</script>

<style>

</style>
