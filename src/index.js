import Vue from 'vue/dist/vue.esm.js'
import Main from './index.vue'
window.$ = require('jquery')

new Vue({
    el: '#app',
    render: h => h(Main)
})
