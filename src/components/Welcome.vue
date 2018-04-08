<template>
  <div class="container">
    <Hero />
    <Thoughts/>
    <Work />
    <People />
  </div>
</template>

<script>
import anime from 'animejs'

import Hero from './Hero.vue'
import Thoughts from './Thoughts.vue'
import Work from './Work.vue'
import People from './People.vue'

export default {
  components: {
    Hero,
    Thoughts,
    Work,
    People
  },
  data() {
    return {
      scrollPos: null,
      pageHeight: null,
      screenHeight: null,
      timeline: null,
      showThoughts: true,
    }
  },
  methods: {
    onScroll() {
      this.scrollPos = document.documentElement.scrollTop ||
        document.body.scrollTop

      this.timeline.seek( this.scrollPos )

    },
    initAnimations() {
      this.timeline = anime.timeline({
        autoplay: false
      })

      this.timeline.add({
        targets: '.landing h1',
        scale: 0,
        opacity: 0,
        elasticity: 0,
        duration: this.screenHeight,
        easing: 'easeInQuad'
      }).add({
        targets: '.landing span:not(.orange), .landing span span',
        rotateX: () => ( Math.random() * 2 - 1 ) * 360,
        rotateY: () => ( Math.random() * 2 - 1 ) * 360,
        duration: this.screenHeight,
        offset: 0,
        easing: 'easeInQuad'
      }).add({
        targets: '.thoughts-background-anim',
        scaleX: [0, 1.1],
        elasticty: 0,
        duration: 500,
        delay: (el, i) => i * 100,
        offset: this.screenHeight * 0.4,
        easing: 'easeInOutQuad'
      }).add({
        targets: '.thoughts-dot-anim',
        translateY: [50, 0],
        opacity: [ 0, 1 ],
        elasticty: 20,
        duration: 100,
        offset: this.screenHeight,
        easing: 'easeInOutQuad'
      }).add({
        targets: '.thoughts-scroll-anim',
        translateY: 1000,
        elasticty: 20,
        duration: 1000,
        offset: this.screenHeight,
        easing: 'easeInOutQuad'
      }).add({
        targets: '.thoughts-dot-anim',
        elasticty: 20,
        translateY: -20,
        opacity: 0,
        duration: 100,
        offset: this.screenHeight + 400,
        easing: 'easeInOutQuad',
      }).add({
        targets: '.work-anim',
        rotateX: 0,
        rotateY: 0,
        elasticity: 0,
        offset: this.screenHeight * 1.5,
        duration: this.screenHeight * 2,
      })
    }
  },
  created() {
    window.addEventListener('scroll', this.onScroll)
  },
  mounted() {
    this.screenHeight = window.innerHeight 
    this.pageHeight = this.$el.clientHeight
    this.initAnimations();
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  },
} 
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .6s ease-in-out;
}  

.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
