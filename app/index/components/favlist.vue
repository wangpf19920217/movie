<template>
    <div class="cont">
    	<ul id="example-1">
		  <li v-for="item in 25">
		    {{ msg }}
		  </li>
		</ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello World!'
            }
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
	   }
 </style>