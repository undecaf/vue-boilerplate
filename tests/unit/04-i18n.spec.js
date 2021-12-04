import Vue from 'vue'
import options, { i18n } from '@/config'
import messages from '@/messages.json'

const config = options(Vue)


/**
 * Tests internationalization
 */
describe('I18N', () => {

    it('is loaded', () => {
        expect(i18n).to.be.a('object')
        expect(i18n.t).to.be.a('function')
    })

    it('translates', () => {
        expect(i18n.t('title')).to.equal(messages[i18n.locale].title)
    })
})
