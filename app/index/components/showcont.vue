<template>
	<ul>
		asdas
	</ul>
</template>

<script>
	
	import axios from 'axios';
	const url = 'http://192.168.82.106:80/playdatabase/movie.php';
		axios.post(url)
						.then(function(response) {
							console.error(response);
						})
						.catch(function(error) {
							console.log(error);
						})
    export default {
        data() {
			return {
				todos: [{
						text: '电影',
						events:'movieInfo'
					},
					{
						text: '电视'
					},
					{
						text: '书籍'
					},
					{
						text: '音乐'
					}
				]
			}
		},
        created () {
		   console.log(this.todos) 
		   console.log(this.infos) 
	    },
  		methods: {
  			
	    }
    }
</script>

<style>
</style>