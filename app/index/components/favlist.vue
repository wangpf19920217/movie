<template>
    <div>
    	<ul id="example-1">
		  <li v-for="item in 15">
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

<style>
    html{
    	
    }
 </style>