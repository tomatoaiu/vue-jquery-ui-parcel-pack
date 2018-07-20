import Vue from 'vue/dist/vue.esm.js'
import Main from './index.vue'
window.$ = require('jquery')
window.jQuery = window.$
require('jquery-ui-dist/jquery-ui.js')

new Vue({
    el: '#app',
    render: h => h(Main)
})
