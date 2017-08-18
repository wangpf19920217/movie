<template>
	<ul class="movieList" v-if="response">
		<li v-for="movie in response">
			<dl>
				<dt>
					<img v-bind:src="movie.cover"/>
				</dt>
				<dd>
					<p>平片名：<em>{{movie.title}}</em></p>
					<p>评分：<span>{{movie.rate}}</span>	</p>
				
				</dd>
			</dl>
			
		</li>
	</ul>
	<ul v-else="response">
		等待加载
	</ul>
</template>

<script>
	
	import axios from 'axios';
	const url = 'http://192.168.82.106:80/playdatabase/movie.php';
		
    export default {
        data() {
			return {
				response:''
			}
		},
        created () {
        	let vthis = this;
        	axios.post(url)
					.then(function(res) {
						if(res.status == 200){
							
						}
						console.error(res.data.subjects)
						vthis.response=res.data.subjects;
					})
					.catch(function(error) {
						console.log(error);
					})
	    },
  		methods: {
  			
	    }
    }
</script>

<style lang="less">
	.movieList{
		li{
			dl{
				clear: both;
				dt{
					float: right;
					width: 50%;
					img{
						width: 100%
					}
				}
				dd{
					float: left;
					width: 50%;
				}
			}
		}
	}
</style>