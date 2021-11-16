import Logger from '@felixpy/logger/dist/logger'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'
import VueMaterialLocales from '@undecaf/vue-material-locales'
import de from '@undecaf/vue-material-locales/dist/locale/de'
import en from '@undecaf/vue-material-locales/dist/locale/en-US'
import VueI18n from 'vue-i18n'
import messages from '@/messages.json'
import Vuelidate from 'vuelidate'
import MdModalDialog from 'vue-material-modal-dialog'
import MdVuelidated from '@undecaf/vue-material-vuelidate'
import autofocus from '@undecaf/vue-autofocus'
import hotkey from '@undecaf/vue-hotkey'
import storeConfig from '@/services/store'
import routes from '@/routes'


// Except for main.js, modules requiring Vue should import { Vue } from '@/config.js'
// so that unit tests and regular runtime have the same configuration
export let Vue, router, store, i18n

export default function options(vueClass) {
    Vue = vueClass

    vueClass.config.productionTip = false
    vueClass.config.devtools = false

    vueClass.$logger = vueClass.prototype.$logger = new Logger({
        // See https://github.com/felixpy/logger#logger
        config: {
            // Log priority: ALL, DEBUG, LOG, INFO, WARN, ERROR, OFF
            level: 'LOG',

            // Prefix pattern: %t=date, %p=priority, %c=logger name, %m=method name
            prefix: '[%t] [%m]',

            // Separator between prefix and messages
            separator: '',
        }
    })

    vueClass.use(VueRouter)
    vueClass.use(Vuex)
    vueClass.use(VueMaterial)
    vueClass.use(VueMaterialLocales, [ de, en ])
    vueClass.use(VueI18n)
    vueClass.use(Vuelidate)
    vueClass.use(MdModalDialog)
    vueClass.use(MdVuelidated)
    vueClass.use(autofocus)
    vueClass.use(hotkey)

    const locale = vueClass.material.selectLocale(navigator.language, 'en')

    router = new VueRouter({ routes })
    store = new Vuex.Store(storeConfig)
    i18n = new VueI18n({ locale, messages })

    return {
        router,
        store,
        i18n,
    }
}
