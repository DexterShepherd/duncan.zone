<template>
  <div ref='main' class='footer'>
    <hr />
    <div class="contact">
      <h3 class='la'>LOS ANGELES</h3>
      <p>DUNCAN SHEPHERD</p>
      <p>CREATIVE DIRECTOR</p>
      <a href="mailto:duncan@duncan.zone">duncan@duncan.zone</a>
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

<style>
.footer {
  height: 164px;
  width: 100vw;
  text-align: center;
  padding-bottom: 36px;
  background-color: #fdfdfd;
  color: #1E1E20;
  border: 0;
}

.footer h3 {
  margin: 0;
  padding-top: 36px
}

.footer hr {
  margin: 0;
}

.contact {
  opacity: 0.8;
}

.la {
  text-decoration: underline;
}

.footer a {
  margin: 0;
  color: #1E1E20;
}

</style>
