<template>
  <nav id="mainNav" class="navbar navbar-expand-lg navbar-light fixed-top py-3" :class="{ 'navbar-scrolled' : scrolled }">
    <div class="container">
      <nuxt-link class="navbar-brand js-scroll-trigger" to="/">
        {{ siteTitle }}
      </nuxt-link>

      <button
        v-if="hasLinks"
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="collapseMenu = !collapseMenu"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div v-if="hasLinks" id="navbarResponsive" class="navbar-collapse" :class="{ 'collapse' : collapseMenu}">
        <ul class="navbar-nav ml-auto my-2 my-lg-0">
          <li v-for="item in navLinks" :key="item.sys.id" class="nav-item">
            <Link :content="item" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
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
  data () {
    return {
      scrolled: false,
      collapseMenu: true
    }
  },
  computed: {
    siteTitle () {
      return this.content.title
    },
    navLinks () {
      return this.content.links || []
    },
    hasLinks () {
      return (typeof this.content.links !== 'undefined')
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  created () {
    // console.log(this.content)
  },
  methods: {
    handleScroll (event) {
      this.scrolled = (window.scrollY > 150)
    }
  }
}
</script>
