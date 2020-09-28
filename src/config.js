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
import store from '@/models/store'
import routes from '@/routes'

export default function options(vueProto) {
    vueProto.config.productionTip = false

    vueProto.use(VueRouter)
    vueProto.use(Vuex)
    vueProto.use(VueMaterial)
    vueProto.use(VueMaterialLocales, [ de, en ])
    vueProto.use(VueI18n)
    vueProto.use(Vuelidate)
    vueProto.use(MdModalDialog)
    vueProto.use(MdVuelidated)
    vueProto.use(autofocus)
    vueProto.use(hotkey)

    const locale = vueProto.material.selectLocale(navigator.language, 'en')

    return {
        router: new VueRouter({ routes }),
        store: new Vuex.Store(store),
        i18n: new VueI18n({ locale, messages }),
    }
}
