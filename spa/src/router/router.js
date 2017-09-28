import Vue from 'vue'
import Router from 'vue-router'
import Series from '../components/Series.vue'
import Favorites  from '../components/Favorites.vue'
import Show from '../components/Show.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/shows',
            name : 'Shows',
            component: Series,
            alias: '/',
        },
        {
            path: '/favorites',
            name: 'Favorites',
            component: Favorites
        },
        {
            path: '/starred',
            redirect: '/favorites'
        },
        {
            path: '/shows/view/:id',
            component: Show,
            name: 'Show',
            props: true,
        }

    ]
})

export default router
