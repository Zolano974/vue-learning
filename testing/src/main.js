// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router/router'
import store from '@/store/store'
import myconf from '@/plugins/myconf'

Vue.config.productionTip = false

//on utilise le plugin custom de conf
Vue.use(myconf)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})
