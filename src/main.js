import Vue from 'vue'
import options from '@/config'
import App from '@/components/App.vue'
import '@/main.css'
// Uncomment this when building a PWA:
// import '@/registerServiceWorker'

new Vue({
    ...options(Vue),
    el: '#app',
    render: h => h(App),
})
