import Vue from 'vue'
import options from '@/config'
import App from '@/components/App.vue'
import '@/main.css'

new Vue({
    ...options(Vue),
    el: '#app',
    render: h => h(App),
})
