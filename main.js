import Vue from 'vue';
import axios from 'axios';
import App from './components/SomeViewComponent.vue';

console.log('Loading Vue!')
document.addEventListener("DOMContentLoaded", function() {
    console.log('Your document is ready!');
    new Vue({
        el: '#app',
        render: h => h(App)
    }).$mount('#app')
});
