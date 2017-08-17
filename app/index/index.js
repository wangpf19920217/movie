//import Vue from 'Vue';  from 'vue' 不该引的是 vue.js 么？这就要引入另一个知识点：package.json。
//package.json 中的 main 属性决定了，当项目被引入时，输出的是哪个文件，而 vue 的 package.json 中的 main 指向的是 dist/vue.common.js。

import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
import Favlist from './components/Favlist'
import Wheader from './components/Wheader'
	
new Vue({
    el: '#app',
    components: { 
    	Favlist,
    	Wheader
    }
})