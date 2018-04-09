<template>
  <div class='page-container landing'>
    <div ref='main' class="hero">
      <h1><span>D</span><span>S</span><span>F</span> <span class='orange'><span>V</span><span>R</span></span></h1>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      const rect = this.$refs.main.getBoundingClientRect()
      this.$emit('dims', rect)
    })
  }
}
</script>

<style scoped>

.landing {
  height: 100vh;
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
  font-size: 8em;
  margin-top: 10vh;
}

h1 {
  margin: 0;
}

@media screen and (max-width: 62em) {
  .hero {
    font-size: 6em;
  }
}

@media screen and (max-width: 45em) {
  .hero {
    font-size: 4em;
  }
}

@media screen and (max-width: 30em) {
  .hero {
    font-size: 2em;
  }
}

</style>
