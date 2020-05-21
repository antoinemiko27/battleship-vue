import Vue from 'vue'
import App from './App.vue'
import Jeu from './jeu.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


const route = {
  '/' : App,
  '/jeu': Jeu
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    viewComponent(){
      if (this.currentRoute.includes('/jeu'))
        return route['/jeu']
      return route[this.currentRoute] || NotFound
    }
  },
  render (h) {return h(this.viewComponent)}
})

const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
