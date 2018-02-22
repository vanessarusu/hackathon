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
  template: '<App/>',
  created: function () {
  	let self=this;
  	console.log('hello');
    Vue.vueDragula.options('UI', {
      // direction: 'vertical'
      copy: true
    })
    Vue.vueDragula.options('UX', {
      // direction: 'vertical'
      copy: true
    })
    Vue.vueDragula.options('FE', {
      // direction: 'vertical'
      copy: true
    })
    Vue.vueDragula.options('status', {
      // direction: 'vertical'
      copy: true
    })
    Vue.vueDragula.eventBus.$on('drop', function (args) {
      var test = args[2].attributes['data-id'].nodeValue;
      self.update(args[1], args[2]);

     })
    // Vue.vueDragula.eventBus.$on('dropModel', function (args) {
    //   console.log('dropModel: ' + args[0])
    // })
    // console.log(Vue.vueDragula.find('first-bag'));
  },
  methods : {
    update: function(e, q) {
      console.log(e);
      console.log(q);
    }
  }
})
