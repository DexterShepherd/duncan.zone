// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueParallaxJs from 'vue-parallax-js'
import VueScrollReveal from 'vue-scroll-reveal'
import VueScroll from 'vue-scroll'

Vue.use(VueParallaxJs)
Vue.use(VueScroll)
Vue.use(VueScrollReveal, {
  duration: 1000,
  distance: '10px',
  scale: 1,
  reset: false,
  mobile: false,
  viewFactor: 0.2
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
