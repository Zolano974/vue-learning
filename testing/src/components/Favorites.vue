<template>
    <section class="hero is-primary">
        <div class="hero-body">
            <div class="container" v-if="shows.length">
                <h1 class="title">Favorite Shows</h1>

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
            </div>
            <div class="container" v-else>
                Aucun favoris...
            </div>
        </div>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Card from './Card.vue'

    export default {
        name: 'favorites',
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
                shows: 'serie/favoriteShows',
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