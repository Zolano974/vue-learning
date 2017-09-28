import axios from 'axios'

export default {
    install(Vue, options){

        //array prototypes modifs
        Array.prototype.getById = (id) => {
            return this.filter((elt) => {
                return elt.id === id
            })
        }
        Array.prototype.clearById = (id) => {
            return this.filter((elt) => {
                return elt.id !== id
            })
        }

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
    }
}

