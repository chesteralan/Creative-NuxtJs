<template>
  <section :id="getSlug" class="page-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 class="mt-0">
            {{ getTitle }}
          </h2>
          <hr class="divider my-4">
          <p class="text-muted mb-5">
            {{ getDescription }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
          <i class="fas fa-phone fa-3x mb-3 text-muted" />
          <div>{{ getPhoneNumber }}</div>
        </div>
        <div class="col-lg-4 mr-auto text-center">
          <i class="fas fa-envelope fa-3x mb-3 text-muted" />
          <!-- Make sure to change the email address in BOTH the anchor text and the link target below!-->
          <a
            class="d-block"
            :href="`mailto:${getEmailAddress}`"
          >{{ getEmailAddress }}</a>
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
    getTitle () {
      return this.content.title
    },
    getSlug () {
      return this.content.slug || 'contact'
    },
    getDescription () {
      return this.content.description
    },
    getPhoneNumber () {
      return this.content.phoneNumber
    },
    getEmailAddress () {
      return this.content.emailAddress
    }
  },
  created () {
    // console.log('contactSection', this.content)
  }
}
</script>
