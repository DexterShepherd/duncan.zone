<template>
  <div ref='main' class='page-container work'>
    <div class="work-title-anim-container">
      <h1 ref='workTitle' class='page-title'>
        WE DID THESE AMAZING JOBS<span class='work-anim orange'>.</span>
      </h1>
    </div>

    <transition name='simple-fade'>
      <div class="videos-container">
        <Video v-for="v in videos"
               :thumbnail="v.thumbnail"
               :client='v.client' :size='v.size'
               :title='v.title'
               :key='v.id'
               @view="() => { onView(v.id) }"
               v-scroll-reveal />
      </div>
    </transition>

    <transition name='view'>
      <div class='viewer' v-show='viewing'>
        <transition name='x'>
          <XIcon v-show='viewing' class='viewer-close' @click='unmountPlayer'/>     
        </transition>
        <transition name='frame'>
        <iframe id='player-iframe' v-show='playerReady' :src="viewing ? `https://player.vimeo.com/video/${selectedVideoID}?color=ffffff&title=0&byline=0&portrait=0` : ''" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import Player from '@vimeo/player'
import Video from './Video.vue'
import { XIcon } from 'vue-feather-icons'

export default {
  props: ['animFinished'],
  components: {
    Video,
    XIcon
  },
  data() {
    return {
      viewing: false,
      player: null,
      playerReady: false,
      unloadFrameTimer: null,
      videos: [ 
        {
          id: '227954598',
          thumbnail: require('../assets/thumbnails/reel.png'),
          client: null,
          title: 'VR SHOW REEL AUG 2017',
          size: 'full-width'
        },
        {
          id: '263701467',
          thumbnail: require('../assets/thumbnails/one-big-air.png'),
          client: null,
          title: 'ONE BIG AIR',
          size: 'third-width'
        },
        {
          id: '263739772',
          thumbnail: require('../assets/thumbnails/under-the-canopy.png'),
          client: null,
          title: 'UNDER THE CANOPY',
          size: 'two-thirds-width'
        },
        {
          id: '263702538',
          thumbnail: require('../assets/thumbnails/la-2024.png'),
          client: null,
          title: 'LA 2024 OLYMPIC BID',
          size: 'half-width'
        },
        {
          id: '263740656',
          thumbnail: require('../assets/thumbnails/early-days.png'),
          client: 'PAUL MCCARTNEY',
          title: 'EARLY DAYS',
          size: 'half-width'
        },
        {
          id: '263704048',
          thumbnail: require('../assets/thumbnails/espn.png'),
          client: null,
          title: 'ESPN MICHIGAN AT OHIO STATE',
          size: 'two-thirds-width'
        },
        {
          id: '263701896',
          thumbnail: require('../assets/thumbnails/soul-shredding.png'),
          client: null,
          title: 'SOUL SHREDDING',
          size: 'third-width'
        }
      ]
    }
  },
  methods: {
    unmountPlayer() {
      this.playerReady = false
      setTimeout(() => this.viewing = false, 500)
    },
    onView(id) {
      this.viewing = true
      this.selectedVideoID = id
    }
  },
  watch: {
    viewing(v) {
      if (v) {
        document.querySelector('body').classList.add('no-scroll')
        this.$nextTick(() => {
          this.player = new Player('player-iframe')
          this.player.ready().then(() => {
            this.playerReady = true
          })
        })
      } else {
        document.querySelector('body').classList.remove('no-scroll')
        this.player = null
      }
    },
  },
  computed: {
    normalizedScrollPos() {
      return (this.scrollPos - ( this.top - this.windowHeight)) / this.windowHeight
    },
  },
  mounted() {
    const text = this.$refs.workTitle.innerHTML.split('<')[0]
    const dot = this.$refs.workTitle.innerHTML.split('<')[1]
    const spanned = text.split('').map((c) => {
      if (c == ' ') {
        return c
      }
      const style = `transform: rotateX(${( Math.random() * 2 - 1 ) * 360}deg) rotateY(${( Math.random() * 2 - 1 ) * 360}deg)`
      return `<span class='work-anim' style="${style}">${c}</span>`
    }).join('') + '<' + dot
    this.$refs.workTitle.innerHTML = spanned

    this.$nextTick(() => {
      const rect = this.$refs.main.getBoundingClientRect()
      this.$emit('dims', rect)
    })
  }
}
</script>
<style>

.work {
  min-height: 100vh;
  padding-bottom: 200px;
}
.work .page-title {
  display: inline-block;
  padding: 256px 0 64px 0;
}

.work-anim {
  display: inline-block;
}

.viewer-close {
  width: 50px;
  height: 50px;
  padding: 20px;
  float: right;
  transition: all .3s ease-in-out;
}

.viewer-close:hover {
  transform: scaleX(2) scaleY(2);
}

.x-enter-active {
  transition: all .6s ease-in-out;
} 

.x-enter {
  opacity: 0.3;
  transform: scale(2);
}

.view-enter-active, .view-leave-active {
  transition: opacity .6s ease-in-out;
}  
.view-leave-active {
  transition-delay: .3s;
}

.view-enter, .view-leave-to{
  opacity: 0;
}

.frame-enter-active {
  transition: all 1.5s ease-in-out;
} 

.frame-leave-active {
  transition: all .5s ease-in-out;
} 

.frame-enter, .frame-leave-to {
  opacity: 0;
}

.simple-fade-enter-active, .simple-fade-leave-active {
  transition: opacity .6s ease-in-out;
  transition-delay: .5s;
}  

.simple-fade-enter, .simple-fade-leave-to{
  opacity: 0;
}

.viewer {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: #1E1E20;
}

.viewer iframe {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

.videos-container {
  max-width: 1000px;
  margin: auto;
}

.work {
  text-align: center;
}

@media screen and (max-width: 62em) {
  .work .page-title {
    font-size: 1em;
  }
}

@media screen and (max-width: 35em) {
  .work .page-title {
    font-size: 1.2em;
  }
}

</style>
