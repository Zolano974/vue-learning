<template>
    <card :id="show.id"
          :title="show.aliases[0]"
          :description="show.description"
          :status="show.status"
          :image="show.images.poster"
          :created="show.creation"
          :seasons-count.int="show.seasons"
          :genres="show.genres"
          :is-favorite="show.favorite"
          v-if="show"
    >
    </card>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Card from './Card.vue'

    export default {
        name: 'show',
        components: {
            Card
        },
        props: ['id'],
        data() {
            return {

            }
        },
        computed: {
            show () {
                return this.$store.getters['serie/shows'].find((elt) => {
                    return elt.id == this.id
                })
            }
        },
    }
</script>