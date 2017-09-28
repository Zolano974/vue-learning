import restAdapter from '../../api/adapter'

const state = {
    shows: [],
    searchString: ''
}

const actions = {
    load: async (store) => {
        try {
            var shows = await restAdapter.getShows()
            store.commit('LOAD_SHOWS', shows)
        } catch (err) {
            console.log('error', err)
        }
    },
    setFavorite: async (store, {id, isFavorite}) => {
        console.log('store set favorite')
        try {
            var result = restAdapter.setFavoriteById(id, isFavorite)
            store.commit('SET_FAVORITE', {id, isFavorite})
        } catch (err) {
            console.log('error', err)
        }
    },
    setSearchString: (store, search) => {
        store.commit('SET_SEARCH', search)
    }
}

const mutations = {
    LOAD_SHOWS (state, shows) {
        console.log(shows)
        state.shows = shows.map((elt) => {
            return {
                ...elt,
                favorite: elt.isFavorites
            }
        })
    },
    SET_FAVORITE (state, {id, isFavorite}) {
        var show = state.shows.find((elt) => {
            return elt.id === id
        })
        show.favorite = isFavorite
    },
    SET_SEARCH (state, search) {
        state.searchString = search
    }
}

const getters = {
    shows: (state) => state.shows,
    filteredShows: (state) => {
        //si searchstring est vide, on renvoie toute la liste
        if (state.searchString === "") {
            return state.shows
        }
        //sinon on filtre sur titre
        else {
            return state.shows.filter((elt) => {
                //tester que elt.title contient searchString
                return ( elt.title.toLowerCase().indexOf(state.searchString.toLowerCase()) !== -1 )
            })
        }
    },
    favoriteShows: (state) => {
        return state.shows.filter(elt => {
            return elt.favorite === true
        })
    },
    searchString: (state) => state.searchString,
}

export default {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
}