<<<<<<< HEAD
//main.js is the entry point to vue. ouput folder
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
=======
import Vue from 'vue'
import App from './App.vue'
import router from './router'
>>>>>>> dee4a56f5b66fd6d0427c45e3b7e497d5f73ec0c

Vue.config.productionTip = false

new Vue({
<<<<<<< HEAD
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
=======
  render: h => h(App),
  router
}).$mount('#app')
>>>>>>> dee4a56f5b66fd6d0427c45e3b7e497d5f73ec0c
