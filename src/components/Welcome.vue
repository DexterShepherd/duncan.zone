<template>
  <div class="container">
    <Hero />
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
} 
</script>

<style scoped>
.page-container {
  height: 100vh;
}
</style>
