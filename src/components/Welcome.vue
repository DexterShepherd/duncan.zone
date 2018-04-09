<template>
  <div class="container">
    <Hero @dims='onDims("hero", $event )'/>
    <Thoughts @dims='onDims("thoughts", $event )' />
    <Work @dims='onDims("work", $event )'/>
    <People @dims='onDims("people", $event )'/>
    <Footer @dims='onDims("footer", $event )'/>
  </div>
</template>

<script>
import anime from 'animejs'

import Hero from './Hero.vue'
import Thoughts from './Thoughts.vue'
import Work from './Work.vue'
import People from './People.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Hero,
    Thoughts,
    Work,
    People,
    Footer
  },
  data() {
    return {
      scrollPos: null,
      pageHeight: null,
      screenHeight: null,
      timeline: null,
      showThoughts: true,
      pageDims: {
        hero: null,
        thoughts: null,
        work: null,
        people: null
      }
    }
  },
  methods: {
    onScroll() {
      this.scrollPos = document.documentElement.scrollTop ||
        document.body.scrollTop

      this.timeline.seek( this.scrollPos )

    },
    onDims(component, payload) {
      this.pageDims[component] = payload
      if( !!this.pageDims['hero'] &&
          !!this.pageDims['work'] &&
          !!this.pageDims['thoughts'] &&
          !!this.pageDims['people'] &&
          !!this.pageDims['footer']
      ) {
        this.initAnimations()
      }
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
        offset: this.pageDims.thoughts.top + 100,
        easing: 'easeInOutQuad'
      }).add({
        targets: '.thoughts-dot-anim',
        elasticty: 20,
        translateY: -20,
        opacity: 0,
        duration: 100,
        offset: this.pageDims.thoughts.top + ( this.pageDims.thoughts.height * 0.5 ),
        easing: 'easeInOutQuad',
      }).add({
        targets: '.work-title-anim-container',
        translateY: [-200, 0],
        elasticity: 0,
        offset: this.pageDims.work.top - ( this.pageDims.thoughts.height * 0.3 ),
        duration: 1000,
      }).add({
        targets: '.work-anim',
        rotateX: 0,
        rotateY: 0,
        opacity: [0, 1],
        elasticity: 0,
        offset: this.pageDims.work.top - ( this.pageDims.thoughts.height * 0.3 ),
        duration: 1000,
      }).add({
        targets: '.people-background-anim',
        scaleX: [0, 1.1],
        elasticty: 0,
        duration: 500,
        delay: (el, i) => i * ( this.pageDims.people.height * 0.15 ),
        offset: this.pageDims.people.top - ( this.pageDims.people.height * 0.5 ),
        easing: 'easeInOutQuad'
      }).add({
        targets: '.people-dot-anim',
        translateY: [50, 0],
        opacity: [ 0, 1 ],
        elasticty: 20,
        duration: 100,
        offset: `-=${this.pageDims.people.height * 0.4}`,
        easing: 'easeInOutQuad'
      }).add({
        targets: '.footer hr',
        scaleX: [ 0, 1 ],
        elasticty: 20,
        duration: 100,
        offset: this.pageDims.people.top + this.pageDims.people.height * 0.3,
        easing: 'easeInOutQuad'
      })
    }
  },
  created() {
    window.addEventListener('scroll', this.onScroll)
  },
  mounted() {
    this.screenHeight = window.innerHeight 
    this.pageHeight = this.$el.clientHeight
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
