<template>
  <footer class="bg-light py-5">
    <div class="container">
      <div class="small text-center text-muted">
        Copyright &copy; {{ currentYear }}
        &middot; <a href="https://startbootstrap.com/theme/creative">Start Bootstrap</a>
        &middot; <a href="https://github.com/chesteralan/Creative-NuxtJs">Creative-NuxtJs</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      currentYear: new Date().getUTCFullYear()
    }
  }
}
</script>
