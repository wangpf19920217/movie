<template>
	<ul class="showtitle">
		<li>1-20</li>
		<li>21-40</li>
		<li>41-60</li>
		<li>61-80</li>
		<li>81-100</li>
	</ul>
</template>

<script>
	export default{
		data() {
			return {
				
			}
		},
		methods: {
		    
		},
		components:{
		}
	}
	
</script>

<style lang="less">
	.showtitle{
		display: flex;
		li{
			flex: 1;
			text-align: center;
			height: 40px;
			line-height: 40px;
		}
	}
</style>