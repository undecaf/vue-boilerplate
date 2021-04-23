import Vue from 'vue'
import options from '@/config'
import App from '@/components/App.vue'
import '@/main.css'
import { mount } from '@vue/test-utils'

const config = options(Vue)


/**
 * Tests whether the app is configured as intended
 */
describe('Configuration', () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(App, config)
    })


    it('provides the logger', () => {
        expect(Vue.$logger.log).to.be.a('function')
        expect(Vue.prototype.$logger.log).to.be.a('function')
    })

    it('provides the Vue router', () => {
        expect(wrapper.vm.$router).to.exist
    })

    it('provides the Vuex store', () => {
        expect(wrapper.vm.$store).to.exist
    })

    it('provides the Vue I18N', () => {
        expect(wrapper.vm.$t).to.be.a('function')
    })
})
