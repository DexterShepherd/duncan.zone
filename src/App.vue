<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Share+Tech');
@import url('https://fonts.googleapis.com/css?family=Fjalla+One');
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300i,400');

body {
  border: 0;
  padding: 0;
  margin: 0;
  background: #1E1E20;
}

body.no-scroll {
  overflow: hidden;
}

#app {
  font-family: "Futura", sans-serif;
  font-weight: lighter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fdfdfd;
}

.orange {
  color: #DC3522;
}

</style>
