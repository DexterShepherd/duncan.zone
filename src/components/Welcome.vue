<template>
  <div class="container">
    <Hero :scrollPos="scrollPos"/>
    <Work />
  </div>
</template>

<script>
import Hero from './Hero.vue'
import Video from './Video.vue'
import Work from './Work.vue'

export default {
  components: {
    Hero,
    Work
  },
  data() {
    return {
      scrollPos: null
    }
  },
  created() {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.scrollPos = document.documentElement.scrollTop || document.body.scrollTop
    }
  }
} 
</script>

<style scoped>
</style>
