//import Vue from 'Vue';  from 'vue' 不该引的是 vue.js 么？这就要引入另一个知识点：package.json。
//package.json 中的 main 属性决定了，当项目被引入时，输出的是哪个文件，而 vue 的 package.json 中的 main 指向的是 dist/vue.common.js。

import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
//全家桶
import Favlist from './components/Favlist'
import Wheader from './components/Wheader'

import axios from 'axios';
import qs from 'qs';
import jsonp from 'jsonp';

Vue.use(VueRouter); //vuerouter
Vue.use(Vuex)


const url = 'http://192.168.82.106:80/playdatabase/movie.php';
var infolists ;
axios.post(url)
	.then(function(response) {
		infolists = response
	})
	.catch(function(error) {
		console.log(error);
	});

Vue.component('Favlist', {
  props: ['todos'],
})

console.log(infolists)
var vm = new Vue({
	el: '#app',
	components: {
		Favlist,
		Wheader,
	},
	data() {
		return {
			todolists: [{
					text: '电影'
				},
				{
					text: '电视'
				},
				{
					text: '书籍'
				},
				{
					text: '音乐'
				},
				{
					text: '电影'
				},
				{
					text: '电视'
				},
				{
					text: '书籍'
				}
			],
			infolists:infolists
		}
	}
})

/*
 如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。
 确实是如此——如果您的应用够简单，您最好不要使用 Vuex。
 一个简单的 global event bus 就足够您所需了。
 但是，如果您需要构建是一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。
 引用 Redux 的作者 Dan Abramov 的话说就是：

	Flux 架构就像眼镜：您自会知道什么时候需要它。
 * 
 * */