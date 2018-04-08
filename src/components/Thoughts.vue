<template>
  <div ref='main' class='thoughts page-container'>
    <div ref='bgBlock1' class="thoughts-background-anim"></div>
    <div ref='bgBlock2' class="thoughts-background-anim"></div>
    <div ref='bgBlock3' class="thoughts-background-anim"></div>
    <div class="thoughts-scroll-anim">
      <h1 class='page-title'>ABOUT US<span class='thoughts-dot-anim orange'>.</span></h1>
      <div class='bio-container'>
        <div class='bio'>
          <div class='subhead'>
            <p>We do VR. <br/>
               It's a thing, and we love it</p>
          </div>
          <p>
            Over the last 3 years of explosive development in VR systems and tools, our goal has been to work in pushing this new format and cinematic language into places we never thought it could go.
          </p>
          <p>
            We have been lucky and privileged enough to contribute to award winning projects for The Olympics Channel “Trending Gold”, Paul McCartney’s “Pure” release, Conservation International, Intel, Kia, LA2024 Olympics Bid, Lexus, and work for Apple Inc.
          </p>
          <p>
            The VR team at Duncan Shepherd Films, and our partners in post production, have developed a rarified set of skills and understanding of this art form to bring your campaigns and projects to their full potential, as stories and experiences that are more than just a Virtual Reality. 
          </p>
          <p class='thoughts-thesis-anim underline centered'>
            They are Virtual Reality Films.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      const rect = this.$refs.main.getBoundingClientRect()
      for(let i = 0; i < 3; i += 1) {
        this.$refs[`bgBlock${i + 1}`].style.height = `${ ( rect.height / 3 ) + 1 }px`
        this.$refs[`bgBlock${i + 1}`].style.top = `${ rect.top + ( rect.height / 3 ) * i }px`
      }
    })
  }
}
</script>

<style scoped>
.thoughts {
  min-height: 100vh;
  width: 100%;
  color: #1E1E20;
  padding-bottom: 200px;
}
.thoughts .page-title {
  width: 100%;
  text-align: center;
  display: inline-block;
  padding: 7em 0 0 0;
  margin: 0;
}

.thoughts-anim {
  display: inline-block;
}

.subhead {
  text-align: center;
  font-size: 1.2em;
  padding-bottom: 2em;
}

.centered {
  text-align: center;
}


.bio-container {
  display: flex; 
  justify-content: space-around
}

.bio {
  padding: 20px;
  max-width: 700px;
}

.thoughts-background-anim {
  display: block;
  position: absolute;
  width: 100%;
  background-color: #fdfdfd;
  transform-origin: left;
  z-index: -1;
}

.thoughts-dot-anim, .thoughs-thesis-anim {
  display: inline-block;
}


</style>
