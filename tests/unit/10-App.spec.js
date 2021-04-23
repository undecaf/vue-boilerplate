import Vue from 'vue'
import options from '@/config'
import App from '@/components/App.vue'
import '@/main.css'
import { mount } from '@vue/test-utils'

const config = options(Vue)


/**
 * Tests component methods and component UI
 */
describe('<app> component', () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(App, config)
    })


    it('returns the correct answer()', () => {
        expect(wrapper.vm.answer()).to.be.equal(42)
    })

    it('renders the title', () => {
        const toolbar = wrapper.get('.md-toolbar')
        expect(toolbar.text()).to.include('Vue.js')
    })

    it('renders the view content', () => {
        const content = wrapper.get('.md-content')
        expect(content.text()).to.equal('Default view')
    })
})
