import Vue from 'vue'
import options from '@/config'
import App from '@/components/App.vue'
import '@/main.css'
import { mount } from '@vue/test-utils'

const config = options(Vue)


describe('<app>', () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(App, config)
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
