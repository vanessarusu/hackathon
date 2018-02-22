// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
var VueDragula = require('vue-dragula')
Vue.use(VueDragula)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App ref="app"/>',
  created: function () {
  	let self=this;
  	console.log('hello');
    Vue.vueDragula.options('UI', {
      copy: true
    })
    Vue.vueDragula.options('UX', {
      copy: true
    })
    Vue.vueDragula.options('FE', {
      copy: true
    })
    Vue.vueDragula.options('status', {
      copy: true
    })
    Vue.vueDragula.eventBus.$on('drop', function (args) {
      // var id = args[2].attributes['data-id'].nodeValue;
      console.log(args);
      self.UpdateComponentData();


     })
  },
  methods : {
    UpdateComponentData: function() {
    	console.log(this.$refs);
    	// console.log(this.$refs.home.projects[0]);
    }
  }
})
