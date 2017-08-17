<template>
    <div class="cont">
		<ul class="c_list">
		  <li v-for="item in todos">
		    {{ item.text }}
		  </li>
		</ul>
		<div>
			{{ infos }}
		</div>
    </div>
</template>

<script>
    export default {
    	props: ['todos','infos'],
        data () {
            return {
                msg: 'Hello World!'
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
	    	width: 100px;
	    	li{
	    		height: 36px;
	    		line-height: 36px;
	    		text-align: center;
	    		font-size: 13px;
	    	}
	    }
   }
 </style>