//import Vue from 'Vue';  
import Vue from 'vue/dist/vue.js';
import WHeader from './components/Wheader';
import Favlist from './components/Favlist'

console.log(Vue);
new Vue({
    el: '#app',
    components: { Favlist}
})