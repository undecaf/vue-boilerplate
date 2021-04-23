import Vue from 'vue'
import options, { store } from '@/config'

const config = options(Vue)


/**
 * Tests the Vuex store getters, mutations and actions
 */
describe('Vuex store', () => {

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    it('exists', () => {
        expect(store).to.exist;
    })

    it('has a counter property', () => {
        expect(store.state.counter).to.be.equal(0)
    })

    it('has a friendlyCounter getter', () => {
        expect(store.getters.friendlyCounter).to.exist
    })

    it('can set the counter', () => {
        const value = 42
        store.commit('setCounter', value)
        expect(store.state.counter).to.be.equal(value)
    })

    it('returns the count in friendlyCounter', () => {
        const value = 42
        store.commit('setCounter', value)
        expect(store.getters.friendlyCounter).to.be.equal(`counter = ${value}`)
    })

    it('can increment the counter', () => {
        const value = 42
        store.commit('setCounter', value)

        store.commit('count')
        expect(store.state.counter).to.be.equal(value + 1)
    })

    it('can increment the counter asynchronously', async () => {
        const value = 42
        store.commit('setCounter', value)

        store.dispatch('countLater')
        expect(store.state.counter).to.be.equal(value)

        await delay(1500)
        expect(store.state.counter).to.be.equal(value + 1)
    })
})