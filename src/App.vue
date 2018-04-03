<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Share+Tech');

body {
  border: 0;
  padding: 0;
  margin: 0;
  background: #1E1E20;
}

#app {
  font-family: "Share Tech", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fdfdfd;
}

.orange {
  color: #DC3522;
}


</style>
