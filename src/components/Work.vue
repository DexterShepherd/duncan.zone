<template>
  <div class='page-container work'>
    <h1 class='page-title'>
      We did these amazing jobs<span class='orange'>.</span>
    </h1>

    <div class="videos-container">
      <Video v-for="v in videos"
             :thumbnail="v.thumbnail"
             :size='v.size'
             :title='v.title'
             />
    </div>
  </div>
</template>

<script>
import Video from './Video.vue'

export default {
  components: {
    Video
  },
  data() {
    return {
      videos: [ 
        {
          id: '1',
          thumbnail: require('../assets/temp-images/1.png'),
          title: 'sick',
          size: 'full-width'
        },
        {
          id: '2',
          thumbnail: require('../assets/temp-images/2.png'),
          title: 'sick',
          size: 'third-width'
        },
        {
          id: '3',
          thumbnail: require('../assets/temp-images/3.png'),
          title: 'sick',
          size: 'two-thirds-width'
        },
        {
          id: '4',
          thumbnail: require('../assets/temp-images/4.png'),
          title: 'sick',
          size: 'half-width'
        },
        {
          id: '5',
          thumbnail: require('../assets/temp-images/5.png'),
          title: 'sick',
          size: 'half-width'
        },
        {
          id: '6',
          thumbnail: require('../assets/temp-images/6.png'),
          title: 'sick',
          size: 'full-width'
        }
      ]
    }
  }
}
</script>
<style scoped>
.work {
  text-align: center;
}

.page-title {
  padding-top: 2em;
}
</style>
