<template>
	<footer class="footer">
		<ul>
			<router-link v-for="item in todos" to="/foo">{{item.text}}</router-link>
		</ul>
	</footer>
</template>

<script>
	export default{
		data() {
			return {
				todos: [{
						text: '首页',
					},
					{
						text: '圈子'
					},
					{
						text: '发现'
					},
					{
						text: '我'
					}
				]
			}
		},
	}
</script>

<style lang="less">
	.footer{
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    background: #FFF;
	    z-index: 99;
	    height: 40px;
	    line-height: 40px;
	    border-top: 1px solid #e0e0e0;
	    ul{
    	    display: box;
		    display: -webkit-box;
		    box-align: center;
		    -webkit-box-align: center;
		    box-pack: center;
		    -webkit-box-pack: center;
		    li{
    	        -webkit-box-flex: 1;
			    box-flex: 1;
			    width: 100%;
			    text-align: center;
		    }
	    }
	}
</style>