<template>
  <div class='page-container landing'>
    <div class="hero">
      <h1><span>D</span><span>S</span><span>F</span> <span class='orange'><span>V</span><span>R</span></span></h1>
    </div>
  </div>
</template>

<script>
import Anime from 'animejs'
export default {
  props: ['scrollPos'],
  data() {
    return {
      height: 0,
      timeline: null,
      scrollAnimations: [],
      mouseX: 0,
      mouseY: 0,
    }
  },
  mounted() {
    this.height = this.$el.clientHeight
    this.timeline = Anime.timeline({
      autoplay: false
    })

    this.timeline.add({
      targets: '.landing h1',
      scale: 0,
      opacity: 0,
      elasticity: 0,
      autoplay: false,
      offset: 10,
    })


    this.timeline.add({
      targets: '.landing span:not(.orange), .landing span span',
      rotateX: () => ( Math.random() * 2 - 1 ) * 360,
      rotateY: () => ( Math.random() * 2 - 1 ) * 360,
      elasticity: 500,
      autoplay: false,
      offset: 10,
    })
  },
  watch: {
    scrollPos(newVal) {
      this.timeline.seek(
        this.timeline.duration * this.normalizedScrollPos * 0.2
      )
     
    },
  },
  computed: {
    normalizedScrollPos() {
      return Math.min(this.scrollPos, this.height) / this.height
    },
  },
}
</script>

<style scoped>

.landing {
  height: 150vh;
}

span {
  display: inline-block;
  will-change: transform;
}

.hero {
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  text-align: center;
  font-size: 12em;
  margin-top: 10vh;
}

h1 {
  margin: 0;
  font-weight: lighter;
}

</style>
