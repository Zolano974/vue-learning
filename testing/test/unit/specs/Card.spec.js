import Vue from 'vue'
import Card from '@/components/Card'

describe('Card.vue', () => {
    it('should render correct title', () => {
        const Constructor = Vue.extend(Card)
        const vm = new Constructor({
            propsData: {
                id: 1,
                title: 'ZOBBY',
                description: 'BLABLABLA',
                status: 'Incoming',
                image: 'zob.png',
                created: '2017-04-01',
                seasonsCount: 7,
                genres: ['action', 'zob'],
                isFavorite: true
            }
        }).$mount()
        console.log(vm)
        expect(vm.$el.querySelector('.card-header h2').textContent)
            .to.equal('ZOBBY')
    })
})

//mock API : sinon