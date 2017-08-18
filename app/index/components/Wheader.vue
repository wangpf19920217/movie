<template>
	<header>
		<a class="returnbtn">返回</a>
		<h2>{{ msg }}</h2>
		<a class="Hlist">功能</a>
	</header>
</template>

<script>
    export default {
        data () {
            return {
                msg: '接口测试'
            }
        }
    }
</script>

<style lang="less">
	body{
		
	}
	header{
	    width: 100%;
	    height: 44px;
	    background: #f8f8f8;
	    position: fixed;
	    top: 0;
	    text-align: center;
	    vertical-align: middle;
	    z-index: 801;
	    font-size: 20px;
	    color: #333;
	    overflow: hidden;
	    border-bottom: 1px solid #d6d6d6;
	    padding: 0 16px;
	    box-sizing: border-box;
	    .returnbtn{
	    	    display: inline-block;
			    height: 44px;
			    line-height: 44px;
			    color: #333;
			    float: left;
	    }
	    .Hlist{
	    	display: inline-block;
			    height: 44px;
			    line-height: 44px;
			    color: #333;
			    float: right;
	    }
	    h2{
    	    text-align: center;
    		display: inline-block;
	    }
	}
 </style>