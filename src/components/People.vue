<template>
  <div ref='main' class='people page-container'>
    <div ref='bgBlock1' class="people-background-anim"></div>
    <div class="people-scroll-anim">
      <h1 class='page-title'>WHO WE ARE<span class='orange people-dot-anim'>.</span></h1>
      <div class="people-container">
        <div class="person">
          <h3 class='person-heading centered'> DUNCAN SHEPHERD </h3>
          <h3 class='person-subhead centered'> EDITOR / CREATIVE DIRECTOR </h3>
          <p class='person-bio'>
            Editing award winning music videos, commercials and films since the 1990’s in London, New York and Los Angeles, now building on strong relationships our VR partners like Jaunt VR, Supersphere, Spherica and Spectacle.
          </p>
        </div>
      </div>
      <div class="people-container">
        <div class="person">
          <h3 class='person-heading centered'> DARWIN MINARD </h3>
          <h3 class='person-subhead centered'> EDITOR </h3>
          <p class='person-bio'>
            For over a year now Darwin has been a lead element of the company, editing and delivering series content for the NFL, KIA, and Royal Carribean Cruises. A very solid guy to have on the case
          </p>
        </div>
      </div>
      <div class="people-container">
        <div class="person">
          <h3 class='person-heading centered'> VANESSA BROGNA </h3>
          <h3 class='person-subhead centered'> EDITOR </h3>
          <p class='person-bio'>
            Vanessa is a VR native, editing NFL, NBA, sizzles and promos with aplomb. Keeps taking on larger roles, we still haven’t found her limits.
          </p>
        </div>
      </div>
      <div class="people-container">
        <div class="person">
          <h3 class='person-heading centered'> BRIAN ZWEINER </h3>
          <h3 class='person-subhead centered'> EDITOR </h3>
          <p class='person-bio'>
            A long time editorial collaborator since before the days of VR, in addition to helping develop VR editing techniques for Paul McCartney, Brian is also deeply involved in our workflow architecture, keeping us ahead of ever more challenging technical formats and deliveries.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const numBGBlocks = 1
    this.$nextTick(() => {
      const rect = this.$refs.main.getBoundingClientRect()
      this.$emit('dims', rect)
      for(let i = 0; i < numBGBlocks; i += 1) {
        this.$refs[`bgBlock${i + 1}`].style.height = `${ ( rect.height / numBGBlocks ) + 1 }px`
        this.$refs[`bgBlock${i + 1}`].style.top = `${ rect.top + ( rect.height / numBGBlocks ) * i }px`
      }
    })
  }
}
</script>

<style scoped>
.page-title {
  padding-bottom: 50px;
}

.people {
  padding: 100px 0;
  color: #1E1E20;
}

.people-container {
  display: flex; 
  justify-content: space-around
}

.person {
  max-width: 700px;
  padding: 20px 20%;
}

.person-heading {
  margin: 0;
  padding: 0;
}

.person-subhead {
  opacity: 0.9;
  margin: 0;
  padding: 0;
  font-weight: lighter;
  font-size: 1em;
}

.person-bio {
  padding-bottom: 20px;
}

.right {
  float: right;
}

.people-background-anim {
  display: block;
  position: absolute;
  width: 100%;
  background-color: #fdfdfd;
  transform-origin: right;
  z-index: -1;
}

.people-dot-anim {
  display: inline-block;
}

</style>
