<template>
    <div class="cont">
		<ul class="c_list">
		  <li v-for="item in todos" v-on:events>
		    {{ item.text }}
		  </li>
		</ul>
		<div class="c_info">
			<div>
				<InfoTitle></InfoTitle>
				<InfoList></InfoList>
			</div>
		</div>
    </div>
</template>

<script>

	import InfoList from './showcont'
	import InfoTitle from './showtitle'
	
	export default{
		components:{
			InfoList,
			InfoTitle
		}
	}
    
</script>

<style lang="less">
   .cont{
	    padding-top: 44px;
	    background-color: #f5f5f5;
	    border: 0;
	    display: block;
	    width: 100%;
	    height: 100%;
	    overflow: visible;
	    overflow-y: scroll;
	    box-sizing: border-box;
	    display: flex;
	    .c_list{
	    	padding: 15px 0 ;
	    	box-sizing: border-box;
	    	overflow-y: scroll;
    	    min-width: 100px;
	    	border-right:1px solid red;
	    	li{
	    		height: 36px;
	    		line-height: 36px;
	    		text-align: center;
	    		font-size: 13px;
	    	}
	    }
	    .c_info{
	    	flex: 1;
    	    position: relative;
		    padding-left: 10px;
	    	background: wheat;
	    	ul{
	    		li{
	    			display: block;
	    			
	    		}
	    	}
	    }
   }
 </style>