<template>
  <div :class="['thumbnail', size, isMobile ? 'gray' : '']"
       :style="bgImage"
       @mouseover="active = true"
       @mouseleave="active = false"
       @click="$emit('view')">
    <div class='video-info'>
      <transition name='text-slide-down'>
        <h3 class='video-client' v-if="client" v-show='active || isMobile '> {{ client }} </h3>
      </transition>
      <transition name='hr'>
        <hr v-if="client" v-show='active || isMobile'/>
      </transition>
      <transition name='text-slide-up'>
        <h1 class='video-title' v-show='active || isMobile'> {{ title }}</h1>
      </transition>
    </div>
    <transition name='fade'>
      <div class='video-cover' v-show='active'></div>
    </transition>
  </div>
</template>

<script>
import isMobile from 'is-mobile'
export default {
  props: {
    thumbnail: String,
    id: String,
    title: String,
    client: String,
    size: String
  },
  data() {
    return {
      active: false,
      viewing: false,
      isMobile: isMobile()
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
  z-index: -1;
}

.video-title {
  color: #fdfdfd;
  padding: 0;
  margin: 0;
}

.gray {
  -webkit-filter: grayscale(50%);
  filter: grayscale(50%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease-in-out;
} 

.fade-leave-active {
  transition-delay: .3s;
}

.fade-enter, .fade-leave-to{
  opacity: 0;
}

.text-slide-up-enter-active, .text-slide-up-leave-active {
  transition: all .6s ease-in-out;
}

.text-slide-up-leave-active {
  transition-delay: .3s
}

.text-slide-up-enter, .text-slide-up-leave-to{
  opacity: 0;
}

.text-slide-up-enter {
  transform: translateY(40px);
}

.text-slide-up-leave-to {
  transform: translateY(-40px);
}

.text-slide-down-enter-active, .text-slide-down-leave-active {
  transition: all .6s ease-in-out;
} 

.text-slide-down-leave-active {
  transition-delay: .3s
}

.text-slide-down-enter, .text-slide-down-leave-to{
  opacity: 0;
}

.text-slide-down-enter {
  transform: translateY(-40px);
}

.text-slide-down-leave-to {
  transform: translateY(40px);
}

.hr-enter-active, .hr-leave-active {
  transition: all .6s ease-in-out;
}

.hr-enter, .hr-leave-to{
  opacity: 0;
  transform: scaleX(0);
}

.thumbnail {
  display: inline-block;
  vertical-align: top;
  margin: 5px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 5px 10px 20px 0 rgba(255, 255, 255,0.05);
}

.full-width {
  height: 360px;
  width: calc(94% + 10px);
}


.full-width .video-info {
  padding-top: 120px;
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

.third-width .video-info, .half-width .video-info, .two-thirds-width .video-info {
  padding-top: 60px;
}

@media screen and (max-width: 700px) {
  .thumbnail {
    height: 240px !important;
    width: 90% !important;
  }

  .video-info {
    padding-top: 60px !important;
  }
}

</style>
