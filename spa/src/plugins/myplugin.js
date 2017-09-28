export default {
    install(Vue, options){
        //methodes
        Vue.myGlobalMethod = () => {
            //behaviour
        }
        //objects
        Vue.myGlobalObject = {
            key: 'value'
        }
        //directives
        Vue.directive('my-directive', {
            //directive
        })
        //filters
        Vue.filter('my-filter', {
            //my filter
        })
    }
}