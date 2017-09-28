const Show = Vue.component('show', {
    template: `
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
       `,
    props: ['id'],
    data () {
        return {
            show: null
        }
    },
    async mounted() {
        try{
            var {data} = await restClient.get('rest/shows/'+this.id)
            this.show = data
        }
        catch(err){
            console.log(err)
        }
    }
})