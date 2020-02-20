import Vue from 'vue';
import MainApp from './components/main.vue';
const API = require('./src/pricesFetcher');

document.addEventListener("DOMContentLoaded", function() {
    new Vue({
        el: '#app',
        render: h => h(MainApp, { props: {api: API.fetchCrypto }})
    })
});
