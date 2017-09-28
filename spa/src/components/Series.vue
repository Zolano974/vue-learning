<template>
    <section class="hero is-primary">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">All Shows</h1>
                <div class="field">
                    <label class="label">Search</label>
                    <div class="control">
                        <input class="input" v-auto-focus v-model="searchString" type="text" placeholder="Game of thrones, Breaking bad, ...">
                    </div>
                </div>

                <template v-if="shows">

                    <transition-group   name="test"
                                        enter-active-class="animated fadeIn"
                                        leave-active-class="animated fadeOutLeft">

                        <card v-for="show in shows" :key="show.id"
                              :id="show.id"
                              :title="show.aliases[0]"
                              :description="show.description"
                              :status="show.status"
                              :image="show.images.poster"
                              :created="show.creation"
                              :seasons-count.int="show.seasons"
                              :genres="show.genres"
                              :is-favorite="show.favorite"
                        >
                        </card>
                    </transition-group>

                </template>
                <template v-else>
                    <p>Loading...</p>
                </template>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Card from './Card'
    import 'animate.css'

    export default {
        name: 'series',
        components: {
            Card: Card,
        },
        data () {
            return {
                title: "ZOB",
            }
        },
        computed: {
            ...mapGetters({
                shows: 'serie/filteredShows',
            }),
            searchString: {
                get() {
                    return this.$store.getters['serie/searchString']
                },
                set(value){
                    this.$store.dispatch('serie/setSearchString', value)
                }
            },
        },
        methods: {
            async setFavorite (evt) {
                await this.$store.dispatch('serie/setFavorite', {id: evt.id, isFavorite: this.isFavorite})
            }
        },
        created () {
            console.log('Series created')
        },
        async mounted () {
            await this.$store.dispatch('serie/load')
        },
    }
</script>