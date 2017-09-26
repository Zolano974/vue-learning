const router = new VueRouter({
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

const mockShows = mockData.shows.map((elt) => {
    return {
        ...elt,
        favorite: false,
    }
})

//Déclaration d'une directive globale
Vue.directive('auto-focus', {
    inserted (el, binding) {
        console.log(binding.value)
        el.focus()
    }
})
//Déclaration d'un filtre global
Vue.filter('limit', (text, length = 35) => {
    return text.slice(0, length) + '...'
})

let vm = new Vue({
    el: '#app',
    router: router,
})
