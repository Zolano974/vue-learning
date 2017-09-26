const Series = Vue.component('series', {
    template: `
       <section class="hero is-primary">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">{{searchString}}</h1>
                <div class="field">
                    <label class="label">Search</label>
                    <div class="control">
                        <input class="input" v-auto-focus="'zobby lamouche'" v-model="searchString" type="text" placeholder="Game of thrones, Breaking bad, ...">
                    </div>
                </div>
                <card v-for="show in filteredShows" :key="show.id"
                      :id="show.id"
                      :title="show.aliases[0]"
                      :description="show.description"
                      :status="show.status"
                      :image="show.images.poster"
                      :created="show.creation"
                      :seasons-count.int="show.seasons"
                      :genres="show.genres"
                      :is-favorite="show.favorite"
                      @toggle-favorite="setFavorite"
                >
                </card>
            </div>
        </div>
    </section>
    `,
    data () {
        return {
            title: "ZOB",
            shows: mockShows,
            searchString: "",
        }
    },
    computed: {
        interpolAB: function () {
            return this.a + this.b
        },
        filteredShows(){
            //si searchstring est vide, on renvoie toute la liste
            if (this.searchString === "") {
                return this.shows
            }
            //sinon on filtre sur titre
            else {
                return this.shows.filter((elt) => {
                    //tester que elt.title contient searchString
                    return ( elt.title.toLowerCase().indexOf(this.searchString.toLowerCase()) !== -1 )
                })
            }
        },
    },
    methods: {
        setFavorite (evt) {
            let movie = this.shows.find((elt) => {
                return elt.id === evt.id
            })
            movie.favorite = evt.status
        }
    },
    mounted () {
    },
})