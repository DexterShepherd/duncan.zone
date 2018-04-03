<template>
  <div :class="['thumbnail', size]"
       :style="bgImage"
       @mouseover="active = true"
       @mouseleave="active = false">
    <transition name='fade'>
      <div class='video-cover' v-show='active'>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    thumbnail: String,
    id: String,
    title: String,
    size: String
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    bgImage() {
      return `background-image: url(${this.thumbnail})`
    }
  }
}
</script>

<style scoped>

.video-cover {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0);
  opacity: 0.5;
}

.video-title {
  z-index: 2;
  margin: 0;
  padding: 0;
  border: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease-in-out;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

.thumbnail {
  display: inline-block;
  margin: 5px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0 37.125px 70px -12.125px rgba(0,0,0,0.7);
}

.full-width {
  height: 360px;
  width: calc(94% + 10px);
}

.third-width {
  height: 240px;
  width: 32%;
}

.two-thirds-width {
  height: 240px;
  width: 62%;
}

.half-width {
  height: 240px;
  width: 47%;
}

</style>
