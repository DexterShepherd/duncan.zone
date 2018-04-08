<template>
  <div class='page-container work'>
    <h1 ref='workTitle' class='page-title'>
      WE DID THESE AMAZING JOBS<span class='work-anim orange'>.</span>
    </h1>

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
          id: '207528129',
          thumbnail: require('../assets/temp-images/1.png'),
          client: 'SONY',
          title: 'A VIDEO ABOUT A GIRL',
          size: 'full-width'
        },
        {
          id: '207475087',
          thumbnail: require('../assets/temp-images/2.png'),
          client: 'IBM',
          title: 'HALLWAY',
          size: 'third-width'
        },
        {
          id: '213954770',
          thumbnail: require('../assets/temp-images/3.png'),
          client: 'APPLE',
          title: 'FLOWERS AND COLORS',
          size: 'two-thirds-width'
        },
        {
          id: '206627186',
          thumbnail: require('../assets/temp-images/4.png'),
          client: 'SOME OTHE COMPANY',
          title: 'UNDISTRIBUTED NORWAY',
          size: 'half-width'
        },
        {
          id: '229153204',
          thumbnail: require('../assets/temp-images/5.png'),
          client: 'ARSENAL FC',
          title: 'PETALS',
          size: 'half-width'
        },
        {
          id: '225009076',
          thumbnail: require('../assets/temp-images/6.png'),
          client: 'SYNCOPY',
          title: 'INTERSTELLA',
          size: 'full-width'
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
  }
}
</script>
<style>

.work {
  min-height: 100vh;
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
  z-index: -2;
}

.videos-container {
  max-width: 1000px;
  margin: auto;
}

.work {
  text-align: center;
}

</style>
