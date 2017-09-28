import Vue from 'vue'
import Vuex from 'vuex'
import serie from './modules/serie'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        serie: serie
    }
})
