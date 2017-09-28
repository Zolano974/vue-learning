import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:4000/'
    // timeout: 1000,
})

export default {

    //Return all shows
    async getShows() {
        try{
            var {data} = await client.get('rest/shows')
            return data
        }catch(err){
            throw err
        }
    },
    //Set Favorite prop for a show
    async setFavoriteById(showId, favorite){
        try{
            var {data} = await client.post('rest/shows/' + showId + '/favorites', {
                isFavorites: favorite
            })
            return data
        }catch(err){
            throw err
        }
    }
}