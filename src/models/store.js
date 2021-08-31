/**
 * Vuex store example
 */
export default {
    /** Application state */
    state: {
        counter: 0,
    },

    /** Methods that read the application state */
    getters: {
        friendlyCounter(state) {
            return `counter = ${state.counter}`
        },
    },

    /** Methods that change the application state synchronously */
    mutations: {
        setCounter(state, counter) {
            state.counter = counter
        },

        count(state) {
            state.counter++
        },
    },

    /** Methods that change the application state asynchronously */
    actions: {
        countLater({ commit }) {
            setTimeout(() => { commit('count')}, 1000)
        },
    },
}
