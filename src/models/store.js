/**
 * Vuex store example
 */
export default {
    state: {
        counter: 0,
    },

    getters: {
        friendlyCounter(state) {
            return `counter = ${state.counter}`
        },
    },

    mutations: {
        setCounter(state, counter) {
            state.counter = counter
        },

        count(state) {
            state.counter++
        },
    },

    actions: {
        countLater({ commit }) {
            setTimeout(() => { commit('count')}, 1000)
        },
    },
}
